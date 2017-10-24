const mongoose = require('mongoose')

const Schema = mongoose.Schema

const authorSchema = new Schema({
  name: String,
  bio: String,
  email: String,
  photourl: String,
})

module.exports = mongoose.model('Author', authorSchema)
