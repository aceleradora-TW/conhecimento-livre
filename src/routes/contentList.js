const Controller = require('../mappers/models_controller')

const contentList = Author => (req, res, next) => {
  const courseId = req.params.id
  const authorController = new Controller(Author)

  authorController
    .findCourseById(courseId)
    .then((authorItem) => {
      const contents = authorItem.courses[0].contents
      res.render('contentList', { authorItem, contents, courseId})
    })
    .catch((error) => {
      next()
      console.log(error)
    })
}

module.exports = contentList
