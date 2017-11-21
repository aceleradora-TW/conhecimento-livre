const Controller = require('../mappers/models_controller')

const deleteCourse = Author => (req, res, next) => {
    const authorController = new Controller(Author)
    authorController
    .deleteCourse(req.body.id)
    .then(() => console.log('deu bom'))
    .catch((error) => {
      console.log(error)
      next()
    })


}


module.exports = deleteCourse
