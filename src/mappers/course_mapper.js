class CourseMapper {
  constructor(db) { this.db = db }

  findAll() {
    return this.db.collection('Courses').find()
  }

  insert(courses) {
    return this.db.collection('Courses').insert(courses)
  }
}

module.exports = CourseMapper
