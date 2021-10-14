const list = authorController => (req, res, next) => {
  authorController
    .findAll()
    .then(allAuthors => res.render('list', { allAuthors }))
    .catch((error) => {
      next()
      console.log(error)
    })
}

module.exports = list
