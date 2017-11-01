const Course = require('../../models/course')
const Content = require('../../models/content')
const Author = require('../../models/author')
const index = require('./index')
const content = require('./content')
const author = require('./author')
const course = require('./course')

const allRoutes = {
  index: index(Course),
  content: content(Content, Author),
  author: author(Author, Course),
  course: course(Course, Author, Content),
}
module.exports = allRoutes
