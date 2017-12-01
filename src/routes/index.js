
const index = authorController => (req, res, next) => {
  const charLimiter = require('../utility/char_limiter')
  authorController
    .findAll()
    .then((allAuthors) => {
      allAuthors.forEach(author => author.courses.forEach((item) => {
        item.title = charLimiter(item.title, 25)
        item.description = charLimiter(item.description, 155)
      }))
      res.render('index', { allAuthors })
    })
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = index
