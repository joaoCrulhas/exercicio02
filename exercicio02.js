var users = require('./dadosClientes.js').users;
var importarMetodoNome = require('./dadosClientes.js').methodNome;
var importarMetodoTelefone = require('./dadosClientes.js').methodTelefone;
var importarMetodoEmail = require('./dadosClientes.js').methodEmail;


console.log ("Usuarios da Loja Descritos de uma unica vez");
console.log(users);

console.log("\n *********************** \n ");
console.log("Metodo de visualiza Nome")
console.log(importarMetodoNome());
console.log("\n Metodo de visualiza Telefone");
console.log(importarMetodoTelefone());
console.log("\n Metodo de visualiza Email");
console.log(importarMetodoEmail());


var tamanhoArray =(Object.keys(users).length); 


function exibirClientes(contador){
  if(contador < tamanhoArray){
    setTimeout(function(){
      console.log("\n\n");
      console.log(users[contador]);
      contador++;
      exibirClientes(contador);

    }, 3000);
  }
}
exibirClientes(0);