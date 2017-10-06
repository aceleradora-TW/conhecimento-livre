class DbMapper {
  constructor(db) { this.db = db }

<<<<<<< a578f20a31b98c165de2122f45bcc3b4e033222c
  findAllCourses() {
    return this.db.collection('Courses').find()
=======
  findAll() {
    return this.db.collection('Courses').find() // [Course, Course, Course, ...]
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
  }

  insert(courses) {
    return this.db.collection('Courses').insert(courses.toJSON())
  }
  update(content, course) {
    return this.db.collection('Courses').update(content.toJSON(), course)
  }
  getUsers() {
<<<<<<< a578f20a31b98c165de2122f45bcc3b4e033222c
    return this.db.collection('Users').getUsers()
=======
    return this.db.collection('Users').getUsers() // [User, User, User, ...]
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
  }
  createUser(user, users) {
    return this.db.collection('Users').createUser(user, users)
  }
}

module.exports = DbMapper
