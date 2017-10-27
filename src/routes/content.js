const Controller = require('../mappers/modelsController')

const content = (Content, Author) => (req, res) => {
  const id = req.params.id
  const contentModel = new Controller(Content)
  const authorModel = new Controller(Author)
  contentModel.findAll((allContents) => {
    contentModel.findById(id, (contentItem) => {
      authorModel.findByName(contentItem[0].author, (authorItem) => {
        if ((allContents || contentItem || authorItem) === null) {
          res.send('404')
        } else {
          res.render('content', { allContents, contentItem, authorItem })
        }
      })
    })
  })
  Content.update({ '_id': id }, { '$inc': { 'views': 1 } }, function (err, allContents) {
    if (err) {
      console.log(err);
    }
  })
}

module.exports = content
