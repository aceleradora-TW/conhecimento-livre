const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const Course = require('./models/course')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express()
<<<<<<< ea54d51822590f909cab36a8f0b6ffc6220087c3

app.use(bodyParser.json())

const MONGO_URL = 'mongodb://localhost:27017/conhecimento-livre-dev'
app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))
mongoose.connect(app.get('MONGO_URL'))
=======
// const hbs = exphbs.create({
//   defaultLayout: 'main',
// })
>>>>>>> comenta código duplicado no arquivo app.js

const videosDb = [{}, { id: 1, nome: 'Node API video 1', url: 'https://www.youtube.com/embed/l4glc0XNVbM' },
  { id: 2, nome: 'Node API Part II: Retorno do Jedi', url: 'https://www.youtube.com/embed/CTz5pCnZ03k' }]

<<<<<<< ea54d51822590f909cab36a8f0b6ffc6220087c3
=======
// app.engine('handlebars', hbs.engine)
// app.set('view engine', 'handlebars')
>>>>>>> comenta código duplicado no arquivo app.js

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.set('port', (process.env.PORT || 3000))

app.use(express.static(path.join(`${__dirname}/public`)))

app.get('/', (req, res) => {
  const videos = {
    videos: videosDb,
  }
  res.render('index', videos)
})

app.get('/video/:id', (req, res) => {
  const videoId = parseInt(req.params.id, 10)
  res.render('video', videosDb[videoId])
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
