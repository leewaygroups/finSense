var dbconfig = require('./dbConfig');
var seed = require('./seed');
var mongoose = require('mongoose');

//setup connection to database
var finSense = dbconfig.databases.finSense;
mongoose.connect(finSense.url);
var db = mongoose.connection

db.on('error', function(err){
    
   console.log('Database error!!!');
   console.log(err); 
   
});

db.once('open', function(){
    console.log('Success: connected to finSense db!');
});

//setup schemas
finSense.schemas(mongoose);


