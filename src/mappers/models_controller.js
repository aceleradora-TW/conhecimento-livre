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
    return this.model.find({'course._id': id}, {"course.$":1, "name": 1}).exec()
  }

  findCourseByContentId(id) {
    return this.model.findOne({'course.content._id': id}, {"course.$":1, "name": 1}).exec()
  }

  updateViews(id, views) {
    return this.model.update({'course.content._id': id }, { $inc: { views: 1 } }).exec()
 }

}

module.exports = ModelsController
