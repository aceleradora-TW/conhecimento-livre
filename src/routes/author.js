const {byId, byName} = require('../mappers/search_criterias')
const Controller = require('../mappers/modelsController')

const author = (Author, Course) => (req, res) => {
  const id = req.params.id
  const authorModel = new Controller(Author)
  const courseModel = new Controller(Course)

  const findCourseByAuthor = (author) =>
    new Promise((resolve, reject) => courseModel
      .find(byName(author.author))
      .then(courseData => resolve({authorItem: author, courseItems: courseData}))
      .catch(reject))

  authorModel
    .find(byId(id))
    .then(author => courseModel.find(byName(author.author)))
    .then(data => res.render('author', data))
    .catch(error => res.sendStatus(404))
}

module.exports = author
