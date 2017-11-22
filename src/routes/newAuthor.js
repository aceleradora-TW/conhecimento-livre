const Controller = require('../mappers/models_controller')

const newAuthor = Author => (req, res, next) => {
  const authorController = new Controller(Author)

  res.render('authorForm')
}

module.exports = newAuthor
