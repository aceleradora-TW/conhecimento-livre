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

module.exports = Course
