// requires
require('dotenv').config();
const express = require( 'express' );
const app = express();
const bodyParser = require('body-parser');
const jobsRouter = require('./routes/jobs.router.js');
const authRouter = require('./routes/auth.router.js')
const envRouter = require('./routes/environment.router');
const passport = require('./strategies/linkedin.strategy')
const cors = require('cors');
const sessionMiddleware = require('./modules/session-middleware');

// makes the data available on req.body
// bodyParser sets req.body = data;

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/jobtracker';

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

// uses
app.use( express.static( 'server/public' ) );
app.use('/api/auth', authRouter)
app.use('/api/jobs', jobsRouter)
app.use('/api/env', envRouter)

// globals
// if process.env.PORT is undefined, use 5000
const port = process.env.PORT || 5000;

// Connect to Mongo using Mongoose

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

 