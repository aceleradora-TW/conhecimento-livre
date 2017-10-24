const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Course = require('./models/course')
const Author = require('./models/author')
const bodyParser = require('body-parser')

const exphbs = require('express-handlebars')
const routes = require('./src/routes/routes')

const filter = require('./src/filter/quick_filter')
const content = require('./models/content')
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

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))
mongoose.connect(app.get('MONGO_URL'))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

mongoose.connect(app.get('MONGO_URL'))

app.set('port', (process.env.PORT || 3000))

app.use(express.static(path.join(`${__dirname}/public`)))

app.get('/', routes.index)

app.get('/content/:id', routes.content)

app.get('/author/:idAuthor', routes.author)

app.post('/search', (req, res) => {
  const searchInput = req.body.searchInput
  res.redirect(`/search/${searchInput}`)
})

app.get('/search/:courseName', routes.searchByCourseName)


app.post('/filter/:paramName', (req, res) => {
  const nivel = req.body.nivel
  const courseName = req.params.paramName
  res.redirect(`/search/${courseName}/${nivel}`)
})

app.post('/filter/:paramName', (req, res) => {
  const nivel = req.body.nivel
  const courseName = req.params.paramName
  res.redirect(`/search/${courseName}/${nivel}`)
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
