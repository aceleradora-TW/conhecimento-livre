const author = (Author, Search, Content) => (req, res) => {
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
      Content.find({}, (err, allContents) => {
        if (err) {
          console.log(err)
        } else {
          const ContentFilter = allContents => item => item.author.toLowerCase() === authorName.toLowerCase()
          Search.setFilter(ContentFilter)
          const authorCourses = Search.filter(allContents, authorName)
          res.render('author', { author, authorCourses })
        }
      })
    }
  })
}

module.exports = author
