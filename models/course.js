const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
  title: String,
  author: String,
  content: [],
  publication: Date,
})

module.exports = mongoose.model('Course', courseSchema)
