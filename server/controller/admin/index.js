const { Order } = require("../../model/Order");

const showUnsendOrdersHandeler = async (req , res) => {
    const unsenededOrders = await Order.find({status : "unsend"})
    if (!unsenededOrders) return res.status(404).json({ massage: "سفارش جدیدی پیدا نشد" })
    return res.status(200).json({unsenededOrders})
}

const showAllOrdersHandeler = async (req , res) => {
    const unsenededOrders = await Order.find({})
    if (!unsenededOrders) return res.status(404).json({ massage: "سفارشی ثبت نشده" })
    return res.status(200).json({unsenededOrders})
}

const showReturnedOrdersHandeler = async(req , res) => {
    const unsenededOrders = await Order.find({status : "returned"})
    if (!unsenededOrders) return res.status(404).json({ massage: "سفارشی برگشت نخورده " })
    return res.status(200).json({unsenededOrders})
}

const updateOrderStatusHandeler = async(req , res) => {
    const order = await Order.findOne({_id : req.body.orderId})
    const updatedORder = order
    updatedORder.status = req.body.status
    await Order.updateOne({_id : req.body.orderId} , updatedORder)
    return res.status(200).json({message : "سفارش با موفقیت آپدیت شد"})
}

module.exports = { showAllOrdersHandeler , showUnsendOrdersHandeler , showReturnedOrdersHandeler , updateOrderStatusHandeler}