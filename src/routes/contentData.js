const Controller = require('../mappers/models_controller')

const contentData = Author => (req, res, next) => {
  const id = req.params.id
  const authorController = new Controller(Author)
  const responseData = {}
  responseData.allContents = []
  authorController
    .findCourseByContentId(id)
    .then(contentItem => res.render('contentForm', { contentItem }))
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = contentData
