const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const exphbs = require('express-handlebars')
const routes = require('./src/routes/routes')

const passport = require('passport')
const localStrategy = require('./src/auth/local_strategy')
const expressSession = require('express-session')

const app = express()

const MONGO_URL = process.env.DATABASELOGIN

app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))

mongoose.connect(app.get('MONGO_URL'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

passport.use(localStrategy)

app.use(expressSession({
  secret: 'keyboard_cat',
  resave: true,
  saveUninitialized: false,
}));

app.use(passport.initialize())
app.use(passport.session())

app.post('/admin/list',
passport.authenticate('local', { failureRedirect: '/error' }),
routes.authenticate, routes.list)

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.set('port', (process.env.PORT || 3000))

app.use(express.static(path.join(`${__dirname}/public`)))

app.get('/', routes.index)

app.get('/admin', routes.admin)

app.get('/error', routes.error)

app.get('/authorCourses/:id', routes.authenticate, routes.authorCourses)

app.get('/admin/contentList/:id', routes.authenticate, routes.contentList)

app.get('/admin/author/:id', routes.authenticate, routes.authorData)

app.get('/admin/newAuthor', routes.authenticate, routes.newAuthor)

app.get('/admin/list', routes.authenticate, routes.list)

app.post('/admin/saveAuthor', routes.authenticate, routes.saveAuthor)

app.get('/admin/course/:id', routes.authenticate, routes.courseData)

app.get('/admin/newCourse', routes.authenticate, routes.newCourse)

app.post('/admin/saveCourse', routes.authenticate, routes.saveCourse)

app.get('/insertCourse/:id', routes.authenticate, routes.insertCourse)

app.get('/content/:id', routes.content)

app.get('/course/:id', routes.course)

app.get('/author/:id', routes.author)

app.get('/admin/newContent/:id', routes.authenticate, routes.newContent)

app.post('/admin/saveContent/:courseId', routes.authenticate, routes.saveContent)

app.post('/admin/saveContent/edit/:contentId', routes.authenticate, routes.editContent)

app.get('/admin/content/:id', routes.authenticate, routes.contentData)

app.delete('/deleteItem/:id', routes.deleteItem)

app.get('/logout', routes.logoutSession)

app.use((req, res) => res.status(404).render('404'))

app.listen(app.get('port'), () =>
console.log(`Node app is running on port ${app.get('port')}`))
