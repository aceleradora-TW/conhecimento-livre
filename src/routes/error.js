const error = () => (req, res) => {
  const failure = 'Usuário ou senha incorretos'
  res.render('admin', { failure })
}

module.exports = error
