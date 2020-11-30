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
    AuthModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        email: req.body.email,
        password: req.body.password,
    },
        function (err, user) {
            if (err){
                console.log("Error :::::")
                if (err.name == "MongoError" && err.message.includes('duplicate key')) {
                    console.log({
                        code: 403, 
                        message: "Cannot insert duplicated emails on database",
                        date: new Date().toISOString()
                    });
                    return res.status(403).send({
                        code: 403, 
                        message: "Cannot insert duplicated emails on database", 
                        date: new Date().toISOString()
                    });
                }else{
                    return res.status(500).send({
                        code: 500, 
                        message: "Generic error from api", 
                        date: new Date().toISOString()
                    });
                }
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
            return res.status(500).send({
                code: 500, 
                message: "Generic error from api", 
                date: new Date().toISOString()
            });
        }
        res.status(200).send(users);
    });
});

module.exports = router;