const Controller = require('../mappers/models_controller')

const courseData = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const id = req.params.id

  authorController
    .findCourseById(id)
    .then(authorItem => res.render('courseForm', { authorItem }))
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = courseData
