const Controller = require('../mappers/modelsController')

const course = (Course, Author, Content) => (req, res) => {
  const id = req.params.id
  const courseModel = new Controller(Course)
  const authorModel = new Controller(Author)
  const contentModel = new Controller(Content)
  courseModel.findById(id, (courseItem) => {
    authorModel.findByName(courseItem.author, (authorItem) => {
      contentModel.findByTitle(courseItem.title, (titleItem) => {
        if ((authorItem || titleItem) === null) {
          res.send('404')
        } else {
          res.render('course', { courseItem, authorItem, titleItem })
        }
      })
    })
  })
}

module.exports = course
