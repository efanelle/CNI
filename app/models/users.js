"use strict";

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: {type:String, required: true},
  emailAddress: {type:String, required: true},
  phone: String,
});

var User = mongoose.model('User', userSchema);

module.exports = User;