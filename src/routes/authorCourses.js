const Controller = require('../mappers/models_controller')

const contentList = Author => (req, res, next) => {
  const id = req.params.id
  const authorController = new Controller(Author)

  authorController
    .findAuthorById(id)
    .then((authorItem) => {
      const courses = authorItem.courses
      res.render('authorCourses', { authorItem, courses })
    })
    .catch((error) => {
      next()
      console.log(error)
    })
}

module.exports = contentList
