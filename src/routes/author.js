const Controller = require('../mappers/models_controller')

const author = Author => (req, res) => {
  const id = req.params.id
  const authorController = new Controller(Author)

  authorController
  .findAuthorById(id)
  .then(authorItem => {
    authorItem.courses.forEach( item => {
      if (item.title.length > 25) {
        item.title = item.title.substring(0, 22)+"..."
      }
      if (item.description.length > 155) {
        item.description = item.description.substring(0, 152)+"..."
      }
    })
    res.render('author', {authorItem})
  })
  .catch(error => {
    res.status(404).render('404')
  })
}

module.exports = author
