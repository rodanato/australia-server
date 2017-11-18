const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ArtistSchema = new Schema({
  name: 'string'
});

module.exports = mongoose.model('Artist', ArtistSchema);
