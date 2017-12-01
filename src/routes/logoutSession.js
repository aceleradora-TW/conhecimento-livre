const logoutSession = () => (req, res) => {
  req.session.destroy()
  req.logout()
  res.redirect('/admin')
}

module.exports = logoutSession
