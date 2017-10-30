const index = Course => (req, res) => {
  Course.find({}, (err, allCourses) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { allCourses })
    }
  })
}
module.exports = index
