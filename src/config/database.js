const mongoose   = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27017/social-music', {
  useMongoClient: true
});

