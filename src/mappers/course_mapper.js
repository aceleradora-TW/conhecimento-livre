class CourseMapper {
  constructor(db) { this.db = db }

  findAll() {
    return this.db.collection('Courses').find() // [Course, Course, Course, ...]
  }
  insert(courses) {
    return this.db.collection('Courses').insert(courses.toJSON())
  }
  insertData(courseId, courseName, courseDuration, courseDescription, courseAuthor) {
    return this.db.collection('Courses').insert({ courseId: `${courseId}`, courseName: `${courseName}`, courseDuration: `${courseDuration}`, courseDescription: `${courseDescription}`, courseAuthor: `${courseAuthor}` })

  }

}
module.exports = CourseMapper
