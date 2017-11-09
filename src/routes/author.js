const Controller = require('../mappers/models_controller')

const author = (Author) => (req, res) => {
  const id = req.params.id
  const author = new Controller(Author)

  author
  .findAuthorById(id)
  .then(authorItem =>{
    authorItem.courses.forEach( item => {
      if (item.title.length > 25) {
        item.title = item.title.substring(0, 22)+"..."
      }
      if (item.description.length > 155) {
        item.description = item.description.substring(0, 152)+"..."
      }
    })
  })
  .then(() => res.render('author', { authorItem}))
  .catch(error => res.render('error', { error: error.message }))
}

module.exports = author
