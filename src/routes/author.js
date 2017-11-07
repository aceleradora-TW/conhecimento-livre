const Controller = require('../mappers/models_controller')

const author = (Author, Course) => (req, res) => {
  const id = req.params.id
  let arrayCourses = []
  const authorModel = new Controller(Author)
  const courseModel = new Controller(Course)
  courseModel.findAll((allCourses) => {
    authorModel.findById(id, (authorItem) => {
      courseModel.findByName(authorItem.author, (courseItens) => {
        if (courseItens === null) {
          res.send('404')
        } else {
          for (let i = 0; i < allCourses.length; i++) {
            if (allCourses[i].author === authorItem.author) {
              arrayCourses.push(allCourses[i])
            }
          }
          res.render('author', { authorItem, arrayCourses })
        }
      })
    })
  })
}

module.exports = author
