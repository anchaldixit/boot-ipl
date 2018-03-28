var express = require("express");
var app = express();
var port = 8001;
app.use(express.static(_dirname + '/'));
app.lesten(port);
console.log('Server started at : ' + port);