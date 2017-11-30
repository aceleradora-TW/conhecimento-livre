<<<<<<< 3b777a64c15c04e0660612805ba4b40949320bc5
=======
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
>>>>>>> <@AndreiRupertti, @JessicaFranke> Adiciona edição de aulas
