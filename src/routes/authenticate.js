const authenticate = () => (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/admin')
  }
}

module.exports = authenticate
