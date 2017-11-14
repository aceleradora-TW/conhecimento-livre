const Controller = require('../mappers/models_controller')

const index = Course => (req, res) => {
  const course = new Controller(Course)
  course.findAll((allContents) => {
    allContents.forEach(function(item) {
      if (item.title.length > 25) {
        item.title = item.title.substring(0, 22)+"..."
      }
      if (item.description.length > 155) {
        item.description = item.description.substring(0, 152)+"..."
      }
    })
    res.render('index', { allContents })
  })
}

module.exports = index
