const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const Schema = mongoose.Schema
const MONGO_URL = 'mongodb://localhost:27017/conhecimento-livre-dev'

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

app.get('/testa-mongoose', (req, res) => {
  const courseSchema = new Schema({
    title: String,
    author: String,
    content: [],
    publication: Date,
  })
  const Course = mongoose.model('Course', courseSchema)
  const newCourse = new Course({
    title: 'Node.js API testável',
    author: 'Waldemar',
    content: [],
    publication: Date.now(),
  })
  newCourse.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.send('Curso publicado!')
    }
  })
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
