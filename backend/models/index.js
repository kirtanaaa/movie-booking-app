const mongoose = require('mongoose');

// Import your model schemas
const Artist = require('./artist.model');
const Genre = require('./genre.model');
const Movie = require('./movie.model');
const User = require('./user.model');

// Define your database URL
const dbUrl = 'mongodb://localhost:27017/moviesdb';

// Connect to the MongoDB database
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the MongoDB database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Export your models
module.exports = {
  Artist,
  Genre,
  Movie,
  User,
};

mongoose.connect(dbUrl.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the database!');
})
.catch(err => {
  console.error('Cannot connect to the database!', err);
  process.exit();
});

module.exports = dbUrl;
