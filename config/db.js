var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/unm');
console.log(process.env.MONGOLAB_URI2)
// mongoose.connect('mongodb://efanelle:fanelle1@ds157971.mlab.com:57971/unm')
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Unsuccessful', err);
});

db.once('open', function() {
  console.log('Db is working!');
})

module.exports = db;