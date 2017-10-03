const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const sassMiddleware = require('node-sass-middleware')
const Search = require('./src/search/search')
const Course = require('./models/course')
const Content = require('./models/content')


const app = express()
const Schema = mongoose.Schema

app.use(sassMiddleware({
  src: path.join(`${__dirname}/view/sass`),
  dest: path.join(`${__dirname}/view/css`),
}))

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const MONGO_URL = 'mongodb://localhost:27017/conhecimento-livre-dev'
app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))
mongoose.connect(app.get('MONGO_URL'))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

mongoose.connect(app.get('MONGO_URL'))
<<<<<<< 3f42b0de5718fae232b83dc8f5ad5dcf341aa91e

const db = mongoose.connection
=======
>>>>>>> adiciona schema/model de cursos

app.set('port', (process.env.PORT || 3000))

app.use(express.static(path.join(`${__dirname}/public`)))

app.get('/', (req, res) => {

  Content.find({}, (err, allContents) => {
    res.render('index', { allContents })
  })
})

app.get('/content/:id', (req, res) => {
  const id = req.params.id
  Content.find({}, (err, allContents) => {
    const content = allContents.filter(function (item) {
      return item._id.toString() === id
    })
    res.render('content', { allContents, content })
  })
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
