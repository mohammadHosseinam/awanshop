const mongoose = require('mongoose');

const Comment = mongoose.model('Comment', { name: String , title: String ,desc: String ,rating :String , createdBy: String , idOfProduct: String, createdAt: {type: Date , default: Date.now} });

module.exports = {Comment}