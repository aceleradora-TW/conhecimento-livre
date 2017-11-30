const Author = require('../../models/author')
const index = require('./index')
const content = require('./content')
const author = require('./author')
const course = require('./course')
const admin = require('./admin')
const error = require('./error')
const list = require('./list')
const deleteItem = require('./deleteItem')
const authorData = require('./authorData')
const newAuthor = require('./newAuthor')
const newContent = require('./newContent')
const contentList = require('./contentList')
const saveAuthor = require('./saveAuthor')
const authenticate = require('./authenticate')
const editContent = require('./editContent')
const courseData = require('./courseData')
const newCourse = require('./newCourse')
const saveCourse = require('./saveCourse')
const insertCourse = require('./insertCourse')
const saveContent = require('./saveContent')
const contentData = require('./contentData')
const Controller = require('../mappers/models_controller')
const authorController = new Controller(Author)

const allRoutes = {
  index: index(authorController),
  content: content(Author),
  author: author(Author),
  course: course(Author),
  admin: admin(),
  error: error(),
  authenticate: authenticate(),
  list: list(Author),
  deleteItem: deleteItem(Author),
  newAuthor: newAuthor(),
  authorData: authorData(Author),
  saveAuthor: saveAuthor(Author),
  newCourse: newCourse(Author),
  courseData: courseData(Author),
  saveCourse: saveCourse(Author),
  insertCourse: insertCourse(Author),
  contentList: contentList(Author),
  newContent: newContent(Author),
  contentData: contentData(Author),
  saveContent: saveContent(Author),
  editContent: editContent(Author),
}

module.exports = allRoutes
