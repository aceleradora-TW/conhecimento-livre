const Controller = require('../mappers/modelsController')

const course = (Course, Author, Content) => (req, res) => {
  const id = req.params.id
  const courseModel = new Controller(Course)
  const authorModel = new Controller(Author)
  const contentModel = new Controller(Content)
  courseModel.findById(id, (courseItem) => {
    authorModel.findByName(courseItem.author, (authorItem) => {
      contentModel.findByName(courseItem.author, (contentItem) => {
        contentModel.findByLanguage(courseItem.language, (languageItem) => {
          if ((courseItem || authorItem) === null) {
            res.send('404')
          } else {
            res.render('course', { courseItem, authorItem })
          }
        })
      })
    })
  })
}

module.exports = course
