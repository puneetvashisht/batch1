var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.use(express.static('public'))

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('hello world')
})


app.post('/users', function (req, res) {
  console.log(req.body)
  res.json(req.body);
})

app.get('/users', function (req, res) {
  var users = [{name:'Ravi', role:'Manager'},
              {name:'Priya', role:'Developer'},
              {name:'Sania', role:'QA'}]       
//  res.send('hello world -- post')
  res.json(users);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})