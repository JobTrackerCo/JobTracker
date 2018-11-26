const express = require('express');
const router = express.Router();

//const Schema = mongoose.Schema; // Similar to a Class

// Define our data structure


// This is a Model. It allows us to interface with the database.

// Repairs will be the collection name

// Move this data into the database



router.get('/get-env', (req, res) => {
    res.send(process.env.ENVIRONMENT)
});

module.exports = router;