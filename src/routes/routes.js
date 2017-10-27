const Course = require('../../models/course')
const Content = require('../../models/content')
const Author = require('../../models/author')
const Search = require('../search/search')
const index = require('./index')
const content = require('./content')
const author = require('./author')
const course = require('./course')

const allRoutes = {
  index: index(Course),
  content: content(Content, new Search()),
  author: author(Author, new Search(), Content),
  course: course(Course, new Search()),
}
module.exports = allRoutes
