const Controller = require('../mappers/models_controller')

const authorData = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const id = req.params.id

  authorController
    .findAuthorById(id)
    .then((authorItem) => {
      res.render('authorForm', { authorItem })
    })
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = authorData
