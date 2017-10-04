const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Course = require('./models/course')
const bodyParser = require('body-parser')
const Search = require('./src/search/search')

const app = express()
const MONGO_URL = 'mongodb://localhost:27017/conhecimento-livre-dev'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))

mongoose.connect(app.get('MONGO_URL'))

app.set('port', (process.env.PORT || 3000))

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

app.post('/search', (req, res) => {
  const searchInput = req.body.searchInput
  res.redirect(`/search/${searchInput}`)
})

app.get('/search/:courseName', (req, res) => {
  const courseName = req.params.courseName
  const courseFilter = courseTitle => item => item.includes(courseTitle)
  const dataset = ['alvo', 'alvaro', 'leco']
  const search = new Search(courseFilter)

  const filteredData = search.filter(dataset, courseName)
  res.send(filteredData)
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
