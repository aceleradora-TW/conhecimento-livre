const author = (Author, Search, Course) => (req, res) => {
  const id = req.params.id
  const authorFilter = id => item => item._id.toString() === id.toString()

  Search.setFilter(authorFilter)
  Author.find({}, (err, allAuthors) => {
    if (err) {
      console.log(err)
    } else {
      const author = Search.filter(allAuthors, id)
      if (author.length === 0) {
        return res.send('Autor não encontrado.');
      }
      const authorName = author[0].author
      Course.find({}, (err, allCourses) => {
        if (err) {
          console.log(err)
        } else {
          const CourseFilter = allCourses => item => item.author.toLowerCase() === authorName.toLowerCase()
          Search.setFilter(CourseFilter)
          const authorCourses = Search.filter(allCourses, authorName)
          res.render('author', { author, authorCourses })
        }
      })
    }
  })
}

module.exports = author
