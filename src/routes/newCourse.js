const Controller = require('../mappers/models_controller')

const newCourse = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const authorItem = { courses: {} }
  const showAuthor = {}

  authorController
    .findAll()
    .then((allAuthors) => {
      res.render('courseForm', { allAuthors, authorItem, showAuthor })
    })
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = newCourse
