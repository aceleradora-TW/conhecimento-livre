const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const Schema = mongoose.Schema
const MONGO_URL = 'mongodb://localhost:27017/conhecimento-livre-dev'

app.set('MONGO_URL', (process.env.MONGO_URL || MONGO_URL))

mongoose.connect(app.get('MONGO_URL'))
const db = mongoose.connection

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`))
})

app.get('/video1', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video1.html`))
})
app.get('/video2', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video2.html`))
})
app.get('/video3', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video3.html`))
})
app.get('/video4', (req, res) => {
  res.sendFile(path.join(`${__dirname}/video4.html`))
})

app.get('/cool', (request, response) => {
  response.send(cool())
})

app.get('/testa-mongoose', (req, res) => {
  const livroSchema = new Schema({
    titulo: String,
    autores: [String],
    anoDePublicacao: Number,
    recomendadoPelaCritica: Boolean,
  })
  const Livro = mongoose.model('Livro', livroSchema)
  const novoLivro = new Livro()
  novoLivro.titulo = 'O manifesto do partido comunista'
  novoLivro.autores = ['Karl Marx', 'Friedrich Engels']
  novoLivro.anoDePublicacao = 1848
  novoLivro.recomendadoPelaCritica = false
  novoLivro.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.send('Trabalhadores do mundo, uni-vos!')
    }
  })
})

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`)
})
