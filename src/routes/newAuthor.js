const newAuthor = () => (req, res) => {
  const authorItem = 0
  res.render('authorForm', { authorItem })
}

module.exports = newAuthor
