class Course {
  constructor(name, duration, description, author) {
    this.name = name;
    this.duration = duration;
    this.description = description;
    this.author = author;
  }

  toJSON() {
    return {
      name: this.name,
      duration: this.duration,
      description: this.description,
      author: this.author,
    }
  }
}

<<<<<<< 1b44527c477053e1b834e73b348a4ba7e60ef691
module.exports = Course
=======
module.exports = Course;
>>>>>>> <Mauricio, Fernanda, Jessica> refatora insere dados do curso
