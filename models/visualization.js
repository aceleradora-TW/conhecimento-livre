const mongoose = require('mongoose')

const Schema = mongoose.Schema

const visualizationSchema = new Schema({
  contentID: String,
  quantity: Number,
})

module.exports = mongoose.model('Visualization', visualizationSchema)
