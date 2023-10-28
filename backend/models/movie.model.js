const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  releaseDate: Date,
  duration: Number,
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
  cast: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
