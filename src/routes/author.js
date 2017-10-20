const author = (Author, Search) => (req, res) => {
  const id = req.params.idAuthor
  const authorFilter = id => item => item._id.toString() === id.toString()
  Search.setFilter(authorFilter)
  Author.find({}, (err, allAuthors) =>  {
    if (err){
      console.log(err);
    } else {
      const author = Search.filter(allAuthors, id)
      res.render('author', { allAuthors, author })
    }
  })
}

module.exports = author
