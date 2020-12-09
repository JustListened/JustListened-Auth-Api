var app = require('./app');

var port = process.env.port || 3000;

var server = app.listen(port, function(){
    console.log("Auth Api listening port " + port);
});