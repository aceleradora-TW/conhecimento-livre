class CourseMapper {
  constructor(db) { this.db = db }

  findAll() {
    return this.db.collection('Courses').find()
  }

  insertData(courseName, courseDuration, courseDescription, courseAuthor) {
    return this.db.collection('Courses').insert({ courseName: `${courseName}`, courseDuration: `${courseDuration}`, courseDescription: `${courseDescription}`, courseAuthor: `${courseAuthor}` })
  }
}

module.exports = CourseMapper
