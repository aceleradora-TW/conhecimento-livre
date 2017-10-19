const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contentSchema = new Schema({
  title: String,
  type: String,
  url: String,
})

module.exports = mongoose.model('Content', contentSchema)