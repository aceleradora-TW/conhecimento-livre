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
const contentList = require('./contentList')
const saveAuthor = require('./saveAuthor')

const allRoutes = {
  index: index(Author),
  content: content(Author),
  author: author(Author),
  course: course(Author),
  admin: admin(),
  list: list(Author),
  deleteItem: deleteItem(Author),
  newAuthor: newAuthor(),
  contentList: contentList(Author),
  authorData: authorData(Author),
  saveAuthor: saveAuthor(Author),
}
module.exports = allRoutes
