const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema({
  username: String,
  password: String,
})

module.exports = mongoose.model('Admin', adminSchema)
