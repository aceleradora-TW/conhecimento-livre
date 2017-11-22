const newAuthor = () => (req, res, next) => {
  res.render('authorForm')
}

module.exports = newAuthor
