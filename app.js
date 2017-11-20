const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const exphbs = require('express-handlebars')
const routes = require('./src/routes/routes')

const app = express()

const MONGO_URL = process.env.DATABASELOGIN

app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))

mongoose.connect(app.get('MONGO_URL'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.set('port', (process.env.PORT || 3000))

app.use(express.static(path.join(`${__dirname}/public`)))

app.get('/', routes.index)

app.get('/admin', routes.admin)

app.get('/admin/list', routes.list)

app.get('/content/:id', routes.content)

app.get('/course/:id', routes.course)

app.get('/author/:id', routes.author)

app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
