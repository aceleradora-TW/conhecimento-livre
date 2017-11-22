const Controller = require('../mappers/models_controller')

const saveAuthor = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const id = req.params.id
  const authorEdit = req.body
  authorEdit._id = id

  authorController
    .updateAuthor(authorEdit)
    .then(() => res.redirect('/admin/list'))
    .catch((error) => {
      console.log(error)
      next()
    })
}
module.exports = saveAuthor
