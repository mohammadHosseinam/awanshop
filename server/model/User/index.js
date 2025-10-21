const mongoose = require('mongoose');
const { Order } = require('../Order');

const User = mongoose.model('User', { phoneNumber: String ,firstName : String ,lastName : String ,orders: {type:Array , default:[]}  ,isAdmin :{type : Boolean , default: false}, createdAt: {type: Date , default: Date.now}});

module.exports = {User}