var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var AuthModel = require('../model/auth.model');
var ExceptionHandler = require('../exception/exception-handler');

// Create User
router.post("/user", function (req, res) {
    console.log("new user started!");
    console.log("req:", req.body);
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!req.body.email.match(emailFormat)){
        return res.status(403).send({
            code: 403, 
            message: "INVALID_EMAIL",
            description: "Email not valid, please try again use a valid one",
            date: new Date().toISOString()
        });
    }
    AuthModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        email: req.body.email,
        password: req.body.password,
    },
        function (err, user) {
            if (err){
                return ExceptionHandler(err,res);
            }
            console.log("Reponse OK :::::")
            console.log(user);
            res.status(201).send(user);
        });
});

// LIST ALL USERS
router.get('/users', function(req, res){
    AuthModel.find(function(err, users){
        if(err){
            ExceptionHandler(err,res);
        }
        res.status(200).send(users);
    });
});

module.exports = router;