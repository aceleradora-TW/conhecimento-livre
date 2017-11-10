const Controller = require('../mappers/models_controller')

const index = Course => (req, res) => {
  const course = new Controller(Course)
  course.findAll((allContents) => {
    res.render('index', { allContents })

    allContents.forEach(function(item){
     item.title = item.title.substring(0, 19)+"..."
    })
  })
}

module.exports = index
