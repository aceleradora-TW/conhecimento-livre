const author = (Author, Search, Content) => (req, res) => {
  const id = req.params.idAuthor
  const authorFilter = id => item => item._id.toString() === id.toString()
  Search.setFilter(authorFilter)
  Author.find({}, (err, allAuthors) =>  {
    if (err){
      console.log(err)
    } else {
      const author = Search.filter(allAuthors, id)
      const authorName = author[0].name
      Content.find({}, (err, allContents) => {
        if (err) {
          console.log(err)
        }else {
          const filtroContent = allContents => item => item.author.toLowerCase() === authorName.toLowerCase()
          Search.setFilter(filtroContent)
          const authorCourses = Search.filter(allContents, authorName)
          res.render('author', { author, authorCourses})
        }
      })
    }
  })
}

module.exports = author
