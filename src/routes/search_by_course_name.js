const searchByCourseName = (Course, Search) => (req, res) => {
  const courseName = req.params.courseName.toLowerCase()
  const courseFilter = courseTitle => item => item.title.toLowerCase().includes(courseTitle)
  Search.setFilter(courseFilter)
  Course.find({}, (err, courses) => {
    if (err) {
      console.log(err);
    } else {
      const dataset = courses;
      const filteredData = Search.filter(dataset, courseName)
      res.send(filteredData)
    }
  })
}

module.exports = searchByCourseName
