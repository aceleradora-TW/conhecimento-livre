// const Search = require('../search/search')

const searchByCourseName = (Course, Search) => (req, res) => {
  const courseName = req.params.courseName.toLowerCase()
  const courseFilter = courseTitle => item => item.title.toLowerCase().includes(courseTitle)

  Course.find({}, (err, courses) => {
    if (err) {
      console.log(err);
    } else {
      const dataset = courses;
      // const search = new Search(courseFilter)

      const filteredData = Search.filter(dataset, courseName)
      res.send(filteredData)
    }
  })
}

module.exports = searchByCourseName
