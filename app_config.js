var express = require('express');

//module.exports serve para deixar a variavel disponível para outro arquivo
var app = module.exports = express();

var bodyParser = require('body-parser');

app.listen(5000);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));