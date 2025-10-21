const { Order } = require("../../model/Order");
const { User } = require("../../model/User");
const { Product } = require("../../model/Product");
const JWT = require('jsonwebtoken');
const zarinpal = require('zarinpal-checkout');
const zarinpalInstance = zarinpal.create(process.env.ZARINPAL_MERCHANT_ID, true);

const handleCreateOrder = async (req, res) => {
  if (!req.headers.authorization) return res.status(401).json({ message: "لطفا ابتدا وارد حسابتان شوید" });
  if (!req.body.name) return res.status(400).json({ message: "لطفا نام را وارد کنید" });
  if (!req.body.phoneNumber) return res.status(400).json({ message: "لطفا تلفن را وارد کنید" });
  if (!req.body.address) return res.status(400).json({ message: "لطفا آدرس را وارد کنید" });
  if (!req.body.postCode) return res.status(400).json({ message: "لطفا کد پستی را وارد کنید" });
  if (!req.body.basket || !Array.isArray(req.body.basket) || req.body.basket.length === 0) {
    return res.status(400).json({ message: "سبد خرید نمی‌تواند خالی باشد" });
  }

  try {
    const decodedToken = JWT.verify(req.headers.authorization, process.env.SECRETKEY);
    const user = await User.findById(decodedToken.userId);
    if (!user) return res.status(404).json({ message: "کاربر یافت نشد" });

    const productIds = req.body.basket.map(p => p.id);
    const productsData = await Product.find({ _id: { $in: productIds } });

    if (productsData.length !== productIds.length) {
      return res.status(400).json({ message: "برخی از محصولات موجود نیستند" });
    }

    let totalPrice = 0;
    let payablePrice = 0;

    for (let item of req.body.basket) {
      const product = productsData.find(p => p._id.toString() === item.id);
      if (!product) return;

      const selectedSize = item.size;
      const linkedGroups = product.linkedSizes || [];

      // پیدا کردن گروه مرتبط با سایز انتخاب‌شده
      let sizeGroup = [selectedSize]; // پیش‌فرض: خودش تنها

      for (let group of linkedGroups) {
        if (group.includes(selectedSize)) {
          sizeGroup = group;
          break;
        }
      }

      // بررسی موجودی کل گروه
      for (let size of sizeGroup) {
        if (!product.sizes[size] || product.sizes[size] < item.count) {
          return res.status(400).json({
            message: `موجودی سایز ${size} از محصول ${product.name} کافی نیست`
          });
        }
      }

      // کم کردن از موجودی گروه
      for (let size of sizeGroup) {
        await Product.updateOne(
          { _id: product._id },
          { $inc: { [`sizes.${size}`]: -item.count } }
        );
      }

      const itemTotal = product.price * item.count;
      const itemDiscount = product.discount ? (itemTotal * product.discount) / 100 : 0;
      totalPrice += itemTotal;
      payablePrice += itemTotal - itemDiscount;
    }


    const newOrder = new Order({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      postCode: req.body.postCode,
      address: req.body.address,
      products: req.body.basket,
      userId: user._id,
      totalPrice,
      payablePrice,
      status: "pending",
      createdAt: new Date()
    });
    const zarinpalInstance = zarinpal.create(process.env.ZARINPAL_MERCHANT_ID, true);
    await newOrder.save();
    const response = await zarinpalInstance.PaymentRequest({
      Amount: payablePrice, // مبلغ به تومان
      CallbackURL: `${process.env.CLIENT_URL}/payment/verify?orderId=${newOrder._id}`, // این آدرس باید در پنل زرین‌پال ثبت شده باشه
      Description: `پرداخت سفارش ${newOrder._id}`,
      Email: user.email || undefined,
      Mobile: user.phoneNumber || undefined,
    });

    // اگر موفق بود، authority رو بفرست برای فرانت
    if (response.status === 100) {
      res.status(201).json({
        message: "سفارش شما با موفقیت ثبت شد",
        orderId: newOrder._id,
        authority: response.authority,
        paymentLink: `https://sandbox.zarinpal.com/pg/StartPay/${response.authority}`
      });
    } else {
      res.status(500).json({
        message: "مشکلی در اتصال به درگاه پرداخت رخ داده است",
        zarinpalStatus: response.status
      });
    }
  } catch (error) {
    res.status(500).json({ message: "خطایی در سرور رخ داده است", error: error.message });
  }
};

// GET /api/verify-payment?Authority=...&Status=...&order_id=...

const verifyPayment = async (req, res) => {
  const { authority, status, orderId } = req.query;
  console.log(req.query)
  console.log("authority:", authority);
  console.log("status:", status);
  console.log("orderId:", orderId);

  if (!authority || !status || !orderId) {
    return res.status(400).json({ message: 'Missing required parameters.' });
  }
  const order = await Order.findOne({ _id: orderId });
  if (!order) return res.status(404).json({ message: "سفارش پیدا نشد" });
  if (order.status === "paid") {
    return res.status(200).json({ success: true, message: "قبلاً پرداخت شده" });
  }
  if (status !== 'OK') {
    await Order.findByIdAndDelete(orderId);
    return res.status(400).json({ success: false, message: "پرداخت لغو شد" });
  }

  const zarinpal = require('zarinpal-checkout');
  const zarinpalInstance = zarinpal.create(process.env.ZARINPAL_MERCHANT_ID, true);

  const response = await zarinpalInstance.PaymentVerification({
    Amount: order.payablePrice,
    Authority: authority,
  });

  if (response.status === 100) {
    order.status = "paid";
    await order.save();
    return res.status(200).json({ success: true, message: "پرداخت موفقیت‌آمیز بود" });
  } else {
    await Order.findByIdAndDelete(orderId);
    return res.status(400).json({ success: false, message: "پرداخت ناموفق بود" });
  }
};


const handelShowAllUserOrders = async (req, res) => {
  const decodedToken = JWT.decode(req.headers.authorization, process.env.SECRETKEY)
  const user = await User.findOne({ _id: decodedToken.userId })
  const allOrders = await Order.find({ idOfProduct: user._id })
  if (!allOrders) return res.status(404).json({ massage: "سفارشی ثبت نشده" })
  res.status(200).json({ allOrders })
}

const handelShowUnsendUserOrders = async (req, res) => {
  const decodedToken = JWT.decode(req.headers.authorization, process.env.SECRETKEY)
  const user = await User.findOne({ _id: decodedToken.userId })
  const allOrders = await Order.find({ idOfProduct: user._id, status: "unsend" })
  if (!allOrders) return res.status(404).json({ massage: "سفارشی در حال ارسال نیست" })
  res.status(200).json({ allOrders })
}

const handelShowRejectedUserOrders = async (req, res) => {
  const decodedToken = JWT.decode(req.headers.authorization, process.env.SECRETKEY)
  const user = await User.findOne({ _id: decodedToken.userId })
  const allOrders = await Order.find({ idOfProduct: user._id, status: "rejected" })
  if (!allOrders) return res.status(404).json({ massage: "سفارشی مرجوع نشده" })
  res.status(200).json({ allOrders })
}

module.exports = { handelShowAllUserOrders, handleCreateOrder, handelShowUnsendUserOrders, handelShowRejectedUserOrders, verifyPayment }