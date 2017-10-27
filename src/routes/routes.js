const Course = require('../../models/course')
const Content = require('../../models/content')
const Author = require('../../models/author')
const Search = require('../search/search')
const index = require('./index')
const content = require('./content')
const incrementContentViewCount = require('./increment_content_view_count')
const author = require('./author')

const search = new Search()

const allRoutes = {
  index: index(Course),
  content: content(Content, search),
  author: author(Author, search, Content),
  incrementContentViewCount: incrementContentViewCount(Content),
}

module.exports = allRoutes
