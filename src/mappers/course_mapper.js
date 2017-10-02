class CourseMapper {
  constructor(db) { this.db = db }

  findAll() {
    return this.db.collection('Courses').find() // [Course, Course, Course, ...]
  }
  insert(courses) {
    return this.db.collection('Courses').insert(courses.toJSON())
  }
<<<<<<< f0690fd8916e70be698c3ae5122b2a074ddec8f3
  insertData(courseId, courseName, courseDuration, courseDescription, courseAuthor) {
    return this.db.collection('Courses').insert({ courseId: `${courseId}`, courseName: `${courseName}`, courseDuration: `${courseDuration}`, courseDescription: `${courseDescription}`, courseAuthor: `${courseAuthor}` })

=======

  insertData(courseName, courseDuration, courseDescription, courseAuthor) {
    return this.db.collection('Courses').insert({ courseName: `${courseName}`, courseDuration: `${courseDuration}`, courseDescription: `${courseDescription}`, courseAuthor: `${courseAuthor}` })
>>>>>>> <Fernanda,Jessica,Maurcio> insere dados do curso
  }

}
module.exports = CourseMapper
