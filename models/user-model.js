const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    username: String,
    googleId: String,
    thumbnail: String
})

module.exports = mongoose.model('user', userSchema)