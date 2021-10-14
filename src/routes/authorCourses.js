const authorCourses = authorController => (req, res, next) => {
  const id = req.params.id

  authorController
    .findAuthorById(id)
    .then((authorItem) => {
      const courses = authorItem.courses
      res.render('authorCourses', { authorItem, courses })
    })
    .catch((error) => {
      next()
      console.log(error)
    })
}

module.exports = authorCourses
