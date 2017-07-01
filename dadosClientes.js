var users = [ { nome: "Joao",telefone:"313123",email:"joao.crulhas@gmail.com" },
{ nome: "joao 2 ",telefone:"849494",email:"teste.teste@gmail.com" }];
var tamanhoArray =(Object.keys(users).length); 

exports.users = users;

exports.methodNome = function() {
var nome="";
for(var i = 0; i < tamanhoArray; i++){
	nome = (nome + users[i].nome +"\n"); 
	}
//process.stdout.write (nome);
return(nome);
};


exports.methodTelefone = function() {
var telefone="";
for(var i = 0; i < tamanhoArray; i++){
	telefone = (telefone + users[i].telefone +"\n"); 
	}
//process.stdout.write (telefone);
return(telefone);
};

exports.methodEmail = function() {
var email="";
for(var i = 0; i < tamanhoArray; i++){
	email = (email + users[i].email +"\n"); 
	}
//process.stdout.write (email);
return(email);
};
