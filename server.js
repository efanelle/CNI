'use strict';
var express = require('express');
var path = require('path')
var app = express();
var bodyParser = require('body-parser');
var User = require('./app/models/users');

// setting port
var port = process.env.PORT || 3000;

//config files
var db = require('./config/db');

// serving static files
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//set up routes
app.get('/users', function(req, res) {
  User.find()
  .exec(function(err, users) {
    if(err) {
      console.log(err);
      res.status(404).send('Database error, no users found')
    }
    res.status(201).send({users:users});
  })
})
app.post('/users', function(req, res) {
  var user = new User({
    name: req.body.name,
    emailAddress: req.body.emailAddress,
    phone: req.body.phone,
    text: req.body.text
  })
  .save(function(err, user) {
    if(err) throw err
    res.status(200).send({user:user})
  });
})

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


app.listen((process.env.PORT || 5000), function() {
  console.log('Go witness the magic at http://localhost:' + port);
})