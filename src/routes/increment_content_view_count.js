module.exports = (Content) => (request, response) => {
  Content.find({_id: request.body.id}, (error, content) => {
    if (error) {
      return response.status(500).json({message: error.message})
    }

    content.set({views: content.views + 1})

    content.save((error) => {
      if (error) {
        return response.status(500).json({message: error.message})
      }

      return response.sendStatus(200)
    })
  })
}
