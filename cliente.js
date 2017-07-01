var net = require('net');
var cliente = net.connect(3000);
var nomeCliente = "Cliente 01 ";

cliente.on('data', function (mensagem) {
 console.log(mensagem.toString());
});

cliente.on('connect',function() {
	cliente.write("Cliente no role");
});
	process.stdin.on('readable', function () {
		var message = process.stdin.read();
		if (!message) return;
		message = message.toString().replace(/\n/, '');
		cliente.write(message);
});

	