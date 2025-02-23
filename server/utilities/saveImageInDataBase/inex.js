const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { getPath } = require('../getPath');

const checkImage = (data) => {
    return data?.mimetype === "image/jpeg" ||
           data?.mimetype === "image/png" ||
           data?.mimetype === "image/jpg";
};

const saveImageInDataBase = async (picture) => {
    try {
        if (checkImage(picture)) {
            const outputDir = getPath('../public/uploads');
            const outputPath = path.join(outputDir, `${picture.md5 + picture.name.split(".")[0]}.jpg`);

            // Ensure the directory exists
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
            }

            await sharp(picture.data)
                .jpeg({ quality: 60 })
                .toFile(outputPath);
            console.log(`Image saved successfully at ${outputPath}`);
            return { success: true, path: outputPath };
        } else {
            throw new Error("Please upload a photo in JPG or PNG format.");
        }
    } catch (err) {
        console.error('Error while saving image:', err.message);
        throw err; // Propagate the error to the caller
    }
};

module.exports = { saveImageInDataBase };

