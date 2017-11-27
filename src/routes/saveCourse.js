const Controller = require('../mappers/models_controller')

const saveCourse = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const course = req.body
  const idAuthor = course.idAuthor
  delete course.idAuthor

  if (course._id === '') {
    authorController
      .findAuthorById(idAuthor)
      .then(Author => course.author = Author.name)
      .then(() => authorController.insertCourse(idAuthor, course))
      .then(() => res.redirect('/admin/list'))
      .catch((error) => {
        console.log(error)
        next()
      })
  } else {
    authorController
      .updateCourse(course)
      .then(() => res.redirect('/admin/list'))
      .catch((error) => {
        console.log(error)
        next()
      })
  }
}

module.exports = saveCourse
