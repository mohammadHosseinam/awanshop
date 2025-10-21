const User = require('./../../model/User/index.js').User;
const OTP = require('./../../model/OTP/index.js').OTP;

const JWT = require('jsonwebtoken');
var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({ apikey: '6D597739704B49376472333263486651722B6546656D6A686F6C6E2F366E6F63436A31633348774C4550733D' });
const ADMIN_NUMBERS = process.env.ADMIN_NUMBERS.split(",");

const sendOTP = async (req, res) => {
  const { phoneNumber } = req.body;
  // if (!phoneNumber) return res.status(400).json({ message: "شماره تلفن الزامی است" });
  // let user = await User.findOne({ phoneNumber });
  // if (!user) {
  //   return res.status(400).json({ message: "ابتدا ثبت نام کنید" });
  // }
  // const otp = Math.floor(100000 + Math.random() * 900000); // تولید OTP 6 رقمی
  // await OTP.findOneAndUpdate(
  //     { phoneNumber },
  //     { otp, createdAt: new Date() }, // ایجاد یا بروزرسانی OTP
  //     { upsert: true }
  // );

  // api.VerifyLookup({ receptor: phoneNumber, token: otp, template: "otpTestTech", type: "sms" });

  res.status(200).json({ message: "کد تایید ارسال شد" });
};

const verifyOTP = async (req, res) => {
  const { phoneNumber, otp } = req.body;
  // if (!phoneNumber || !otp) return res.status(400).json({ message: "شماره تلفن و کد تایید الزامی است" });

  // const record = await OTP.findOne({ phoneNumber });
  // if (!record || record.otp !== otp) return res.status(400).json({ message: "کد تایید نادرست یا منقضی شده است" });

  // await OTP.deleteOne({ phoneNumber }); // حذف OTP بعد از استفاده

  let user = await User.findOne({ phoneNumber });
  if (!user) {
      user = new User({ phoneNumber });
      await user.save();
  }

  const token = JWT.sign({ userId: user._id, phoneNumber  , firstName : user.firstName , lastName : user.lastName}, process.env.SECRETKEY, { expiresIn: "30d" });
  res.status(200).json({ message: "ورود موفقیت‌آمیز بود", token });
};
const sendRegisterOTP = async (req, res) => {
  const { phoneNumber, firstName, lastName } = req.body;
  if (!phoneNumber || !firstName || !lastName) {
      return res.status(400).json({ message: "لطفا نام، نام خانوادگی و شماره تلفن را وارد کنید" });
  }
  let user = await User.findOne({ phoneNumber });
  if (user) {
    return res.status(400).json({ message: "شما قبلا ثبت نام کرده اید" });
  }
  const otp = Math.floor(100000 + Math.random() * 900000); // تولید کد ۶ رقمی
  await OTP.findOneAndUpdate(
      { phoneNumber },
      { otp, createdAt: new Date() },
      { upsert: true }
  );

  // ارسال کد از طریق کاوه‌نگار
  api.VerifyLookup({ receptor: phoneNumber, token: otp, template: "otpTestTech", type: "sms" });

  res.status(200).json({ message: "کد تایید ارسال شد", phoneNumber });
};

const verifyOTPAndRegister = async (req, res) => {
  const { phoneNumber, otp, firstName, lastName } = req.body;
  if (!phoneNumber || !otp) {
      return res.status(400).json({ message: "شماره تلفن و کد تایید الزامی است" });
  }

  const record = await OTP.findOne({ phoneNumber });
  if (!record || record.otp !== otp) {
      return res.status(400).json({ message: "کد تایید نادرست یا منقضی شده است" });
  }

  let user = await User.findOne({ phoneNumber });
  if (!user) {
      user = new User({ phoneNumber, firstName, lastName , isAdmin: ADMIN_NUMBERS.includes(phoneNumber.trim())});
      await user.save();
  }

  await OTP.deleteOne({ phoneNumber }); // حذف OTP پس از ثبت‌نام موفق

  const token = JWT.sign({ userId: user._id, phoneNumber , firstName : user.firstName , lastName : user.LastName}, process.env.SECRETKEY, { expiresIn: "30d" });
  res.status(200).json({ message: "ثبت‌نام موفقیت‌آمیز بود", token, user });
};


module.exports = { sendOTP, verifyOTP , sendRegisterOTP , verifyOTPAndRegister};