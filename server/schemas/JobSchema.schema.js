const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Similar to a Class

// Define our data structure
const JobSchema = new Schema({
    linkedIn: {type: String}, // reference number from LinkedIn api
    position: {type: String}, // The title of the job
    ugoRef: {type: Number} // user generated object that contains additional information
});

module.exports = JobSchema;