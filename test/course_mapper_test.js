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
            return [{}, {}, {}]
          },
          insert: function(data) {
            return data
          }
        }
      }
    }

    courseMapper = new CourseMapper(db)
  })

  it('returns courses', function() {
    const courses = courseMapper.findAll()

    expect(courses.length).to.equal(3)
  })
  
  it('returns course\'s data', function() {
    const course = new Course(0.1,'Node',3.5,'Node course','Waldeco')
    const data = courseMapper.insert(course.toJSON())

    expect(course.name).to.equal(data.name)
    expect(course.duration).to.equal(data.duration)
    expect(course.description).to.equal(data.description)
    expect(course.author).to.equal(data.author)
  })
})
