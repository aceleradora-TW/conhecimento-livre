const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const exphbs = require('express-handlebars')
const routes = require('./src/routes/routes')

const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Admin = require('./models/admin')

const app = express()

const MONGO_URL = process.env.DATABASELOGIN

app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))

mongoose.connect(app.get('MONGO_URL'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }))
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.set('port', (process.env.PORT || 3000))

app.use(express.static(path.join(`${__dirname}/public`)))

app.get('/', routes.index)

app.get('/admin', routes.admin)

passport.use(new LocalStrategy(
  function (_, password, cb) {
    Admin.findOne({ password }, function (err, admin) {
      if (err) {
        console.log('deu shit')
        return cb(null)
      }

      if (!admin) {
        console.log('sem iadmin')
        return cb(null, false)
      }

      if (admin.password !== password) {
        console.log('senha invalida');
        return cb(null, false)
      }

      console.log('ACERTO MIZERAVI!');
      return cb(null, admin)
    })
  }
))

app.post('/admin/authorList',
  passport.authenticate('local', { failureRedirect: '/admin' }),
  (req, res) => {
    console.log('vamos ver')
    res.redirect('/loginSuccess')
  }
);

app.get('/loginFailure', function (req, res, next) {
  res.send('Failed to authenticate');
});

app.get('/loginSuccess', function (req, res, next) {
  res.send('Successfully authenticated');
});

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get('/content/:id', routes.content)

app.get('/course/:id', routes.course)

app.get('/author/:id', routes.author)

app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
