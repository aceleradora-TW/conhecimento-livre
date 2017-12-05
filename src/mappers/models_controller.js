const mongoose = require('mongoose')

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
      { $pull: { 'courses': { '_id': id } } }).exec()
  }

  deleteAuthor(id) {
    return this.model.remove({ _id: id }).exec()
  }

  deleteContent(id) {
    return this.model.update({ 'courses.contents._id': id }, { $pull: { 'courses.$.contents': { '_id': id } } }).exec()
  }

  insertAuthor(data) {
    return this.model.create(
      { name: data.name, email: data.email, bio: data.bio, photourl: data.photourl }
    )
  }

  insertCourse(id, data) {
    data._id = new mongoose.Types.ObjectId()
    return this.model.findOneAndUpdate({ _id: id }, { $push: { 'courses': data } })
  }

  updateViews(contentId, authorData) {
    authorData.courses[0].contents.id(contentId).views += 1
    return this.model.update({ 'courses.contents._id': contentId }, authorData).exec()
  }

  updateAuthor(authorData) {
    return this.model.update({ '_id': authorData.id }, authorData).exec()
  }

  updateCourse(courseData) {
    return this.model.update({ 'courses._id': courseData.id }, { $set: { 'courses.$': courseData } }).exec()
  }

  insertContent(courseId, contentData) {
    contentData._id = new mongoose.Types.ObjectId()
    const isUrlFromPlaylist = contentData.url.search('&') !== -1
    const videoIdOnYoutube = contentData.url.slice(contentData.url.search('=') + 1)
    const videoIdOnYoutubeFromPlaylist = contentData.url.slice(contentData.url.search('=') + 1, contentData.url.search('&'))

    contentData.url = isUrlFromPlaylist ? videoIdOnYoutubeFromPlaylist : videoIdOnYoutube

    return this.model.findOneAndUpdate({ 'courses._id': courseId }, { $push: { 'courses.$.contents': contentData } })
  }

  updateContent(contentId, contentsData) {
    contentsData.forEach(function (content) {
      if (content._id == contentId) {
        if (content.url.search('&') === -1) {
          content.url = content.url.slice(content.url.search('=') + 1)
        } else {
          content.url = content.url.slice(content.url.search('=') + 1, content.url.search('&'))
        }
      }
    })
    return this.model.update({ 'courses.contents._id': contentId }, { $set: { 'courses.$.contents': contentsData } })
  }
}

module.exports = ModelsController
