// controllers/orderController.js
const { Order } = require("../../model/Order");

const showUnsendOrdersHandler = async (req, res) => {
    try {
        const orders = await Order.find({ status: "unsend" });
        if (!orders.length) {
            return res.status(404).json({ message: "سفارش ارسال‌نشده‌ای یافت نشد" });
        }
        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ message: "خطای سرور", error: error.message });
    }
};

const showAllOrdersHandler = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit
        const { status, date } = req.query

        const filter = {}

        // فیلتر وضعیت سفارش
        if (status && status !== "all") {
            filter.status = status
        }

        // فیلتر بازه زمانی
        if (date && date !== "all") {
            const now = new Date()
            let fromDate

            if (date === "today") {
                fromDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
            } else if (date === "week") {
                fromDate = new Date(now.setDate(now.getDate() - 7))
            } else if (date === "month") {
                fromDate = new Date(now.setDate(now.getDate() - 30))
            }

            if (fromDate) {
                filter.orderedAt = { $gte: fromDate }
            }
        }

        const totalOrders = await Order.countDocuments(filter)

        const orders = await Order.find(filter)
            .sort({ orderedAt: -1 })
            .skip(skip)
            .limit(limit)

        res.status(200).json({
            orders,
            totalOrders,
            page,
            totalPages: Math.ceil(totalOrders / limit),
        })
    } catch (err) {
        res.status(500).json({ message: "خطا در دریافت سفارش‌ها", error: err.message })
    }
}


const showReturnedOrdersHandler = async (req, res) => {
    try {
        const orders = await Order.find({ status: "returned" });
        if (!orders.length) {
            return res.status(404).json({ message: "سفارش برگشتی یافت نشد" });
        }
        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ message: "خطای سرور", error: error.message });
    }
};

const updateOrderStatusHandler = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: "سفارشی با این شناسه پیدا نشد" });
        }

        order.status = status;
        await order.save();

        res.status(200).json({ message: "وضعیت سفارش با موفقیت بروزرسانی شد" });
    } catch (error) {
        res.status(500).json({ message: "خطای سرور", error: error.message });
    }
};

module.exports = {
    showAllOrdersHandler,
    showUnsendOrdersHandler,
    showReturnedOrdersHandler,
    updateOrderStatusHandler
};


// module.exports = { showAllOrdersHandeler , showUnsendOrdersHandeler , showReturnedOrdersHandeler , updateOrderStatusHandeler}