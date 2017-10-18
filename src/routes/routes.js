const Course = require('../../models/course')
const Content = require('../../models/content')
const Search = require('../search/search')
const searchByCourseName = require('./search_by_course_name')
const index = require('./index')
const content = require('./content')
const search = new Search(() => x => true)

const allRoutes = {
  index: index(Content),
  searchByCourseName: searchByCourseName(Course, search),
  content: content(Content, search)
}

module.exports = allRoutes
