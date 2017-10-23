const searchByCourseName = (Course) => (req, res) => {
  Course.byName(req.params.courseName, (err, courses) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(courses);
      res.render('search', courses)
    }
  })
}

module.exports = searchByCourseName
