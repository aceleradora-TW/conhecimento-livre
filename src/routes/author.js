const {byId, byName} = require('../mappers/search_criterias')
const Controller = require('../mappers/modelsController')

const author = (Author, Course) => (req, res) => {
  const id = req.params.id
  const authorModel = new Controller(Author)
  const courseModel = new Controller(Course)
  authorModel.find(byId(id), (authorItem) => {
    courseModel.find(byName(authorItem.author), (courseItens) => {
      if (courseItens === null) {
        res.send('404')
      } else {
        res.render('author', { authorItem, courseItens })
      }
    })
  })
}

module.exports = author
