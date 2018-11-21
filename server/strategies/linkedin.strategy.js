const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const passport = require('passport');

const LINKEDIN_ID = process.env.LINKEDIN_ID
const LINKEDIN_SECRET = process.env.LINKEDIN_SECRET

const mongoose = require('mongoose');
// Define our data structure
const UserSchema = require('../schemas/UserSchema.schema')
// This is a Model. It allows us to interface with the database.
const Job = mongoose.model('Users', UserSchema);

const defaultUGO = {
  column1: {
    name: 'column1',
    type: 'text'
  },
  column2: {
    name: 'column2',
    type: 'bool'
  },
  column3: {
    name: 'column3',
    type: 'date'
  },
  column4: {
    name: 'column4',
    type: 'text'
  },
  column5: {
    name: 'column5',
    type: 'text'
  },
}

passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});
 
passport.use(new LinkedInStrategy({
  clientID: LINKEDIN_ID,
  clientSecret: LINKEDIN_SECRET,
  callbackURL: "http://localhost:5000/api/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
  state: true
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    const newUser = {
      user: {
        userType: 'user',
        email: profile.emails[0].value,
        name: profile.displayName,
        photo: profile.photos[0].value,
        location: profile._json.location.name,
        industries: profile._json.industry,
        ugo: JSON.stringify(defaultUGO), //JSON object
      },
      jobs: []
    }
    console.log(newUser);
    
    return done(null, profile);
  });
}));

module.exports = passport;