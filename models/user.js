const mongoose = require('mongoose');

//Create schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    age: Number,
    website: String
});

// Here is where you will actually name the model
// Model name has to be SINGULAR
const User = mongoose.model('User', userSchema);

//Export this model and make it available to other files
module.exports = User;
