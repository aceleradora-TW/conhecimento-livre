const cool = require('cool-ascii-faces')
const express = require('express')
const sendString = require('./send_string')

const app = express()

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
  res.send(sendString.imprimeString())
})

app.get('/cool', (request, response) => {
  response.send(cool())
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
