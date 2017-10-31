const Controller = require('../mappers/modelsController')

const course = (Course, Author) => (req, res) => {
  const id = req.params.id
  const courseModel = new Controller(Course)
  const authorModel = new Controller(Author)
  courseModel.findById(id, (courseItem) => {
    authorModel.findByName(courseItem.author, (authorItem) => {
      if ((courseItem || authorItem) === null) {
        res.send('404')
      } else {
        res.render('course', { courseItem, authorItem })
      }
    })
  })
}

module.exports = course
