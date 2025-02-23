const mongoose = require('mongoose');

const Product = mongoose.model('Product', { mainPicture: String ,otherPictures : {type : Array , default : []} , name: String , section: String ,sizes: Object ,type :String ,style :String , price: String ,brand: String ,fagh: String ,thickness: String ,colorName: String ,colorCode: String , isPopular : {type : Boolean , default : true} , id: {type: Date , default: Date.now}});

module.exports = {Product}