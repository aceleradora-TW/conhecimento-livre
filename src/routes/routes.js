const Author = require('../../models/author')
const index = require('./index')
const content = require('./content')
const author = require('./author')
const course = require('./course')
const admin = require('./admin')
const list = require('./list')
const deletePost = require('./deletePost')
const newAuthor = require('./newAuthor')

const allRoutes = {
  index: index(Author),
  content: content(Author),
  author: author(Author),
  course: course(Author),
  admin: admin(),
  list: list(Author),
  deletePost: deletePost(Author),
  newAuthor: newAuthor(Author),
}
module.exports = allRoutes
