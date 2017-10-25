const searchByCourseName = (Course) => (req, res) => {
  const courseName = (req.params.courseName || '').toLowerCase()

  Course
    .findByTitle(courseName)
    .then(courses => res.render('search', {courses}))
    .catch(error => res.status(500).json({error: error.message}))
}

module.exports = searchByCourseName
