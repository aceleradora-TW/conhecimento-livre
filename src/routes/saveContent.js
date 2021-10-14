const Controller = require('../mappers/models_controller')

const saveContent = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const content = req.body

  let courseId = req.params.courseId
  authorController
    .insertContent(courseId, content)
    .then(() => res.redirect('/admin/contentList/'+courseId))
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = saveContent
