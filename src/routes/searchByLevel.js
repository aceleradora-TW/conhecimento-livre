const searchByLevel = (Course) => (req, res) => {
  const name = req.params.courseName
  const level = req.params.level
  const filter = [name, level]
  console.log(level);

  Course.byLevel(filter, (err, courses) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(courses);
      res.render('search', courses)
    }
  })

}

module.exports = searchByLevel
