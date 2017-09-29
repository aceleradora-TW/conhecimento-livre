class CourseMapper {
  constructor(db) { this.db = db }

  findAll() {
<<<<<<< 3131cb72e789a8b4a657d3588fdaebeb84e4ab49
    return this.db.collection('Courses').find() // [Course, Course, Course, ...]
  }

  insert(courses) {
    return this.db.collection('Courses').insert(courses.toJSON())
=======
    return this.db.collection('courses').find()
>>>>>>> <fe, leco> implementa esqueleto do CourseMapper
  }
}

module.exports = CourseMapper
