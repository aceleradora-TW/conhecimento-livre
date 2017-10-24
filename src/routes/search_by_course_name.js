const searchByCourseName = (Course, Search) => (req, res) => {
  const title = req.params.courseName.toLowerCase()
  const contentFilter = title => item => item.title.toString().toLowerCase().includes(title.toString())
  Search.setFilter(contentFilter)
  Course.find({}, (err, AllCourses) => {
    if (err) {
      console.log(err)
    } else {
      const courses = Search.filter(AllCourses, title)
      res.render('search', { courses })
    }
  })
}

module.exports = searchByCourseName
