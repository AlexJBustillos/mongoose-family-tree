const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

//Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree');
// SHortcut to mongoose connection
const db = mongoose.connection;

//Models import
const User = require('./models/user');

db.once('open', () => {
    // printinh to see whathost port is on 
    console.log(`Connected to MongoDB pm ${db.host}:${db.port}`);
})

db.on('error', (err) => {
    console.error(`Database error: ${err}`);
})

app.get('/', (req, res) => {
    res.send('Mongoose');
});

app.get('/user', (req, res) => {
    User.create({
        name: 'Alex Bustillos',
        email: 'alex.ga@ga.co',
        age: 30,
        website: 'https://github.com/alexjbustillos'
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
})