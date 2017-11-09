class ModelsController {
  constructor(model) {
    this.model = model
  }

  findAll() {
    return this.model.find({}).exec()
  }

  findAuthorById(id) {
    return this.model.findOne({ _id: id }).exec()
  }

  findCourseById(id) {
    return this.model.findOne({'courses._id': id}, {"courses.$":1, "name": 1}).exec()
  }

  findCourseByContentId(id) {
    return this.model.findOne({'courses.contents._id': id}, {"courses.$":1, "name": 1}).exec()
  }

  updateViews(id, views) {
    return this.model.update({'courses.contents._id': id }, { $inc: { views: 1 } }).exec()
 }

}

module.exports = ModelsController
