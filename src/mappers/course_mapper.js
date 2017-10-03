class CourseMapper {
  constructor(db) { this.db = db }

  findAll() {
    return this.db.collection('Courses').find() // [Course, Course, Course, ...]
  }
  insert(courses) {
    return this.db.collection('Courses').insert(courses.toJSON())
  }
<<<<<<< c0797e623a729ff0923763a75a275ef3a27ebb47
  insertData(courseId, courseName, courseDuration, courseDescription, courseAuthor) {
    return this.db.collection('Courses').insert({ courseId: `${courseId}`, courseName: `${courseName}`, courseDuration: `${courseDuration}`, courseDescription: `${courseDescription}`, courseAuthor: `${courseAuthor}` })
=======

  insert(courses) {
    return this.db.collection('Courses').insert(courses)
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
  }

}
module.exports = CourseMapper
