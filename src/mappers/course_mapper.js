class CourseMapper {
  constructor(db) { this.db = db }

  findAll() {
<<<<<<< 6da3ef7e4622dc2e24fcc4fa598d595724806865
<<<<<<< 3131cb72e789a8b4a657d3588fdaebeb84e4ab49
    return this.db.collection('Courses').find() // [Course, Course, Course, ...]
  }

  insert(courses) {
    return this.db.collection('Courses').insert(courses.toJSON())
=======
    return this.db.collection('courses').find()
>>>>>>> <fe, leco> implementa esqueleto do CourseMapper
=======
    return this.db.collection('Courses').find()
  }

  insertData(courseName, courseDuration, courseDescription, courseAuthor) {
    return this.db.collection('Courses').insert({ courseName: `${courseName}`, courseDuration: `${courseDuration}`, courseDescription: `${courseDescription}`, courseAuthor: `${courseAuthor}` })
>>>>>>> <Fernanda,Jessica,Maurcio> insere dados do curso
  }
}

module.exports = CourseMapper
