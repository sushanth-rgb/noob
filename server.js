const { MongoClient } = require('mongodb');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Connection URI for MongoDB
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// Database and collection names
const dbName = 'seatbooking';
const collectionName = 'seats';

// Constants for seating arrangement
const numRows = 5;
const numSeatsPerRow = 10;

// Initialize MongoDB client and start the server
client.connect((err) => {
  if (err) {
    console.error('Failed to connect to the database.');
    return;
  }

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Serve static files from the "public" directory
  app.use(express.static(path.join(__dirname, 'public')));

  // API endpoint to reserve a seat
  app.post('/reserveSeat', (req, res) => {
    // ... code for reserving a seat ...
  });

  // Root URL handler
  app.get('/', (req, res) => {
    res.send('Welcome to the seat booking system!');
  });

  // Function to initialize the seating arrangement in the database
  function initializeSeating() {
    // ... code for initializing the seating arrangement ...
  }

  // Uncomment the line below to initialize the seating arrangement in the database
  // initializeSeating();

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
