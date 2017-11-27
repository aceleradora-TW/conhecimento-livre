const Controller = require('../mappers/models_controller')

const list = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  authorController
    .findAll()
    .then(allAuthors => res.render('list', { allAuthors }))
    .catch((error) => {
      next()
      console.log(error)
    })
}

module.exports = list
