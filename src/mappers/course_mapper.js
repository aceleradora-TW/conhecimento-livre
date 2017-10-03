class CourseMapper {
  constructor(db) { this.db = db }

  findAll() {
    return this.db.collection('Courses').find() // [Course, Course, Course, ...]
  }

  insert(courses) {
    return this.db.collection('Courses').insert(courses.toJSON())
  }
}

module.exports = CourseMapper
