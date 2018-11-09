// requires
const express = require( 'express' );
const app = express();
const bodyParser = require('body-parser');
const jobsRouter = require('./routes/jobs.router.js');

// makes the data available on req.body
// bodyParser sets req.body = data;
app.use(bodyParser.urlencoded({extended: true}));

// uses
app.use( express.static( 'server/public' ) );
app.use('/jobs', jobsRouter)

// globals
// if process.env.PORT is undefined, use 5000
const port = process.env.PORT || 5000;

// Connect to Mongo using Mongoose
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/jobtracker';
// 27017 is the PORT that Mongo is running on
// "jobtracker" is what we are naming the database

// Attempt to connect
mongoose.connect(mongoURI, {useNewUrlParser: true});
// {useNewUrlParser: true} <- avoids a warning in the console

// Log out success or failure
mongoose.connection.on('open', () => {
    // Success!
    console.log('Connected to Mongo');
});

mongoose.connection.on('error', (error) => {
    console.log('ERROR CONNECTING TO MONGO', error);
});


// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end spin up server

 