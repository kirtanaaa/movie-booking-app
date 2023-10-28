const http = require('http');
const dbUrl = require('mongodb://localhost:3000/moviesdb');

const mongoose = require('mongoose');

// Replace these with your actual MongoDB data retrieval logic
const getMoviesData = () => {
  return "All Movies Data in JSON format from Mongo DB";
};

const getGenresData = () => {
  return "All Genres Data in JSON format from Mongo DB";
};

const getArtistsData = () => {
  return "All Artists Data in JSON format from Mongo DB";
};


const server = http.createServer((req, res) => {
  // Set response headers to indicate JSON content
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/movies' && req.method === 'GET') {
    const moviesData = getMoviesData();
    res.statusCode = 200;
    res.end(JSON.stringify(moviesData));
  } else if (req.url === '/genres' && req.method === 'GET') {
    const genresData = getGenresData();
    res.statusCode = 200;
    res.end(JSON.stringify(genresData));
  } else if (req.url === '/artists' && req.method === 'GET') {
    const artistsData = getArtistsData();
    res.statusCode = 200;
    res.end(JSON.stringify(artistsData));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const port = 3000; // You can change this to the desired port number
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//const dbUrl = 'mongodb://localhost:3000/moviesdb';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
  const db = require("./app/models");
  db.mongoose
    .connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Connected to the database!");
      
    })
    .catch(err => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });