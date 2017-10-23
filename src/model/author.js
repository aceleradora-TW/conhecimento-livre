class Author {
  constructor(name, bio, email, course) {
    this.name = name;
    this.bio = bio;
    this.email = email
  }

  toJSON() {
    return {
      name: this.name,
      bio: this.bio,
      email: this.email
    }
  }
}

module.exports = Author
