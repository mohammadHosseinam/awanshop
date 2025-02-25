const Product = require('./../../model/Product/index.js').Product;
const { Comment } = require('../../model/Comment/index.js');
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
    try {
        // Required fields for validation
        const requiredFields = [
            'name', 'price', 'section', 'sizes', 'type', 'style', 
            'brand', 'fagh', 'colorName',
        ];

        // Validate required fields
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({ message: `${field} را وارد کنید` });
            }
        }

        if (!req.files.mainPicture) {
            return res.status(400).json({ message: `mainPicture را وارد کنید` });
        }

        // Check if product already exists
        const existProduct = await Product.findOne({ name: req.body.name });
        if (existProduct) {
            return res.status(400).json({ message: "محصول قبلا ثبت شده است" });
        }
        // Handle images (main picture and other pictures)
        const mainPicture = req.files.mainPicture;
        const otherPictures = req.files["otherPictures"]
        console.log("otherPictures:" , otherPictures)
        if (mainPicture.name) {
             await saveImageInDataBase(mainPicture);
        }
        if (Array.isArray(otherPictures)) {
            await Promise.all(
                otherPictures.map(async (picture) => {
                    console.log("Saving picture:", picture.name);
                    await saveImageInDataBase(picture);
                })
            );
        } else if (otherPictures) {
            // Handle the case when `OtherPicture` is a single file
            saveImageInDataBase(otherPictures);
        }

        // Create new product object
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            mainPicture: mainPicture ? `${mainPicture.md5 + mainPicture.name.split(".")[0]}.jpg` : "",
            otherPictures: Array.isArray(otherPictures)
                ? otherPictures.map(picture => `${picture.md5}${picture.name.split(".")[0]}.jpg`)
                : otherPictures ? [`${otherPictures.md5}${otherPictures.name.split(".")[0]}.jpg`] : [""],
            section: req.body.section,
            sizes: JSON.parse(req.body.sizes),
            type: req.body.type,
            style: req.body.style,
            brand: req.body.brand,
            fagh: req.body.fagh,
            thickness: req.body.thickness,
            colors: req.body.colors,
            isPopular: req.body.isPopular || false
        });

        // Save product to database
        await newProduct.save();
        res.status(201).json({ message: "محصول با موفقیت ذخیره شد!" });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "مشکلی پیش آمده است" });
    }
};


const handelShowPopularPtoducts = async (req, res) => {
        const popProducts = await Product.find({ ispopular: true})
        if(!popProducts) return res.status(404).json({ massage: "404: product not founded" })
        return res.status(200).json({popProducts})
}

const handelShowSectionPtoducts = async (req, res) => {
    const popProducts = await Product.find({ section: section.includes(req.body.section)})
    if(!popProducts) return res.status(404).json({ massage: "404: product not founded" })
    return res.status(200).json({popProducts})
}

module.exports = { handelShowPtoduct, handelCreateProduct , handelShowPopularPtoducts , handelShowPopularPtoducts}