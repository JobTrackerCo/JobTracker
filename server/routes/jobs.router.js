const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Similar to a Class

// Define our data structure
const JobSchema = new Schema({
    linkedIn: {type: String}, // reference number from LinkedIn api
    position: {type: String}, // The title of the job
    ugoRef: {type: Number} // user generated object that contains additional information
});

// This is a Model. It allows us to interface with the database.
const Job = mongoose.model('Jobs', JobSchema);
// Repairs will be the collection name

// Move this data into the database
let sampleJob = [{linkedIn: '123456', position: 'Software Engineer', ugoRef: '98765543'}];

router.post('/', (req, res) => {
    console.log('/jobs POST');
    console.log(req.body);
    let jobFromClient = req.body;
    // Add to the database
    // validating we match the schema
    const jobToAdd = new Job(jobFromClient); 
    // Puts the data into the database
    jobToAdd.save().then(() => {
        console.log('Item added', jobToAdd);
        res.sendStatus(201); // All OK
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500); // Send back an error to client
    });
});

router.get('/allJobs', (req, res) => {
    // { search query }
    Job.find({position: 'Software Engineer'}).then( (jobsFound) => {
        res.send(JobsFound);
    }).catch( (error) => {
        res.sendStatus(500);
    })
});

module.exports = router;