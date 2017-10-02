const expect = require('chai').expect
const CourseMapper = require('../src/mappers/course_mapper')

describe.only('CourseMapper', function() {

  let db = {
    collection: function(collectionName) {
      return {
        find: function() {
          return [{}, {}, {}]
        },
        insert: function(nome) {
          return nome
        }
      }
    }
  }

  it('return courses', function() {

    let courseMapper = new CourseMapper(db)

    const courses = courseMapper.findAll()
    expect(courses.length).to.equal(3)
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
