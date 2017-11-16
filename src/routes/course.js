const Controller = require('../mappers/models_controller')

const course = Author => (req, res) => {
  const id = req.params.id
  const authorController = new Controller(Author)

  authorController
    .findCourseById(id)
    .then((authorItem) => {
      const firstContent = authorItem.courses[0].contents[0]
      res.render('course', { authorItem, firstContent })
    })
    .catch(error => {
      res.status(404).render('404')
      console.log(error)
    })
  }


module.exports = course
