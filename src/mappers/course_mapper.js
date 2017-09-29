class CourseMapper {
  constructor(db) { this.db = db }

  findAll() {
    return this.db.collection('courses').find()
  }
}

module.exports = CourseMapper
