const mongoose = require('mongoose');

const Product = mongoose.model('Product', { mainPicture: String ,otherPictures : Array[String] , name: String , section: String ,sizes: String ,type :String ,style :String , price: String ,brand: String ,fagh: String ,thickness: String ,colors: String , isPopular : {type : Boolean , default : true} , id: {type: Date , default: Date.now}});

module.exports = {Product}