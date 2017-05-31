var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/unm');
// mongoose.connect(process.env.MONGOLAB_URI2)

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Unsuccessful', err);
});

db.once('open', function() {
  console.log('Db is working!');
})

module.exports = db;