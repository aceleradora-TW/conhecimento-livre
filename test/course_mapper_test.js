const expect = require('chai').expect
<<<<<<< 1e70d2b5c60fe61a0d0fbe09d11174b985ff715c
<<<<<<< 790e9bfbfea0dd4c29a4a34ad04287748b0cc87f
<<<<<<< 815e22e8b8b6c7b94cd209736de53b409ce68808
<<<<<<< a98d0a6665781a6936471a169b6fccbf53f8438c
const CourseMapper = require('../src/mappers/course_mapper')
<<<<<<< 1b44527c477053e1b834e73b348a4ba7e60ef691
<<<<<<< 9b8a1d0f92994b19f8e31336ac084001126797bf
<<<<<<< 3131cb72e789a8b4a657d3588fdaebeb84e4ab49
=======
const DbMapper = require('../src/mappers/db_mapper')
=======
<<<<<<< f6772a19c3104a52a0c10253c2a92b48415788e1
const DbMapper = require('../src/mappers/db_mapper')
=======
<<<<<<< a98d0a6665781a6936471a169b6fccbf53f8438c
const CourseMapper = require('../src/mappers/course_mapper')
<<<<<<< 9b8a1d0f92994b19f8e31336ac084001126797bf
<<<<<<< 3131cb72e789a8b4a657d3588fdaebeb84e4ab49
=======
const DbMapper = require('../src/mappers/db_mapper')
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
const Course = require('../src/model/course')
const Content = require ('../src/model/content')
const User = require ('../src/model/user')
=======
const Course = require('../src/model/course')
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso

<<<<<<< 4005d519548157a358107ea5bbfee74718e97474
<<<<<<< 5c96f0fc0861ebbd1a903b7d485b08fe404d99e4
<<<<<<< 40461b4c65191428c46337651e3d7377b77118f3

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
<<<<<<< a98d0a6665781a6936471a169b6fccbf53f8438c
            return Object.assign({}, data, { _id: 1234 })
=======

<<<<<<< 6da3ef7e4622dc2e24fcc4fa598d595724806865
=======
const CourseMapper = require('../src/mappers/course_mapper')
=======
const DbMapper = require('../src/mappers/db_mapper')
const Course = require('../src/model/course')
const Content = require ('../src/model/content')
const User = require ('../src/model/user')
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud

<<<<<<< 217315fdffe19ca8da9723721b3db80062ac37cf
>>>>>>> <fe, leco> implementa esqueleto do CourseMapper
=======

<<<<<<< 790e9bfbfea0dd4c29a4a34ad04287748b0cc87f
>>>>>>> <Mauricio, Jessica, Fernanda> refatora teste
describe('CourseMapper', function() {
  it('return courses', function() {
    let db = {
      collection: function(collectionName) {
        return {
          find: function() {
            return [{}, {}, {}]
<<<<<<< 815e22e8b8b6c7b94cd209736de53b409ce68808
>>>>>>> <fe, leco> implementa esqueleto do CourseMapper
          }
=======
describe.only('CourseMapper', function() {
=======
describe('CourseMapper', function() {
>>>>>>> <Fernanda, Jessica, Mauricio> insere Id no curso

  let db = {
=======
const Course = require('../src/model/course')


describe('CourseMapper', function() {
<<<<<<< 85f2d9be87771b70f877bf62272867ceb04e6240
  const db = {
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
=======
describe.only('CourseMapper', function() {
=======
describe('CourseMapper', function() {
<<<<<<< 7032ee35b36c2b71ac35935b48d03c685497d68a
<<<<<<< 1b44527c477053e1b834e73b348a4ba7e60ef691
>>>>>>> <Fernanda, Jessica, Mauricio> insere Id no curso

<<<<<<< 1e70d2b5c60fe61a0d0fbe09d11174b985ff715c
  let db = {
>>>>>>> <Fernanda,Jessica,Maurcio> insere dados do curso
=======
  const db = {
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
    collection: function(collectionName) {
      return {
        find: function() {
          return [{}, {}, {}]
        },
<<<<<<< 1b44527c477053e1b834e73b348a4ba7e60ef691
<<<<<<< 5c96f0fc0861ebbd1a903b7d485b08fe404d99e4
<<<<<<< 9b8a1d0f92994b19f8e31336ac084001126797bf
        insert: function(nome) {
          return nome
>>>>>>> <Fernanda,Jessica,Maurcio> insere dados do curso
=======
        insert: function(data) {
          return data
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
=======
=======
>>>>>>> <Mauricio, Jessica, Fernanda> adiciona beforeEach
=======
<<<<<<< f6772a19c3104a52a0c10253c2a92b48415788e1
describe('DbMapper', function() {
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
=======
describe.only('DbMapper', function() {
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
  let db, courseMapper

  beforeEach(function() {
    db = {
      collection: function(collectionName) {
        return {
<<<<<<< f6772a19c3104a52a0c10253c2a92b48415788e1
=======

          find: function() {
            return [{ _id: 1, name: 'video1' }, {}, {}]
          },
          insert: function(data) {
<<<<<<< a98d0a6665781a6936471a169b6fccbf53f8438c
            return Object.assign({}, data, { _id: 1234 })
=======
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud

          find: function() {
<<<<<<< 217315fdffe19ca8da9723721b3db80062ac37cf
<<<<<<< 7032ee35b36c2b71ac35935b48d03c685497d68a
            return [{ _id: 1, name: 'video1' }, {}, {}]
          },
          insert: function(data) {
<<<<<<< 1e70d2b5c60fe61a0d0fbe09d11174b985ff715c
<<<<<<< 790e9bfbfea0dd4c29a4a34ad04287748b0cc87f
            return Object.assign({}, data, { _id: 1234 })
=======
=======
<<<<<<< f6772a19c3104a52a0c10253c2a92b48415788e1
=======
            return Object.assign({}, data, { _id: 1234 })
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
=======
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
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
<<<<<<< 1e70d2b5c60fe61a0d0fbe09d11174b985ff715c
<<<<<<< 790e9bfbfea0dd4c29a4a34ad04287748b0cc87f
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
          }
>>>>>>> <Mauricio, Jessica, Fernanda> adiciona beforeEach
=======
=======
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
          }
>>>>>>> <fe, leco> implementa esqueleto do CourseMapper
=======
        insert: function(nome) {
          return nome
>>>>>>> <Fernanda,Jessica,Maurcio> insere dados do curso
=======
        insert: function(data) {
          return data
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
=======
            return [{}, {}, {}]
=======
            return [{ _id: 1, name: 'video1' }, {}, {}]
>>>>>>> <Mauricio, Jessica, Fernanda> refatora teste
          },
          insert: function(data) {
            return Object.assign({}, data, { _id: 1234 })
=======
<<<<<<< f6772a19c3104a52a0c10253c2a92b48415788e1
=======
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
          }
>>>>>>> <Mauricio, Jessica, Fernanda> adiciona beforeEach
        }
      }
    }

<<<<<<< 1e70d2b5c60fe61a0d0fbe09d11174b985ff715c
<<<<<<< 790e9bfbfea0dd4c29a4a34ad04287748b0cc87f
<<<<<<< 7032ee35b36c2b71ac35935b48d03c685497d68a
<<<<<<< 1b44527c477053e1b834e73b348a4ba7e60ef691
  it('return courses', function() {

<<<<<<< 815e22e8b8b6c7b94cd209736de53b409ce68808
<<<<<<< a98d0a6665781a6936471a169b6fccbf53f8438c
<<<<<<< 85f2d9be87771b70f877bf62272867ceb04e6240
<<<<<<< 9b8a1d0f92994b19f8e31336ac084001126797bf
  it('return courses', function() {

<<<<<<< 3131cb72e789a8b4a657d3588fdaebeb84e4ab49
    courseMapper = new CourseMapper(db)
  })

  it('returns courses', function() {
    const courses = courseMapper.findAll()

    expect(courses.length).to.equal(3)
//    expect(courses[0]).to.be.an.instanceof(Course)
  })

  it('returns course\'s data', function() {
    const course = new Course('Node',3.5,'Node course','Waldeco')
    const data = courseMapper.insert(course)

    expect(course.name).to.equal(data.name)
    expect(course.duration).to.equal(data.duration)
    expect(course.description).to.equal(data.description)
    expect(course.author).to.equal(data.author)
=======
    let courseMapper = new CourseMapper(db)
=======
  let courseMapper = new CourseMapper(db)
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
=======
    courseMapper = new CourseMapper(db)
=======
    dbMapper = new DbMapper(db)
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
  })
>>>>>>> <Mauricio, Jessica, Fernanda> adiciona beforeEach

  it('returns courses', function() {

    const courses = dbMapper.findAll()

    expect(courses.length).to.equal(3)
<<<<<<< a98d0a6665781a6936471a169b6fccbf53f8438c
<<<<<<< 57e574e58f547984fc44cf9777b99dee16945db4
>>>>>>> <fe, leco> implementa esqueleto do CourseMapper
=======
//    expect(courses[0]).to.be.an.instanceof(Course)
>>>>>>> <Mauricio, Jessica, Fernanda> refatora teste
=======
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
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
=======
  let courseMapper = new CourseMapper(db)
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
=======
    courseMapper = new CourseMapper(db)
=======
    dbMapper = new DbMapper(db)
=======
<<<<<<< f6772a19c3104a52a0c10253c2a92b48415788e1
    dbMapper = new DbMapper(db)
=======
<<<<<<< a98d0a6665781a6936471a169b6fccbf53f8438c
<<<<<<< 85f2d9be87771b70f877bf62272867ceb04e6240
<<<<<<< 9b8a1d0f92994b19f8e31336ac084001126797bf
  it('return courses', function() {

<<<<<<< 3131cb72e789a8b4a657d3588fdaebeb84e4ab49
    courseMapper = new CourseMapper(db)
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
  })
>>>>>>> <Mauricio, Jessica, Fernanda> adiciona beforeEach

  it('returns courses', function() {

    const courses = dbMapper.findAll()

    expect(courses.length).to.equal(3)
<<<<<<< 790e9bfbfea0dd4c29a4a34ad04287748b0cc87f
<<<<<<< 217315fdffe19ca8da9723721b3db80062ac37cf
>>>>>>> <fe, leco> implementa esqueleto do CourseMapper
=======
//    expect(courses[0]).to.be.an.instanceof(Course)
>>>>>>> <Mauricio, Jessica, Fernanda> refatora teste
=======
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
  })

  it('returns course\'s data', function() {
    const course = new Course('Node',3.5,'Node course','Waldeco')
    const data = dbMapper.insert(course)

    expect(course.name).to.equal(data.name)
    expect(course.duration).to.equal(data.duration)
    expect(course.description).to.equal(data.description)
    expect(course.author).to.equal(data.author)
<<<<<<< f6772a19c3104a52a0c10253c2a92b48415788e1

    const content = new Content('#1', 'Video Node 01', 5.0, 'API Testavel', 'www.meuvideo.com', 'video')
    const dataUpdate = dbMapper.update(content,data)

    expect(dataUpdate._id).to.equal(data._id)
    expect(content.order).to.equal(dataUpdate.content[0].order)
    expect(content.className).to.equal(dataUpdate.content[0].className)
    expect(content.duration).to.equal(dataUpdate.content[0].duration)
    expect(content.description).to.equal(dataUpdate.content[0].description)
    expect(content.url).to.equal(dataUpdate.content[0].url)
    expect(content.type).to.equal(dataUpdate.content[0].type)

=======
=======
    let courseMapper = new CourseMapper(db)
=======
  let courseMapper = new CourseMapper(db)
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
=======
    courseMapper = new CourseMapper(db)
=======
    dbMapper = new DbMapper(db)
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
  })

<<<<<<< 1e70d2b5c60fe61a0d0fbe09d11174b985ff715c
  it ('returns user\'s', function() {
=======
<<<<<<< f6772a19c3104a52a0c10253c2a92b48415788e1
  it ('retorna user', function() {
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud

    const users = dbMapper.getUsers()
    expect(users.length).to.equal(3)
  })

  it ('returns new user', function() {

=======
  it('returns courses', function() {

    const courses = dbMapper.findAll()

    expect(courses.length).to.equal(3)
<<<<<<< a98d0a6665781a6936471a169b6fccbf53f8438c
<<<<<<< 57e574e58f547984fc44cf9777b99dee16945db4
>>>>>>> <fe, leco> implementa esqueleto do CourseMapper
=======
//    expect(courses[0]).to.be.an.instanceof(Course)
>>>>>>> <Mauricio, Jessica, Fernanda> refatora teste
=======
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
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

>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
    const users = dbMapper.getUsers()
    const user = new User('joao bolao junior')

    dbMapper.createUser(users,user.name)

    expect(users[3]).to.equal(user.name)
  })
})
