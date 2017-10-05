const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Course = require('./models/course')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const videos = require('./models/videosDb')

const app = express()

app.use(bodyParser.json())

const MONGO_URL = 'mongodb://localhost:27017/conhecimento-livre-dev'
app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))
mongoose.connect(app.get('MONGO_URL'))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.set('port', (process.env.PORT || 3000))

app.use(express.static(path.join(`${__dirname}/public`)))

app.get('/', (req, res) => {
  res.render('index', { videos })
})

app.get('/video/:id', (req, res) => {
  const videoId = parseInt(req.params.id, 10)
  const currentVideo = videos.find(video => video.id === videoId)
  return currentVideo
    ? res.render('video', currentVideo)
    : res.send('Video não encontrado')
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

app.get('/content', (req, res) => {
  res.sendFile(path.join(`${__dirname}/view/content.html`))
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
