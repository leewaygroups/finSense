var express = require('express');
var data = require('../database');
var authMiddleware = require('./authenticate');
var router = express.Router();


// middleware that is specific to this router
//use this for authentication
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// routes
router.post('/login', authMiddleware, function(req, res){
   res.end();
});

router.get('/users', authMiddleware, function(req, res) {
  res.json(data.users);
});

router.get('/accounts', authMiddleware, function(req, res) {
  res.json(data.accounts);
});

module.exports = router;