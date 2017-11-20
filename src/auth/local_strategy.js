const Admin = require('../../models/admin')
const LocalStrategy = require('passport-local').Strategy

module.exports = new LocalStrategy(
  (username, password, callback) =>
    Admin
      .findOne({ username, password })
      .exec()
      .then((admin) => admin
        ? callback(null, admin)
        : callback(null, false)
      .catch(callback)))
