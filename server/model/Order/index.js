const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    size: String,
    color: String,
    id: String
  });

const Order = mongoose.model('Order', { name: String , phoneNumber: String , address: String, postCode: String , status: String , trackingCode: String , products: [ProductSchema] , orderedAt: {type: Date , default: Date.now}});

module.exports = {Order}