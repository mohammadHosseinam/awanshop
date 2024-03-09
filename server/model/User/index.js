const mongoose = require('mongoose');
const { Order } = require('../Order');

const User = mongoose.model('User', { phoneNumber: String ,userName : String, orders: {type: [Order] , default: []} , password: String , createdAt: {type: Date , default: Date.now}});

module.exports = {User}