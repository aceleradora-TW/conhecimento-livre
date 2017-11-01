const Controller = require('../mappers/models_controller')

const content = (Content, Author) => (req, res) => {
  const id = req.params.id
  const contentModel = new Controller(Content)
  const authorModel = new Controller(Author)
  contentModel.findAll((allContents) => {
    contentModel.findById(id, (contentItem) => {
      authorModel.findByName(contentItem.author, (authorItem) => {
        contentModel.updateViews(id, (views) => {
          if ((allContents || contentItem || authorItem) === null) {
            res.send('404')
          } else {
            res.render('content', { allContents, contentItem, authorItem })
          }
        })
      })
    })
  })
}

module.exports = content
