class DbMapper {
  constructor(db) { this.db = db }

  findAllCourses() {
    return this.db.collection('Courses').find() // [Course, Course, Course, ...]
  }

  insert(courses) {
    return this.db.collection('Courses').insert(courses.toJSON())
  }
  update(content, course) {
    return this.db.collection('Courses').update(content.toJSON(), course)
  }
  getUsers() {
    return this.db.collection('Users').getUsers() // [User, User, User, ...]
  }
  createUser(user, users) {
    return this.db.collection('Users').createUser(user, users)
  }
}

module.exports = DbMapper
