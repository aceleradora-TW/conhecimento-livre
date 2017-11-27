const Author = require('../../models/author')
const index = require('./index')
const content = require('./content')
const author = require('./author')
const course = require('./course')
const admin = require('./admin')
const list = require('./list')
const deleteItem = require('./deleteItem')
const authorData = require('./authorData')
const newAuthor = require('./newAuthor')
const newContent = require('./newContent')
const contentList = require('./contentList')
const saveAuthor = require('./saveAuthor')
const authenticate = require('./authenticate')
const saveContent = require('./saveContent')
const saveNewContent = require('./saveNewContent')
const contentData = require('./contentData')

const allRoutes = {
  index: index(Author),
  content: content(Author),
  author: author(Author),
  course: course(Author),
  admin: admin(),
  list: list(Author),
  deleteItem: deleteItem(Author),
  newAuthor: newAuthor(),
  newContent: newContent(Author),
  saveContent: saveContent(Author),
  contentList: contentList(Author),
  authorData: authorData(Author),
  saveAuthor: saveAuthor(Author),
  authenticate: authenticate(),
  contentData: contentData(Author),
  saveNewContent: saveNewContent(Author),
}
module.exports = allRoutes
