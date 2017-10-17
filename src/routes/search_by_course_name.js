const Search = require('../search/search')

const searchByCourseName = Course => (req, res) => {
  const courseName = req.params.courseName.toLowerCase()
  const courseFilter = courseTitle => item => item.title.toLowerCase().includes(courseTitle)

  Course.find({}, (err, courses) => {
    if (err) {
      console.log(err);
    } else {
      const dataset = courses;
      const search = new Search(courseFilter)

      const filteredData = search.filter(dataset, courseName)
      res.send(filteredData)
    }
  })
}

module.exports = searchByCourseName
