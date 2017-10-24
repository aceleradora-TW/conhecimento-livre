const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
  title: String,
  author: String,
  content: [],
  publication: Date,
  level: String,
})

courseSchema.statics.byName = function (titleFilter, callback) {
  console.log(titleFilter);
  this.find({ title: titleFilter }, (err, courses) => {
    if (err) {
      return callback(err)
    }
    return callback(null, { courses })
  })
}

module.exports = mongoose.model('Course', courseSchema)
