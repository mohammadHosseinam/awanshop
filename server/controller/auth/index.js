const User = require('./../../model/User/index.js').User;
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const handelLoginUser = async (req, res) => {
    if (!req.body.username) return res.status(400).json({ massage: "لطفا نام کاربری را وارد کنید" })
    if (!req.body.password) return res.status(400).json({ massage: "لطفا پسورد را وارد کنید" })
    const existUser = await User.findOne({ userName: req.body.userName })
    if (!existUser) return res.status(400).json({ massage: "نام کاربری یا رمز عبور ناصحیح است" })
    const { password: userPassword, name: userName, _id: userId } = existUser
    bcrypt.compare(req.body.password.toString(), existUser.password, function (err, result) {
      if (!result) return res.status(400).json({ massage: "نام کاربری یا رمز عبور ناصحیح است" })
      const token = JWT.sign({userName , userId} , process.env.SECRETKEY)
      return res.status(201).json({ massage: " ورود به حساب کاربری با موفقیت انجام شد" , token })
    })
  }

const handelSignInUser = async (req, res) => {
    if (!req.body.userNmae) return res.status(400).json({ massage: "لطفا نام کاربری را وارد کنید" })
    if (!req.body.phoneNumber) return res.status(400).json({ massage: "لطفا شماره تلفن را وارد کنید" })
    if (!req.body.password) return res.status(400).json({ massage: "لطفا پسورد را وارد کنید" })
    const existUser = await User.findOne({ userName: req.body.userName })
    if (existUser) return res.status(400).json({ massage: "شما قبلا حساب ساخته اید" })
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password.toString(), salt)
    const newUser = new User({ phoneNumber: String , userName : String, password: String})
    await newUser.save()
    res.status(201).json({ massage: "حساب کاربری با موفقیت ساخته شد" })
  }

module.exports = { handelLoginUser, handelSignInUser }