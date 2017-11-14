const Controller = require('../mappers/models_controller')

const author = (Author, Course) => (req, res) => {
  const id = req.params.id
  let arrayCourses = []
  let arrayNameReduced = []
  const authorModel = new Controller(Author)
  const courseModel = new Controller(Course)
  courseModel.findAll((allCourses) => {
    authorModel.findById(id, (authorItem) => {
      if (authorItem === null) {
        res.send('404 - autor não encontrado')
        return
      }
      courseModel.findByName(authorItem.author, (courseItens) => {
        if (courseItens === null) {
          res.send('404')
        } else {
          for (let i = 0; i < allCourses.length; i++) {
            if (allCourses[i].author === authorItem.author) {
              arrayCourses.push(allCourses[i])
            }
          }
          arrayCourses.forEach(function(item) {
            if (item.title.length > 25) {
              item.title = item.title.substring(0, 22)+"..."
            }
            if (item.description.length > 155) {
              item.description = item.description.substring(0, 152)+"..."
            }
          })
          res.render('author', { authorItem, arrayCourses})
        }
      })
    })
  })
}

module.exports = author
