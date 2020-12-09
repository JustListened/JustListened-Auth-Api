var express = require('express');
var app = express();
var database = require('./database');

var AuthController = require('./Auth/controller/auth.controller');
app.use("/v1/auth", AuthController);

module.exports = app;