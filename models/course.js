const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
  title: String,
  author: String,
  content: [],
  publication: Date,
})

courseSchema.statics.findByTitle = function(title) {
  const that = this

  return new Promise((resolve, reject) =>
    that
      .find({title}, (error, data) => error
        ? reject(error)
        : resolve(data)))
}

module.exports = mongoose.model('Course', courseSchema)
