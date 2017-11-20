const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

const adminSchema = new Schema({
  password: String,
})

module.exports = mongoose.model('Admin', adminSchema)
