const Controller = require('../mappers/models_controller')

const contentList = Author => (req, res, next) => {
  const id = req.params.id
  const authorController = new Controller(Author)

  authorController
    .findCourseById(id)
    .then((authorItem) => {
      const contents = authorItem.courses[0].contents
      res.render('contentList', { authorItem, contents })
    })
    .catch((error) => {
      next()
      console.log(error)
    })
}

module.exports = contentList
