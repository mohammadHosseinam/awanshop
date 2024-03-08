const mongoose = require('mongoose');

const User = mongoose.model('User', { email: String , phoneNumber: String , firstName: String, lastName: String , basket: {type: Object , default: {}} , password: String , createdAt: {type: Date , default: Date.now}});

module.exports = {User}