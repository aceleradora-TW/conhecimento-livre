const Controller = require('../mappers/models_controller')

const editContent = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const content = req.body
  const contentId = req.params.contentId
  let courseId = {}
  let contentsData = {}

  content.views = 0

  authorController
    .findCourseByContentId(contentId)
    .then((authorItem) => {
      courseId = authorItem.courses[0]._id
      content.author = authorItem.name
      contentsData =  authorItem.courses[0].contents.map((item) => {
        if (item._id == contentId) {
          item = Object.assign(item, content)
        }
        return item
      })
    })
    .then(() => authorController.updateContent(contentId, contentsData))
    .then(() => res.redirect('/admin/contentList/'+courseId))
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = editContent
