const Controller = require('../mappers/models_controller')

const contentData = Author => (req, res, next) => {
  const id = req.params.id
  const authorController = new Controller(Author)

  authorController
    .findCourseByContentId(id)
    .then((authorItem) => {
      item = authorItem.courses[0].contents.id(id)
      res.render('contentForm', { item })
    })
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = contentData
