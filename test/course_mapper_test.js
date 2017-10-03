const expect = require('chai').expect
const CourseMapper = require('../src/mappers/course_mapper')
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
          }
        }
      }
    }
  }

  it('return courses', function() {

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
  })

  it('returns data course', function() {
    const course = new Course(0.1,'Node',3.5,'Node course','Waldeco')
    const data = courseMapper.insert(course.toJSON())

    expect(course.name).to.equal(data.name)
    expect(course.duration).to.equal(data.duration)
    expect(course.description).to.equal(data.description)
    expect(course.author).to.equal(data.author)
  })
})
