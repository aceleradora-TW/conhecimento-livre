const Controller = require('../mappers/models_controller')

const index = Author => (req, res) => {
  const authorController = new Controller(Author)

  authorController
  .findAll()
  .then(allAuthors => {
    authorItem.courses.forEach( item => {
      if (item.title.length > 25) {
        item.title = item.title.substring(0, 22)+"..."
      }
      if (item.description.length > 155) {
        item.description = item.description.substring(0, 152)+"..."
      }
    })
  }
  .then(() => res.render('index', { allAuthors }))
  .catch(error => res.render('error', { error: error.message }))
}

module.exports = index
