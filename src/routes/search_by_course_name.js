const courseName = (req) => (req.params.courseName || '').toLowerCase()

const searchByCourseName = (Course) => (req, res) =>
  Course
    .findByTitle(courseName(req))
    .then(courses => res.render('search', {courses}))
    .catch(error => res.status(500).json({error: error.message}))

module.exports = searchByCourseName
