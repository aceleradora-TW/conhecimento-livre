const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Course = require('./models/course')
const bodyParser = require('body-parser')
const Author = require('./models/author')

const exphbs = require('express-handlebars')
const sassMiddleware = require('node-sass-middleware')
const routes = require('./src/routes/routes')

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

app.get('/course/:idCourse', routes.course)

app.get('/author/:idAuthor', routes.author)

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
