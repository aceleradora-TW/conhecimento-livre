const Controller = require('../mappers/models_controller')

const content = Author => (req, res, next) => {
  const id = req.params.id
  const authorController = new Controller(Author)
  const responseData = {}
  responseData.allContents = []
  authorController
    .findCourseByContentId(id)
    .then((authorItem) => {
      responseData.allContents = authorItem.courses[0].contents
      responseData.contentItem = responseData.allContents.id(id)
      responseData.authorItem = authorItem
      const currentContentIndex = responseData.allContents.indexOf(responseData.contentItem)
      responseData.next = responseData.allContents[currentContentIndex + 1]
      responseData.previous = responseData.allContents[currentContentIndex - 1]
    })
    .then(() => authorController.updateViews(id, responseData.authorItem))
    .then(() => res.render('content', responseData))
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = content
