const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://metazo:algue500@cluster0.qe2cb.mongodb.net/mern-pizza';

mongoose.connec(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true});

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB connection successfull !');
})

db.on('error' , ()=>{
    console.log('Mongo DB connection failed !');
})

module.exports = mongoose