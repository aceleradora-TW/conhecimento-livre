const Controller = require('../mappers/models_controller')

const index = Course => (req, res) => {
  const course = new Controller(Course)
  course.findAll((allContents) => {
    res.render('index', { allContents })
  })
}

module.exports = index
