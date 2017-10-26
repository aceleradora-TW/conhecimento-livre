const Course = require('../../models/course')
const Content = require('../../models/content')
const Author = require('../../models/author')
const Search = require('../search/search')
const searchByCourseName = require('./search_by_course_name')
const index = require('./index')
const content = require('./content')
const author = require('./author')

const search = new Search()

const allRoutes = {
  index: index(Course),
  searchByCourseName: searchByCourseName(Course, search),
  content: content(Content, search),
  author: author(Author, search, Content),
}

module.exports = allRoutes
