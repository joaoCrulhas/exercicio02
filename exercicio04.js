var http = require('http');
http.createServer(function (req,res){
    if (req.url == '/perfil') res.write("<h1> Pefil Joao Pedro </h1>");
    if (req.url == '/contato') res.write("<h1> Contato Joao Pedro </h1> <p> 14-343434343</p>");
	if (req.url == '/experiencia') res.write("<h1> experiencia Joao Pedro </h1>");
	if (req.url == '/') res.write("<h1> Bem vindo ao CV do joao pedro</h1>");
	
       res.end();
}).listen(8088);