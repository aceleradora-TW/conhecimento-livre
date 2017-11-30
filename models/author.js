const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  type: String,
  url: String,
  author: String,
  preview: String,
  views: Number,
})

const courseSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  author: String,
  description: String,
  details: String,
  duration: String,
  publication: Date,
  lessons: Number,
  language: String,
  image: String,
  courseApproval: Boolean,
  contents: [contentSchema],
})

const authorSchema = new Schema({
  name: String,
  bio: String,
  email: String,
  photourl: String,
  courses: [courseSchema],
})

module.exports = mongoose.model('Author', authorSchema)
