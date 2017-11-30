<<<<<<< 3b777a64c15c04e0660612805ba4b40949320bc5
=======
const Controller = require('../mappers/models_controller')

const saveContent = Author => (req, res, next) => {
<<<<<<< bbd7c1d32ec0519da4dce49f0504dd069bf52b78
<<<<<<< 05e1a3d87cb82ef3e175e14cdac950a251b56947
  const authorController = new Controller(Author)
  const content = req.body

  let courseId = req.params.courseId
=======
  const courseId = req.params.id
=======
>>>>>>> <@AndreiRupertti, @JessicaFranke> Adiciona edição de aulas
  const authorController = new Controller(Author)
  let courseId = 0
  const content = req.body
<<<<<<< bbd7c1d32ec0519da4dce49f0504dd069bf52b78
>>>>>>> <@AndreiRupertti, @JessicaFranke> aciona insert de aulas
=======

  courseId = req.params.courseId
>>>>>>> <@AndreiRupertti, @JessicaFranke> Adiciona edição de aulas
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
