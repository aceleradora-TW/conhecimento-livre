class Author {
  constructor(name, bio, email, photourl) {
    this.name = name;
    this.bio = bio;
    this.email = email;
    this.photourl = photourl;
  }

  toJSON() {
    return {
      name: this.name,
      bio: this.bio,
      email: this.email,
      photourl: this.photourl,
    }
  }
}

module.exports = Author
