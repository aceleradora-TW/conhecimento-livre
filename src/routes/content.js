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
              const atualContent = contentItem.toString()
              const indexNext = (contents.indexOf(atualContent) + 1)
              const next = allContents[indexNext]
              const indexPrevious = (contents.indexOf(atualContent) - 1)
              const previous = allContents[indexPrevious]
              res.render('content', { contents, contentItem, authorItem, next, previous })
            }
          })
        })
      })
    })
  })
}

module.exports = content
