const Controller = require('../mappers/models_controller')

const author = (Author, Course) => (req, res) => {
  const id = req.params.id
  const authorModel = new Controller(Author)
  const courseModel = new Controller(Course)
  authorModel.findById(id, (authorItem) => {
    courseModel.findByName(authorItem.author, (courseItens) => {
      if (courseItens === null) {
        res.send('404')
      } else {
        res.render('author', { authorItem, courseItens })
      }
    })
  })
}

module.exports = author
