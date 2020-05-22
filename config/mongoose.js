const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ToDoApp');

const db= mongoose.connection;

db.on('error', console.error.bind(console, "error in connecting database"));

db.once('open', function(){
    console.log('connected to database');
});


module.exports = db;