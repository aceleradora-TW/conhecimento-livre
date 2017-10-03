const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Course = require('./models/course')
const bodyParser = require('body-parser')

const app = express()
const MONGO_URL = 'mongodb://localhost:27017/conhecimento-livre-dev'

app.use(bodyParser.json())

app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))

mongoose.connect(app.get('MONGO_URL'))

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`))
})

app.get('/cursos/curso1/video1', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video1.html`))
})
app.get('/cursos/curso1/video2', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video2.html`))
})
app.get('/cursos/curso1/video3', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video3.html`))
})
app.get('/cursos/curso1/video4', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video4.html`))
})
app.get('/preview1', (req, res) => {
  res.sendFile(path.join(`${__dirname}/preview1.html`))
})
app.get('/cursos/curso1', (req, res) => {
  res.sendFile(path.join(`${__dirname}/curso1.html`))
})

app.get('/cool', (request, response) => {
  response.send(cool())
})

app.post('/course', (req, res) => {
  const course = new Course()
  course.title = req.body.title
  course.author = req.body.author
  course.content = req.body.content
  course.publication = Date.now()

  course.save((error) => {
    if (error) {
      console.log(error)
    } else {
      res.send('Salvo com sucesso!')
    }
  })
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
