const Author = require('../../models/author')

const content = (Content, Search) => (req, res) => {
  const id = req.params.id

  Content.update({ '_id': id},{ '$inc': { 'views': 1 } }, function (err, allContents) {
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
      Author.find({ author: content[0].author }, (err, author) => {
        if (err) {
          console.log(err);
        } else {

          author = author[0]
          indexNext = (allContents.indexOf(content[0]) + 1)
          next = allContents[indexNext]
          indexPrevious = (allContents.indexOf(content[0]) - 1)
          previous = allContents[indexPrevious]

          res.render('content', { allContents, content, author, next, previous})
        }
      })
    }
  })
}

module.exports = content
