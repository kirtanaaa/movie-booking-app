const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: String,
  description: String,
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;