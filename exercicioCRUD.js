var express = require('express');
var app = express();
var livros = [
{nomelivro:"TESTEnome",autorlivro:"TESTEautor"},
{nomelivro:"sdasdasdasdasd",autorlivro:"TESTEaasdasdautor"}];


const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/inserirLivro', function (req, res) {  
  res.sendFile(__dirname + '/inserirLivro.html');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/homecrud.html');
});

app.post('/livro', (req, res) => {
	 console.log(req.body);	
})

var server = app.listen(9090, function () {
   console.log("Servidor Ok!");
});

