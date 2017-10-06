class DbMapper {
  constructor(db) { this.db = db }

<<<<<<< 1e70d2b5c60fe61a0d0fbe09d11174b985ff715c
<<<<<<< f90524facf131fb35006f0cce3ac16d88a565397
<<<<<<< b142066d225709bddcc81741f08d9b2cd4e2db47
<<<<<<< a578f20a31b98c165de2122f45bcc3b4e033222c
=======
<<<<<<< 790e9bfbfea0dd4c29a4a34ad04287748b0cc87f
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
=======
<<<<<<< f6772a19c3104a52a0c10253c2a92b48415788e1
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
  findAllCourses() {
    return this.db.collection('Courses').find()
=======
  findAll() {
    return this.db.collection('Courses').find() // [Course, Course, Course, ...]
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
<<<<<<< 1e70d2b5c60fe61a0d0fbe09d11174b985ff715c
=======
  findAllCourses() {
    return this.db.collection('Courses').find()
>>>>>>> <@JessicaFranke,@MauricioSalin> Arruma conflitos
=======
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
  }

  insert(courses) {
    return this.db.collection('Courses').insert(courses.toJSON())
  }
  update(content, course) {
    return this.db.collection('Courses').update(content.toJSON(), course)
  }
  getUsers() {
<<<<<<< 1e70d2b5c60fe61a0d0fbe09d11174b985ff715c
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
=======
<<<<<<< f6772a19c3104a52a0c10253c2a92b48415788e1
    return this.db.collection('Users').getUsers()
=======
    return this.db.collection('Users').getUsers() // [User, User, User, ...]
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
>>>>>>> <Fernanda, Andrei, Mauricio> adiciona user crud
  }
  createUser(user, users) {
    return this.db.collection('Users').createUser(user, users)
  }
}

module.exports = DbMapper
