const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    size: String,
    color: String,
    count: Number,
    id: String
  });

const Order = mongoose.model('Order', { name: String , phoneNumber: String , address: String, postCode: String , status: {type :String , defualt : "unsend"} , trackingCode: String , products: [ProductSchema] , totalPrice : String ,userId : String , orderedAt: {type: Date , default: Date.now}});

module.exports = {Order}