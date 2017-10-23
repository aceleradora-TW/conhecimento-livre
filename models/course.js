const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
  title: String,
  author: String,
  content: [],
  publication: Date,
  level: String,
})

courseSchema.statics.byName = function (titleFilter, callback){
  console.log(titleFilter);
  this.find({title: titleFilter}, (err, courses) => {
    if(err){
      res.send(500)
      return callback(err)
    }
    return callback(null, {courses})
  })
}
  courseSchema.statics.byLevel = function (filter, callback){
  console.log(filter);
  this.find({title: filter[0], level: filter[1]}, (err, courses) => {
    if(err){
      res.send(500)
      return callback(err)
    }
    return callback(null, {courses})
  })
}

module.exports = mongoose.model('Course', courseSchema)
