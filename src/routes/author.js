const Controller = require('../mappers/modelsController')

const author = (Author, Course) => (req, res) => {
  const id = req.params.idAuthor
  const authorModel = new Controller(Author)
  authorModel.findById(id, (authorItem) => {
    if (authorItem === null) {
      res.send('404')
    } else {
      const courseModel = new Controller(Course)
      courseModel.findByName(authorItem[0].author, (courseItens) => {
        if (courseItens === null) {
          res.send('404')
        } else {
          res.render('author', { authorItem, courseItens })
        }
      })
    }
  })
}

module.exports = author
