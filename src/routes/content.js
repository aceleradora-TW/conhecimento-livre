const Controller = require('../mappers/models_controller')

const content = (Content, Author) => (req, res) => {
  const id = req.params.id
  const contentModel = new Controller(Content)
  const authorModel = new Controller(Author)
  contentModel.findAll((allContents) => {
    contentModel.findById(id, (contentItem) => {
      contentModel.findByTitle(contentItem.title, (titleContent) => {
        authorModel.findByName(contentItem.author, (authorItem) => {
          contentModel.updateViews(id, (views) => {
            if ((allContents || contentItem || authorItem) === null) {
              res.send('404')
            } else {
              const contents = allContents.filter(content => content.title === titleContent.title)
              res.render('content', { contents, contentItem, authorItem })
            }
          })
        })
      })
    })
  })
}

module.exports = content
