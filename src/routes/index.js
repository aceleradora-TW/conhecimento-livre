const Controller = require('../mappers/models_controller')

const index = Course => (req, res) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
  const course = new Controller(Course)
  course.findAll((allContents) => {
    res.render('index', { allContents, fullUrl })
  })
}

module.exports = index
