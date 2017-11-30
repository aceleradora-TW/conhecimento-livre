const Controller = require('../mappers/models_controller')

// const newContent = () => (req, res) => {
//   res.render('contentForm')
// }

const newContent = Author => (req, res, next) => {
  const course ={}
  course._id = req.params.id
  const authorController = new Controller(Author)
  const authorItem = { content: {} }
  const showAuthor = {}

  authorController
    .findAll()
    .then((allAuthors) => {
      res.render('contentForm', { allAuthors, course, showAuthor })
    })
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = newContent
