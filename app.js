const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path');

const app = express()

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
})

app.get('/video1', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video1.html`))
})
app.get('/video2', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video2.html`))
})
app.get('/video3', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video3.html`))
})
app.get('/video4', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video4.html`))
})

app.get('/cool', (request, response) => {
  response.send(cool())
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
