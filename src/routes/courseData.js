const Controller = require('../mappers/models_controller')

const courseData = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const id = req.params.id

  if (id === '') {
    authorController
      .findAll()
      .then(authorItem => res.render('courseForm', { authorItem }))
      .catch((error) => {
        console.log(error)
        next()
      })
  } else {
    authorController
      .findCourseById(id)
      .then(authorItem => res.render('courseForm', { authorItem }))
      .catch((error) => {
        console.log(error)
        next()
      })
  }
}

module.exports = courseData
