const Controller = require('../mappers/models_controller')

const content = (Content, Author) => (req, res) => {
  const id = req.params.id
  const contentModel = new Controller(Content)
  const authorModel = new Controller(Author)

  contentModel.updateViews(id, () => {
    contentModel.findAll((allContents) => {
      // Usando Array.prototype.find ao inves de buscar no banco
      const contentItem = allContents.find(content => content.id === id)
      authorModel.findByName(contentFromId.author, (authorItem) => {
        return res.render('content', {allContents, contentItem, authorItem})
      })
    })
  })

}

module.exports = content
