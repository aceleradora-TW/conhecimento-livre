const newCourse = () => (req, res) => {
  const authorItem = {}
  const courses = {}
  res.render('courseForm', { authorItem, courses })
}

module.exports = newCourse
