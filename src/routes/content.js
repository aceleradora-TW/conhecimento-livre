const Controller = require('../mappers/models_controller')

const content = (Content, Author) => (req, res) => {
  const id = req.params.id
  let arrayContents = []
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
              for (let i = 0; i < allContents.length; i++) {
                if (allContents[i].title === titleContent.title) {
                  arrayContents.push(allContents[i])
                }
              }
              res.render('content', { arrayContents, contentItem, authorItem })
            }
          })
        })
      })
    })
  })
}

module.exports = content
