var express = require('express');
var app = express();

app.get('/perfil', function (req, res) {
  res.sendFile(__dirname + '/perfil.html')
});


app.get('/contato', function (req, res) {
  res.sendFile(__dirname + '/contato.html')
});

app.get('/experiencia', function (req, res) {
  res.sendFile(__dirname + '/experiencia.html')
});

app.get('/', function (req, res) {  
  res.sendFile(__dirname + '/index.html')


 });

var server = app.listen(9000, function () {
   console.log("Servidor Ok!");
});