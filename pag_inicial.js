const cool = require('cool-ascii-faces')
const express = require('express')

const app = express()
const path = require('path');

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
})

app.get('/cool', (request, response) => {
  response.send(cool())
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
