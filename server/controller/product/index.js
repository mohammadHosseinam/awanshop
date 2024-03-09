const Product = require('./../../model/Product/index.js').Product;
const { Comment } = require('../../model/Comment/index.js');
const { Review } = require('../../model/review/index.js');
const { saveImageInDataBase } = require('../../utilities/saveImageInDataBase/inex.js');

const handelShowPtoduct = async (req, res) => {
    if (req.query.productName) {
        const singleProduct = await Product.findOne({ name: req.query.productName.split("_").join(" ") })
        if (singleProduct) {
            const sameSectionProducts = await Product.find({ section: singleProduct.section , _id: { $ne: singleProduct._id } })
            const sameStyleProducts = await Product.find({ style: singleProduct.style , _id: { $ne: singleProduct._id }})
            const simularProducts = sameSectionProducts.filter(item => !sameStyleProducts.includes(item));
            const comments = await Comment.find({ idOfProduct: singleProduct._id })
            return res.status(200).json({ products: singleProduct, simularProducts, comments })
        }
        return res.status(404).json({ massage: "404: product not founded" })
    }
}

const handelCreateProduct = async (req, res) => {
    console.log(req.body)
    if (!req.body.name) return res.status(400).json({ massage: "نام محصول را وارد کنید" })
    if (!req.body.price) return res.status(400).json({ massage: "قیمت محصول را وارد کنید" })
    if (!req.body.section) return res.status(400).json({ massage: "دسته بندی محصول را وارد کنید" })
    if (!req.body.sizes) return res.status(400).json({ massage: "سایز های محصول را وارد کنید" })
    if (!req.body.type) return res.status(400).json({ massage: "جنس محصول را وارد کنید" })
    if (!req.body.style) return res.status(400).json({ massage: "استایل محصول را وارد کنید" })
    if (!req.body.brand) return res.status(400).json({ massage: "برند محصول را وارد کنید" })
    if (!req.body.fagh) return res.status(400).json({ massage: "فاق محصول را وارد کنید" })
    if (!req.body.colors) return res.status(400).json({ massage: "رنگ های محصول را وارد کنید" })
    if (!req.files.mainPicture) return res.status(400).json({ massage: "عکس اصلی محصول را وارد کنید" })
    if (!req.files.otherPictures) return res.status(400).json({ massage: "عکس های دیگر محصول را وارد کنید" })

    const existProduct = await Product.findOne({ name: req.body.name })
    console.log(existProduct)
    if (existProduct) return res.status(400).json({ massage: "Product already exist" })
    const picture = req.files?.mainPicture
    const otherPictures = req.files?.otherPictures
    saveImageInDataBase(picture)
    otherPictures.forEach(picture => saveImageInDataBase(picture))   
    const newProduct = new Product({ name: req.body.name, price: req.body.price, mainPicture: picture ? picture.md5 + picture.name + ".jpg" : "" , otherPictures : req.body.otherPictures.map(picture => picture? picture.md5 + picture.name + ".jpg" : "") , section: req.body.section ,sizes: req.body.sizes ,type :req.body.type ,style :req.body.type ,brand: req.body.brand ,fagh: req.body.fagh ,thickness: req.body.thickness ,colors: req.body.colors , isPopular :req.body.isPopular })
    await newProduct.save()
    res.status(201).json({ massage: "Product saved sucessfully!?" })
}

module.exports = { handelShowPtoduct, handelCreateProduct }