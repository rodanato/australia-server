const mongoose   = require('mongoose');
mongoose.Promise = Promise;

let uri = 'mongodb+srv://rodrigo:intheclub@cluster0-89x7e.mongodb.net/spotify-broder?retryWrites=true';

mongoose.connect(uri, { useNewUrlParser: true });


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('wea are connected!');
});
