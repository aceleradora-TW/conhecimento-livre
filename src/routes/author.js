const charLimiter = require('../utility/char_limiter')

const author = authorController => (req, res, next) => {
  const id = req.params.id
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
