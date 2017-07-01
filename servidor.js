var net = require('net');
var conexoes=[];

var mensagemParaUsers = function (msg) {
	conexoes.forEach(function (connection) {
		// body...
 	connection.write(msg);
	});
};
net.createServer(function (connection) {
 	connection.write('Hello, I am the server!');
 	conexoes.push(connection);
 	connection.on('data',function (mensagem) {
 	mensagemParaUsers(mensagem);
 	});
}).listen(3000);



