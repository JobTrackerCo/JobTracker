const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Similar to a Class

// Define our data structure
const UserSchema = new Schema({
    user: {
        userType: {type: String},
        email: {type: String},
        name: {type: String},
        photo: {type: String},
        location: {type: String},
        industries: [String],
        ugo: {type: String} //this is a string with values separated by commas. 
    },
    jobs: [{
        referenceNumber: {type: String},
        position: {type: String},
        companyName: {type: String},
        active: {type: Boolean},
        ugoProps: {type: String} //this is a string with values separated by commas that corresponds to the ugo in positioning.
    }]
});




module.exports = UserSchema;