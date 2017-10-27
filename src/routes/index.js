const Controller = require('../mappers/modelsController')

const index = Course => (req, res) => {
  const course = new Controller(Course)
  course.findAll((allContents) => {
    res.render('index', { allContents })
  })
}

module.exports = index
