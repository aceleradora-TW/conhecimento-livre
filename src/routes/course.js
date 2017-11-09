const Controller = require('../mappers/models_controller')

const course = (Author) => (req, res) => {
  const id = req.params.id
  const author = new Controller(Author)

  author
  .findCourseById(id)
  .then(courseItem => {
    firstContent = courseItem[0].course[0].content[0]
    console.log(firstContent);
    res.render('course', { courseItem, firstContent })
  })
  .catch(error => res.render('error', { error: error.message }))
}

module.exports = course
