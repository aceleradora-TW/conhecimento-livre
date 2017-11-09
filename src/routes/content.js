
const Controller = require('../mappers/models_controller')

const content = (Author) => (req, res) => {
  const id = req.params.id
  const author = new Controller(Author)
  const responseData = {}
  responseData.allContents = []
  author
  .findCourseByContentId(id)
  .then(courseItem => {
    courseItem.course[0].content.filter((item) => {
      if(item._id.toString() == id.toString()){
        responseData.contentItem = item
      }
      responseData.allContents.push(item)
    })
    responseData.authorName = courseItem.name
  })
  .then(() => {
    res.render('content', responseData)
  })
  .catch(error => res.render('error', {error:error.message}))
}

module.exports = content
