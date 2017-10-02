const expect = require('chai').expect
const CourseMapper = require('../src/mappers/course_mapper')
<<<<<<< 3131cb72e789a8b4a657d3588fdaebeb84e4ab49
const Course = require('../src/model/course')


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

  let db = {
    collection: function(collectionName) {
      return {
        find: function() {
          return [{}, {}, {}]
        },
        insert: function(nome) {
          return nome
>>>>>>> <Fernanda,Jessica,Maurcio> insere dados do curso
        }
      }
    }
  }

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

    const courses = courseMapper.findAll()
    expect(courses.length).to.equal(3)
>>>>>>> <fe, leco> implementa esqueleto do CourseMapper
  })

  it('return data couse', function() {

    let courseMapper = new CourseMapper(db)

    const data = courseMapper.insertData('Node',3.5,'Node course','Waldeco')

    expect(data.courseName).to.equal('Node')
    expect(data.courseDuration).to.equal('3.5')
    expect(data.courseDescription).to.equal('Node course')
    expect(data.courseAuthor).to.equal('Waldeco')


  })
})
