const expect = require('chai').expect
const CourseMapper = require('../src/mappers/course_mapper')

describe('CourseMapper', function() {
  it('return courses', function() {
    let db = {
      collection: function(collectionName) {
        return {
          find: function() {
            return [{}, {}, {}]
          }
        }
      }
    }

    let courseMapper = new CourseMapper(db)

    const courses = courseMapper.findAll()

    expect(courses.length).to.equal(3)
  })
})
