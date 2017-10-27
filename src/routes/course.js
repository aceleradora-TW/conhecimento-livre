const Controller = require('../mappers/modelsController')

const course = Course => (req, res) => {
  const id = req.params.idCourse
  const courseModel = new Controller(Course)
  courseModel.findById(id, (courseItem) => {
    if (courseItem === null) {
      res.send('404')
    } else {
      res.render('course', { courseItem })
    }
  })
}
module.exports = course
