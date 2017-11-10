const Controller = require('../mappers/models_controller')

const course = Author => (req, res) => {
  const id = req.params.id
  const author = new Controller(Author)

  author
    .findCourseById(id)
    .then((courseItem) => {
      const firstContent = courseItem.courses[0].contents[0]
      res.render('course', { courseItem, firstContent })
    })
    .catch(error => res.render('error', { error: error.message }))
}

module.exports = course
