const Controller = require('../mappers/models_controller')

const course = Author => (req, res, next) => {
  const id = req.params.id
  const authorController = new Controller(Author)

  authorController
    .findCourseById(id)
    .then((authorItem) => {
      const firstContent = authorItem.courses[0].contents[0]
      res.render('course', { authorItem, firstContent })
    })
    .catch((error) => {
      console.log(error)
      next()
    })
}


module.exports = course
