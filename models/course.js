const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
  title: String,
  author: String,
  description: String,
  details: String,
  duration: String,
  publication: Date,
  lessons: Number,
})

module.exports = mongoose.model('Course', courseSchema)
