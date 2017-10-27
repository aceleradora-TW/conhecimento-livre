const course = (Course, Search) => (req, res) => {
  const id = req.params.id
  const courseFilter = id => item => item._id.toString() === id.toString()
  Search.setFilter(courseFilter)

  Course.find({}, (err, allCourse) => {
    console.log(allCourse);
    if (err) {
      console.log(err);
    } else {
      const filtercourse = Search.filter(allCourse, id)
      if (filtercourse.length === 0) {
        return res.send('Curso não encontrado.');
      }
      console.log(filtercourse);
      res.render('course', { filtercourse })
    }
  })
}
module.exports = course
