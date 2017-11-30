const Controller = require('../mappers/models_controller')

const newContent = Author => (req, res, next) => {
  const item = {}
  item.courseId = req.params.id
  const authorController = new Controller(Author)
  const authorItem = { content: {} }
  const showAuthor = {}

  authorController
  .findAll()
  .then((allAuthors) => {
    res.render('contentForm', { allAuthors, item, showAuthor })
  })
  .catch((error) => {
    console.log(error)
    next()
  })
}

module.exports = newContent
