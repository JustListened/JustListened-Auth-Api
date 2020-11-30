var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var AuthModel = require('../model/auth.model');
var ExceptionHandler = require('../exception/exception-handler');
// Create User
router.post("/user", function (request, response) {
    console.log("new user started!");
    console.log("request:", request.body);
    AuthModel.create({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        dob: request.body.dob,
        email: request.body.email,
        password: request.body.password,
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
                    return response.status(403).send({
                        code: 403, 
                        message: "Cannot insert duplicated emails on database", 
                        date: new Date().toISOString()
                    });
                }else{
                    return response.status(500).send({
                        code: 500, 
                        message: "Generic error from api", 
                        date: new Date().toISOString()
                    });
                }
            }
            console.log("Reponse OK :::::")
            console.log(user);
            response.status(200).send(user);
        });
});

module.exports = router;