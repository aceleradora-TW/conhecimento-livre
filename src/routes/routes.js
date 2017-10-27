const Course = require('../../models/course')
const Content = require('../../models/content')
const Author = require('../../models/author')
const Search = require('../search/search')
const index = require('./index')
const content = require('./content')
const author = require('./author')
const course = require('./course')

const search = new Search()

const allRoutes = {
  index: index(Course),
  content: content(Content, search, Author),
  author: author(Author, Course),
  course: course(Course),
}
module.exports = allRoutes
