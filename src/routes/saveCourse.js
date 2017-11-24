const Controller = require('../mappers/models_controller')

const saveCourse = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const courseEdit = req.body

  if (courseEdit.id === '') {
    authorController
      .insertCourse(courseEdit)
      .then(() => res.redirect('/admin/list'))
      .catch((error) => {
        console.log(error)
        next()
      })
  } else {
    authorController
      .updateCourse(courseEdit)
      .then(() => {
        console.log(courseEdit)
        res.redirect('/admin/list')})
      .catch((error) => {
        console.log(error)
        next()
      })
  }
}

module.exports = saveCourse
