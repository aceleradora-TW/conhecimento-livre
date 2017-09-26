const cool = require('cool-ascii-faces')
const express = require('express')
const app = express();
const sendString = require('./sendString')

app.set('port', (process.env.PORT || 3000))
app.get('/', function(req,res ){
  res.send(sendString.imprimeString())
})

app.get('/cool', function(request, response) {
  response.send(cool());
})


//
// app.listen(3000, function(){
//   console.log('alegria')
// })

app.listen(app.get('port'), () => {
  console.log('Node app is running on port ' + app.get('port'))
})
