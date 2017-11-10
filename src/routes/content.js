
const Controller = require('../mappers/models_controller')

const content = Author => (req, res) => {
  const id = req.params.id
  const author = new Controller(Author)
  const responseData = {}
  responseData.allContents = []
  author
  .findCourseByContentId(id)
  .then(courseItem => {
    responseData.allContents = courseItem.courses[0].contents
    responseData.contentItem = responseData.allContents
    .find(item => item._id.toString() == id.toString())
      responseData.authorName = courseItem.name
  })
  .then(() => res.render('content', responseData))
  .catch(error => res.render('error', {error:error.message}))
}

module.exports = content
