const authorCourses = authorController => (req, res, next) => {
  const id = req.params.id
  const flag = 1
  console.log('oi',flag);

  authorController
    .findAuthorById(id)
    .then((authorItem) => {
      const courses = authorItem.courses
      res.render('list', {flag})
    })
    .catch((error) => {
      next()
      console.log(error)
    })
}

module.exports = authorCourses
