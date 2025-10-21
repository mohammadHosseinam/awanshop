const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    phoneNumber: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 120 } // TTL: حذف بعد از ۲ دقیقه
});

const OTP = mongoose.model("OTP", otpSchema);
module.exports = {OTP}