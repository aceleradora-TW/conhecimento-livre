class User {
  constructor(name) {
    this.name = name;
  }
  toJSON() {
    return {
      name: this.name,
    }
  }
}

module.exports = User
