// // Aula 4 Formas de mostrar dados na tela
// // 1 - manipulando tags html pelo ID */
// document.getElementById("titulo").innerHTML = "Novo título para página";
// // 2 - Escrevendo direto na página
// document.write("Texto com documento write");
// // 3 - Utilizando a janela do navegador
// window.alert("Mensagem de exemplo com window alert");// ou alert("Mensagem de exemplo com window alert");
// // 4 - Utilizando o console
// console.log("Imprimindo no log...");


// // Aula 5 Variáveis
// var nome = "Tiago Rodrigues";
// var idade = 32;
// console.log(nome + ', possui ' + idade + ' anos.');

// var x = 10;
// var y = 15;
// var total = x+y;
// console.log(total);

// var x = "10";
// var y = "15";
// var total = x+y;
// console.log(total);


// Aula 6 e 7 Condicionais 
// var hora = 20;

// if (hora < 12) {
//     console.log("Bom dia");
// } else if ( hora < 18) {
//     console.log("Boa tarde");
// } else if (hora <= 23) {
//     console.log("Boa noite");
// }

// if((hora >= 8 && hora <= 9)||(hora >= 17 && hora <= 18)){
//     console.log("Você está na hora do rush!");
// }

// Aula 8 Variáveis

var nome1 = 'Tiago';//Espoco geral (HOISTING)
if(nome1=='teste'){
    var idadeTiago = 32
}
console.log(idadeTiago);

let nome2 = 'Vanessa';//Escopo onde foi definido
if(nome2=='teste'){
    let idadeVanessa = 32
}
//console.log(idadeVanessa);//Uncaught ReferenceError: idadeVanessa is not defined
nome2 = 'outro nome';
//let nome2 = 'Vanessa2';//Não é possível redeclarar variáveis com let -> Uncaught SyntaxError: redeclaration of let nome2 

const nome3 = 'Christian';//Variáveis com valor constante

const pessoa = {nome: 'Christian', idade:3, peso: 17.5};//Variáveis com valor constante
console.log(pessoa);