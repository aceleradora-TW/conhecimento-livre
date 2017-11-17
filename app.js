const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const exphbs = require('express-handlebars')
const routes = require('./src/routes/routes')

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Admin = require('./models/admin')

const app = express()

const MONGO_URL = process.env.DATABASELOGIN

app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))

mongoose.connect(app.get('MONGO_URL'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.set('port', (process.env.PORT || 3000))

app.use(express.static(path.join(`${__dirname}/public`)))

app.get('/', routes.index)

app.get('/admin', routes.admin)

app.post('/admin/authorList',
  passport.authenticate('local', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
  })
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

passport.use(new LocalStrategy(function (password, done) {
  process.nextTick(function () {
    Admin.findOne({
      'password': password,
    }, function (err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (user.password != password) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
}));

app.get('/content/:id', routes.content)

app.get('/course/:id', routes.course)

app.get('/author/:id', routes.author)

app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
