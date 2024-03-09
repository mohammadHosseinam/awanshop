const sharp = require('sharp');
const { getPath } = require('../getPath');

const checkImage = (data) =>
    data?.mimetype === "image/jpeg" ||
    data?.mimetype === "image/png" ||
    data?.mimetype === "image/jpg"

const saveImageInDataBase = async (picture) => {
    if (checkImage(picture)) {
        await sharp(picture.data)
            .jpeg({ quality: 60 })
            .toFile(getPath(`public/uploads/${picture.md5 + picture.name}.jpg`))
            .catch((err) => console.log(err))
    } else {
        return res.status(400).json({ errors: ["please uplad photo by jpg or png format"] })
    }
}

module.exports = { saveImageInDataBase }