const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Course = require('./models/course')
const bodyParser = require('body-parser')

const exphbs = require('express-handlebars')
const videos = require('./models/videosDb')
const Search = require('./src/search/search')
const sassMiddleware = require('node-sass-middleware')

const app = express()

const MONGO_URL = 'mongodb://localhost:27017/conhecimento-livre-dev'

app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public/css'),
  force: true,
  outputStyle: 'compressed',
  prefix: '/css',
}))

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))
mongoose.connect(app.get('MONGO_URL'))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

mongoose.connect(app.get('MONGO_URL'))

app.set('port', (process.env.PORT || 3000))

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

app.post('/search', (req, res) => {
  const searchInput = req.body.searchInput
  res.redirect(`/search/${searchInput}`)
})


app.get('/search/:courseName', (req, res) => {
  const courseName = req.params.courseName.toLowerCase()
  const courseFilter = courseTitle => item => item.title.toLowerCase().includes(courseTitle)

  Course.find({}, (err, courses) => {
    if (err) {
      console.log(err);
    } else {
      const dataset = courses;
      const search = new Search(courseFilter)

      const filteredData = search.filter(dataset, courseName)
      res.send(filteredData)
    }
  })
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

app.get('/content', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/content.html`))
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
