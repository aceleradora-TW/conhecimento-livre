const logoutSession = () => (req, res) => {
  req.session.destroy()
  res.redirect('/admin')
}

module.exports = logoutSession
