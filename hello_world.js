const express = require('express')
const app = express();
const sendString = require('./sendString')

app.get('/', function(req,res ){
  res.send(sendString.imprimeString())
})

app.listen(3000, function(){
  console.log('alegria')
})
