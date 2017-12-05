const authorData = authorController => (req, res, next) => {
  const id = req.params.id
  authorController
    .findAuthorById(id)
    .then(authorItem => res.render('authorForm', { authorItem }))
    .catch((error) => {
      console.log(error)
      next()
    })
}

module.exports = authorData
