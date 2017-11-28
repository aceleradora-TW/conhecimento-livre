const Controller = require('../mappers/models_controller')

const saveCourse = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const course = req.body
  let data = {}

  if (course.image === '') {
    course.image = '../images/banner_inicial.png'
  }
  if (course._id === '') {
    const idAuthor = course.idAuthor
    delete course.idAuthor
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
      .findCourseById(course._id)
      .then((authorItem) => {
        data = Object.assign(authorItem.courses[0], course)
      })
      .then(() => {
        authorController.updateCourse(data)
      })
      .then(() => res.redirect('/admin/list'))
      .catch((error) => {
        console.log(error)
        next()
      })
  }
}

module.exports = saveCourse
