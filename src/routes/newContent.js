const Controller = require('../mappers/models_controller')

const newContent = Author => (req, res, next) => {
  // res.render('contentForm', List)
  const authorController = new Controller(Author)
  authorController
    .findAll()
    .then((allAuthors) => {
      res.render('contentForm', { allAuthors })
    })
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = newContent
