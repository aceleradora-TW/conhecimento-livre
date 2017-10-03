const expect = require('chai').expect
const CourseMapper = require('../src/mappers/course_mapper')
<<<<<<< 9b8a1d0f92994b19f8e31336ac084001126797bf
<<<<<<< 3131cb72e789a8b4a657d3588fdaebeb84e4ab49
const Course = require('../src/model/course')

<<<<<<< 40461b4c65191428c46337651e3d7377b77118f3

describe('CourseMapper', function() {
  let db, courseMapper

  beforeEach(function() {
    db = {
      collection: function(collectionName) {
        return {
          find: function() {
            return [{ _id: 1, name: 'video1' }, {}, {}]
          },
          insert: function(data) {
            return Object.assign({}, data, { _id: 1234 })
=======

<<<<<<< 6da3ef7e4622dc2e24fcc4fa598d595724806865
describe('CourseMapper', function() {
  it('return courses', function() {
    let db = {
      collection: function(collectionName) {
        return {
          find: function() {
            return [{}, {}, {}]
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
    collection: function(collectionName) {
      return {
        find: function() {
          return [{}, {}, {}]
        },
<<<<<<< 9b8a1d0f92994b19f8e31336ac084001126797bf
        insert: function(nome) {
          return nome
>>>>>>> <Fernanda,Jessica,Maurcio> insere dados do curso
=======
        insert: function(data) {
          return data
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
=======
  let db, courseMapper

  beforeEach(function() {
    db = {
      collection: function(collectionName) {
        return {
          find: function() {
            return [{ _id: 1, name: 'video1' }, {}, {}]
          },
          insert: function(data) {
            return Object.assign({}, data, { _id: 1234 })
          }
>>>>>>> <Mauricio, Jessica, Fernanda> adiciona beforeEach
        }
      }
    }

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
  })
>>>>>>> <Mauricio, Jessica, Fernanda> adiciona beforeEach

  it('returns courses', function() {
    const courses = courseMapper.findAll()

    expect(courses.length).to.equal(3)
<<<<<<< 57e574e58f547984fc44cf9777b99dee16945db4
>>>>>>> <fe, leco> implementa esqueleto do CourseMapper
=======
//    expect(courses[0]).to.be.an.instanceof(Course)
>>>>>>> <Mauricio, Jessica, Fernanda> refatora teste
  })

  it('returns course\'s data', function() {
    const course = new Course('Node',3.5,'Node course','Waldeco')
    const data = courseMapper.insert(course)

    expect(course.name).to.equal(data.name)
    expect(course.duration).to.equal(data.duration)
    expect(course.description).to.equal(data.description)
    expect(course.author).to.equal(data.author)
  })
})
