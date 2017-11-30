const Controller = require('../mappers/models_controller')

const saveContent = Author => (req, res, next) => {
  const courseId = req.params.id
  const authorController = new Controller(Author)
  const content = req.body
  authorController
  .insertContent(courseId, content)
  .then(() => res.redirect('/admin/contentList/'+courseId))
  .catch((error) => {
    console.log(error)
    next()
  })
}

module.exports = saveContent
