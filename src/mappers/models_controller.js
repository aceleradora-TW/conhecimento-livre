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
    return this.model.findOne({ 'courses._id': id }, { 'courses.$': 1, name: 1 }).exec()
  }

  findCourseByContentId(id) {
    return this.model.findOne({ 'courses.contents._id': id }, { 'courses.$': 1, name: 1 }).exec()
  }

  deleteCourse(id) {
    return this.model.update(
      { 'courses._id': id },
      { $pull: { 'courses': { '_id': id } }
    }).exec()
  }

  updateViews(contentId, authorData) {
    authorData.courses[0].contents.id(contentId).views += 1
    return this.model.update({ 'courses.contents._id': contentId }, authorData).exec()
  }
}

module.exports = ModelsController
