// app.js
var express = require('express');
var app = express();
var db = require('./db');
var UserController = require('./app/controllers/BreedController');
app.use('/breed', UserController);

module.exports = app;