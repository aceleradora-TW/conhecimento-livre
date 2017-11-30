<<<<<<< c3664f403ee62380b909bdf98be86435a851319c
=======
const Controller = require('../mappers/models_controller')

const editContent = Author => (req, res, next) => {
  const authorController = new Controller(Author)
  const content = req.body
  const contentId = req.params.contentId
  let courseId = {}
  let contentsData = {}

<<<<<<< 590f16656d77032a48bb75deaeb8d4f7ecf558bf
<<<<<<< bbd7c1d32ec0519da4dce49f0504dd069bf52b78
  content.views = 0

=======
>>>>>>> <@AndreiRupertti, @JessicaFranke> Adiciona edição de aulas
=======
  content.views = 0

>>>>>>> <@JessicaFranke, @AndreiRupertti> deleta getURL
  authorController
  .findCourseByContentId(contentId)
  .then((authorItem) => {
    courseId = authorItem.courses[0]._id
<<<<<<< 590f16656d77032a48bb75deaeb8d4f7ecf558bf
<<<<<<< bbd7c1d32ec0519da4dce49f0504dd069bf52b78
    content.author = authorItem.name
    contentsData =  authorItem.courses[0].contents.map((item) => {
      if (item._id == contentId){
        item = Object.assign(item, content)
        console.log(item)
=======
    contentsData =  authorItem.courses[0].contents.map((item) => {
      if (item._id == contentId){
        item = content
>>>>>>> <@AndreiRupertti, @JessicaFranke> Adiciona edição de aulas
=======
    content.author = authorItem.name
    contentsData =  authorItem.courses[0].contents.map((item) => {
      if (item._id == contentId){
        item = Object.assign(item, content)
        console.log(item)
>>>>>>> <@JessicaFranke, @AndreiRupertti> deleta getURL
      }
      return item
    })
  })
  .then(() => authorController.updateContent(contentId, contentsData))
  .then(() => res.redirect('/admin/contentList/'+courseId))
  .catch((error) => {
    console.log(error)
    next()
  })
}

module.exports = editContent
>>>>>>> <@JessicaFranke, @AndreiRupertti> deleta getURL
