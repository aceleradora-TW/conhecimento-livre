const Controller = require('../mappers/models_controller')

const insertAuthor = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const id = req.params.id
  let data = {}

  authorController
    .findAuthorById(id)
    .then((authorItem) => {
      (authorItem.authorApproval === 0)
        ? authorItem.authorApproval = 1
        : authorItem.authorApproval = 0
      data = Object.assign(authorItem, id)
    })
    .then(() => {
      authorController.updateAuthor(data)
    })
    .then(() => res.redirect('/admin/list'))
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = insertAuthor
