// Require modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var jwtToke = require('jsonwebtoken');
var cors = require('cors');

var app = express();
var port = process.env.PORT || 3000;

//set up global middleware use
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//require route
var protectedRoute = require('./protectedRoutes');

app.use('/api', protectedRoute);

app.listen(port);
console.log('App started. Visist http://localhost:' + port);