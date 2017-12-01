const Controller = require('../mappers/models_controller')
const charLimiter = require('../utility/char_limiter')

const author = Author => (req, res, next) => {
  const id = req.params.id
  const authorController = new Controller(Author)
  authorController
    .findAuthorById(id)
    .then((authorItem) => {
      authorItem.courses.forEach((item) => {
        item.title = charLimiter(item.title, 25)
        item.description = charLimiter(item.description, 155)
      })
      res.render('author', {authorItem})
    })
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = author
