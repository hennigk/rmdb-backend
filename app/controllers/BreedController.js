// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var Breed = require('../models/Breeds');
var db = require('../../db');

// CREATES A NEW USER
router.post('/', function (req, res) {
    console.log(db)
    Breed.create({
            name : req.body.name
        }, 
        function (err, user) {
            console.log('yay')
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
            
        });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    
    Breed.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

module.exports = router;