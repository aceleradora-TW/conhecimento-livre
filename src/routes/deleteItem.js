const Controller = require('../mappers/models_controller')

const deleteItem = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  if (req.body.collection === 'author') {
    authorController
      .deleteAuthor(req.body.id)
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.log(error)
        next()
      })
  } else if (req.body.collection === 'courses') {
    authorController
      .deleteCourse(req.body.id)
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.log(error)
        next()
      })
  } else if (req.body.collection === 'contents') {
    authorController
      .deleteContent(req.body.id)
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.log(error)
        next()
      })
  }
}


module.exports = deleteItem
