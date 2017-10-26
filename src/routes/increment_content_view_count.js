module.exports = (Content) => (request, response) => Content
  .find({_id: request.body.id})
  .exec()
  .then(content => {
    content.set({views: content.views + 1})
    return content.save()
  })
  .then(() => response.sendStatus(200))
  .catch(error => response.status(500).json({message: error.message}))
