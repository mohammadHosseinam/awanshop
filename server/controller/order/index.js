const { Order } = require("../../model/Order");
const { User } = require("../../model/User");
const JWT = require('jsonwebtoken');

const handelCreateOrder = async (req, res) => {
    if (!req.headers.authorization) return res.status(404).json({ massage: "لطفا ابتدا وارد حسابتان شوید" })
    if (!req.body.name) return res.status(400).json({ massage: "لطفا نام را وارد کنید" })
    if (!req.body.phone) return res.status(400).json({ massage: "لطفا تلفن را وارد کنید" })
    if (!req.body.address) return res.status(400).json({ massage: "لطفا آدرس را وارد کنید" })
    if (!req.body.postCode) return res.status(400).json({ massage: "لطفا کد پستی را وارد کنید" })
    const decodedToken = JWT.decode(req.headers.authorization, process.env.SECRETKEY)
    const user = await User.findOne({ _id: decodedToken.userId })
    products = req.body.products
    totalPrice = 0
    products.array.forEach(product => {
        totalPrice += product.price
    });
    const newOrder = new Order({ name: req.body.name, phoneNumber: req.body.phone, postCode: req.body.postCode, address: req.body.address, products: req.body.products, userId: user._id, totalPrice })
    await newOrder.save()
    res.status(201).json({ massage: "سفارش شما با موفقیت ثبت شد" })
}

const handelShoweAllUserOrders = async (req, res) => {
    const decodedToken = JWT.decode(req.headers.authorization, process.env.SECRETKEY)
    const user = await User.findOne({ _id: decodedToken.userId })
    const allOrders = await Order.find({ idOfProduct: user._id })
    if (!allOrders) return res.status(404).json({ massage: "سفارشی ثبت نشده" })
    res.status(200).json({ allOrders })
}

const handelShoweUnsendUserOrders = async (req, res) => {
    const decodedToken = JWT.decode(req.headers.authorization, process.env.SECRETKEY)
    const user = await User.findOne({ _id: decodedToken.userId })
    const allOrders = await Order.find({ idOfProduct: user._id , status : "unsend"})
    if (!allOrders) return res.status(404).json({ massage: "سفارشی در حال ارسال نیست" })
    res.status(200).json({ allOrders })
}

const handelShoweRejectedUserOrders = async (req, res) => {
    const decodedToken = JWT.decode(req.headers.authorization, process.env.SECRETKEY)
    const user = await User.findOne({ _id: decodedToken.userId })
    const allOrders = await Order.find({ idOfProduct: user._id , status : "rejected"})
    if (!allOrders) return res.status(404).json({ massage: "سفارشی مرجوع نشده" })
    res.status(200).json({ allOrders })
}

module.exports = { handelShoweAllUserOrders , handelCreateOrder , handelShoweUnsendUserOrders , handelShoweRejectedUserOrders}