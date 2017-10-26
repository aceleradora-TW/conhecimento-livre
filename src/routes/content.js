const content = (Content, Search) => (req, res) => {
const id = req.params.id

Content.update({ '_id': id }, { '$inc': { 'views': 1 } }, function (err, allContents) {
    if (err) {
      console.log(err);
    }
  })

  const contentFilter = id => item => item._id.toString() === id.toString()
  Search.setFilter(contentFilter)
  Content.find({}, (err, allContents) => {
    if (err) {
      console.log(err);
    } else {
      const content = Search.filter(allContents, id)
      res.render('content', { allContents, content })
    }
  })
}

module.exports = content
