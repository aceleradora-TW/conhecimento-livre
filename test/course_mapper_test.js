const expect = require('chai').expect
<<<<<<< 6f4b4c177cb860975df84c9de4eb5ea197f4232b
const DbMapper = require('../src/mappers/db_mapper')
const Course = require('../src/model/course')
const Content = require ('../src/model/content')
const User = require ('../src/model/user')


describe.only('DbMapper', function() {
  let db, courseMapper

  beforeEach(function() {
    db = {
      collection: function(collectionName) {
        return {

          find: function() {
            return [{ _id: 1, name: 'video1' }, {}, {}]
          },
          insert: function(data) {
            return Object.assign({}, { _id: 1234 }, data)
          },
          update: function(dataUpdate,content) {
            return Object.assign({}, content, {content: [dataUpdate]})
          },
          getUsers: function() {
            return ['Joao','lucas','bruno']
          },
          createUser: function(users,user) {
            return users.push(user)
          }
=======
const CourseMapper = require('../src/mappers/course_mapper')
const Course = require('../src/model/course')

describe('CourseMapper', function() {
  const db = {
    collection: function(collectionName) {
      return {
        find: function() {
          return [{}, {}, {}]
        },
        insert: function(data) {
          return data
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
        }
      }
    }

<<<<<<< 6f4b4c177cb860975df84c9de4eb5ea197f4232b
    dbMapper = new DbMapper(db)
  })

  it('returns courses', function() {

    const courses = dbMapper.findAllCourses()

    expect(courses.length).to.equal(3)
  })

  it('returns course\'s data', function() {
    const course = new Course('Node',3.5,'Node course','Waldeco')
    const data = dbMapper.insert(course)

    expect(course.name).to.equal(data.name)
    expect(course.duration).to.equal(data.duration)
    expect(course.description).to.equal(data.description)
    expect(course.author).to.equal(data.author)

    const content = new Content('#1', 'Video Node 01', 5.0, 'API Testavel', 'www.meuvideo.com', 'video')
    const dataUpdate = dbMapper.update(content,data)

    expect(dataUpdate._id).to.equal(data._id)
    expect(content.order).to.equal(dataUpdate.content[0].order)
    expect(content.className).to.equal(dataUpdate.content[0].className)
    expect(content.duration).to.equal(dataUpdate.content[0].duration)
    expect(content.description).to.equal(dataUpdate.content[0].description)
    expect(content.url).to.equal(dataUpdate.content[0].url)
    expect(content.type).to.equal(dataUpdate.content[0].type)

  })

  it ('returns user\'s', function() {

    const users = dbMapper.getUsers()
    expect(users.length).to.equal(3)
  })

  it ('returns new user', function() {

    const users = dbMapper.getUsers()
    const user = new User('joao bolao junior')

    dbMapper.createUser(users,user.name)

    expect(users[3]).to.equal(user.name)
=======
  let courseMapper = new CourseMapper(db)

  it('returns courses', function() {
    const courses = courseMapper.findAll()

    expect(courses.length).to.equal(3)
  })

  it('returns data course', function() {
    const course = new Course(0.1,'Node',3.5,'Node course','Waldeco')
    const data = courseMapper.insert(course.toJSON())

    expect(course.name).to.equal(data.name)
    expect(course.duration).to.equal(data.duration)
    expect(course.description).to.equal(data.description)
    expect(course.author).to.equal(data.author)
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
  })
})
