const Controller = require('../mappers/models_controller')

const content = (Content, Author) => (req, res) => {
  const id = req.params.id
  const contentModel = new Controller(Content)
  const authorModel = new Controller(Author)
  contentModel.findAll((allContents) => {
    contentModel.findById(id, (contentItem) => {
      if (contentItem === null) {
        res.send('404 - aula não encontrada')
        return
      }
      contentModel.findByTitle(contentItem.title, (titleContent) => {
        authorModel.findByName(contentItem.author, (authorItem) => {
          contentModel.updateViews(id, () => {
            if ((allContents || contentItem || authorItem) === null) {
              res.send('404')
            } else {
              const contents = allContents
                .filter(content => content.title === titleContent.title)
              const currentIndex = contents
                .findIndex(content => content._id.toString() === contentItem._id.toString())
              const next = contents[currentIndex + 1]
              const previous = contents[currentIndex - 1]

              contents.splice(currentIndex, 1)

              res.render('content', { contents, contentItem, authorItem, next, previous })
            }
          })
        })
      })
    })
  })
}

module.exports = content
