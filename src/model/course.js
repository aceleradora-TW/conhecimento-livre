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

<<<<<<< HEAD
module.exports = Course
=======
module.exports = Course;
>>>>>>> b76a83b798f6a69f7924c40bb3ff16c12ed09700
