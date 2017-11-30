const Author = require('../../models/author')
const index = require('./index')
const content = require('./content')
const author = require('./author')
const course = require('./course')
const admin = require('./admin')
const list = require('./list')
const deleteItem = require('./deleteItem')
const contentList = require('./contentList')
const authorData = require('./authorData')
const newAuthor = require('./newAuthor')
const newContent = require('./newContent')
const saveAuthor = require('./saveAuthor')
const authenticate = require('./authenticate')
const saveContent = require('./saveContent')
const contentData = require('./contentData')
const courseData = require('./courseData')
const newCourse = require('./newCourse')
const saveCourse = require('./saveCourse')

const allRoutes = {
  index: index(Author),
  content: content(Author),
  author: author(Author),
  course: course(Author),
  admin: admin(),
  authenticate: authenticate(),
  list: list(Author),
  deleteItem: deleteItem(Author),
  newAuthor: newAuthor(),
  authorData: authorData(Author),
  saveAuthor: saveAuthor(Author),
  newCourse: newCourse(Author),
  courseData: courseData(Author),
  saveCourse: saveCourse(Author),
  contentList: contentList(Author),
  newContent: newContent(Author),
  contentData: contentData(Author),
  saveContent: saveContent(Author),
}
module.exports = allRoutes
