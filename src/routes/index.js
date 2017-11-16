const Controller = require('../mappers/models_controller')

const index = Author => (req, res) => {
  const authorController = new Controller(Author)

  authorController
  .findAll()
  .then(allAuthors => {
    allAuthors.forEach(author => author.courses.forEach( item => {
     if (item.title.length > 25) {
       item.title = item.title.substring(0, 22)+"..."
     }
     if (item.description.length > 155) {
       item.description = item.description.substring(0, 152)+"..."
     }
   }))
    res.render('index', { allAuthors })
  })
  .catch(error => console.log(error))
}

module.exports = index
