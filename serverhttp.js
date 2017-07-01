var http = require('http');
var livros = [
	{cod:1,nome:"Livro 01"},
	{cod:2,nome:"Livro 02"},
];

http.createServer(function (req,res){
	res.write(JSON.stringify(livros));
       res.end();
}).listen(8088);
