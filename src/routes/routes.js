const Course = require('../../models/course')
const Content = require('../../models/content')
const Author = require('../../models/author')
const Search = require('../search/search')
const index = require('./index')
const content = require('./content')
const author = require('./author')
const search = new Search()

const allRoutes = {
  index: index(Content),
  content: content(Content, search),
  author: author(Author, search, Content)
}

module.exports = allRoutes
