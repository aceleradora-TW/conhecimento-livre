const content = (Content, Search) => (req, res) => {
  const id = req.params.id

  Content.find({}, (err, allContents) => {
    const content = allContents.filter(function (item) {
      return item._id.toString() === id
    })
    res.render('content', { allContents, content })
  })
}

module.exports = content
