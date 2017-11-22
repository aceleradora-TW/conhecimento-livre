const Controller = require('../mappers/models_controller')

const saveNewAuthor = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const createAuthor = req.body

  authorController
    .insertAuthor(createAuthor)
    .then(() => res.redirect('/admin/list'))
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = saveNewAuthor
