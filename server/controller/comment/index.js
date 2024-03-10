const { Comment } = require("../../model/Comment");
const { User } = require("../../model/User");
const JWT = require('jsonwebtoken');

const handelCreateComment = async (req , res) => {
    if (!req.headers.authorization) return res.status(404).json({ massage: "لطفا ابتدا وارد حسابتان شوید" })
    if(!req.body.title) return res.status(400).json({massage : "لطفا تیتر را وارد کنید"})
    if(!req.body.rating) return res.status(400).json({massage : "لطفا امتیاز ثبت کنید"})
    const decodedToken = JWT.decode( req.headers.authorization, process.env.SECRETKEY )
    const user = await User.findOne({_id : decodedToken.userId})
    const newComment = new Comment({ title: req.body.title , name : user.name , desc: req.body.desc , rating: req.body.rating , createdBy: req.body.createdBy , idOfProduct: req.body.idOfProduct })
    await newComment.save()
    res.status(201).json({massage : "دیدگاه شما با موفقیت ثبت شد"})
}

const handelShowComments = async(req , res) => {
      const allComments = await Comment.find({idOfProduct: req.query.idOfProduct})
      if(!allComments) return res.status(404).json({ massage: "دیدگاهی پیدا نشد" })
      res.status(200).json({allComments})
}

module.exports = { handelShowComments , handelCreateComment }