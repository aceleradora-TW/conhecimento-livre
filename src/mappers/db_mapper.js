class DbMapper {
  constructor(db) { this.db = db }

<<<<<<< f90524facf131fb35006f0cce3ac16d88a565397
<<<<<<< b142066d225709bddcc81741f08d9b2cd4e2db47
<<<<<<< a578f20a31b98c165de2122f45bcc3b4e033222c
=======
<<<<<<< 790e9bfbfea0dd4c29a4a34ad04287748b0cc87f
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
  findAllCourses() {
    return this.db.collection('Courses').find()
=======
  findAll() {
    return this.db.collection('Courses').find() // [Course, Course, Course, ...]
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
=======
  findAllCourses() {
    return this.db.collection('Courses').find()
>>>>>>> <@JessicaFranke,@MauricioSalin> Arruma conflitos
  }

  insert(courses) {
    return this.db.collection('Courses').insert(courses.toJSON())
  }
  update(content, course) {
    return this.db.collection('Courses').update(content.toJSON(), course)
  }
  getUsers() {
<<<<<<< f90524facf131fb35006f0cce3ac16d88a565397
<<<<<<< b142066d225709bddcc81741f08d9b2cd4e2db47
<<<<<<< a578f20a31b98c165de2122f45bcc3b4e033222c
=======
<<<<<<< 790e9bfbfea0dd4c29a4a34ad04287748b0cc87f
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
    return this.db.collection('Users').getUsers()
=======
    return this.db.collection('Users').getUsers() // [User, User, User, ...]
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
=======
    return this.db.collection('Users').getUsers()
>>>>>>> <@JessicaFranke,@MauricioSalin> Arruma conflitos
  }
  createUser(user, users) {
    return this.db.collection('Users').createUser(user, users)
  }
}

module.exports = DbMapper
