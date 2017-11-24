const newAuthor = () => (req, res) => {
  const authorItem = {}
  res.render('authorForm', { authorItem })
}

module.exports = newAuthor
