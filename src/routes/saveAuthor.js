const Controller = require('../mappers/models_controller')

const saveAuthor = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const authorEdit = req.body

  if (authorEdit.photourl === '') {
    authorEdit.photourl = '../images/defaultImagePerson.png'
  }
  if (authorEdit.id === '') {
    authorController
      .insertAuthor(authorEdit)
      .then(() => res.redirect('/admin/list'))
      .catch((error) => {
        console.log(error)
        next()
      })
  } else {
    authorController
      .updateAuthor(authorEdit)
      .then(() => res.redirect('/admin/list'))
      .catch((error) => {
        console.log(error)
        next()
      })
  }
}

module.exports = saveAuthor
