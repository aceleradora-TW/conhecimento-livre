const Controller = require('../mappers/models_controller')

const saveCourse = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const course = req.body
  let data = {}

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
        authorItem.courses[0].title = course.title
        authorItem.courses[0].description = course.description
        authorItem.courses[0].duration = course.duration
        authorItem.courses[0].lessons = course.lessons
        authorItem.courses[0].language = course.language
        authorItem.courses[0].image = course.image
        data = authorItem.courses[0]
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
