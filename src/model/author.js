class Author {
  constructor(name, bio, email, course) {
    this.name = name;
    this.bio = bio;
    this.email = email;
    this.course = course;
  }

  toJSON() {
    return {
      name: this.name,
      bio: this.bio,
      email: this.email,
      course: this.course,
    }
  }
}

module.exports = Author
