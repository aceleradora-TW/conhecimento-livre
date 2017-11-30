const Controller = require('../mappers/models_controller')

const insertCourse = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const id = req.params.id
  let data = {}

  authorController
    .findCourseById(id)
    .then((authorItem) => {
      !(authorItem.courses[0].courseApproval)
        ? authorItem.courses[0].courseApproval = 'true'
        : authorItem.courses[0].courseApproval = 'false'
      data = Object.assign(authorItem.courses[0], id)
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

module.exports = insertCourse
