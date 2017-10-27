const course = (Course, Search) => (req, res) => {
  const id = req.params.id
  const courseFilter = id => item => item._id.toString() === id.toString()
  Search.setFilter(courseFilter)

  Course.find({ }, (err, allCourse) => {
    if (err) {
      console.log(err);
    } else {
      const filtercourse = Search.filter(allCourse, id)
      if (filtercourse.length === 0) {
        res.send('Curso não encontrado.');
      }
      res.render('course', { filtercourse })
    }
  })
}
module.exports = course
