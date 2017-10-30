const {all, byName, byId} = require('../mappers/search_criterias')
const Controller = require('../mappers/models_controller')

const content = (Content, Author) => (req, res) => {
  const id = req.params.id
  const contentModel = new Controller(Content)
  const authorModel = new Controller(Author)

  const findAllContents = () => contentModel.find(all())

  const findAuthor = (allContents) => {
    const contentItem = allContents.find(content => content.id === id)

    return new Promise((resolve, reject) => contentModel
      .find(byName(contentItem.author))
      .then(authorItem => resolve({allContents, contentItem, authorItem}))
      .catch(reject))
  }

  contentModel
    .updateViews(id)
    .then(findAllContents)
    .then(findAuthor)
    .then(data => res.render('content', data))
    .catch(()=> res.sendStatus(404))
}

module.exports = content
