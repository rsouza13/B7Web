//DOM = Documento Object Model

//Selecionando Elemento pelo ID Aula 2
document.getElementById("exemplo").innerHTML="Christian Lucena";

//Selecionando Coleção de Elementos Aula 3
document.getElementsByClassName("lista")[0].innerHTML="Item alterado!";
document.getElementsByTagName("button")[0].innerHTML='Botão Alterado';
document.getElementsByName("e-mail")[0].value='teste@teste.com';

//Selecionando Coleção de Elementos querySelector) Aula 4
document.querySelector('#exemplo'); //# seleciona pelo ID
document.querySelector('.lista');   //. seleciona pela class
document.querySelector('button');   //seleciona pela elemento html
document.querySelector('e-mail');   //seleciona pelo atributo name
//Funcionando semelhante ao anterior, prem tras todos com a ocorrencia
document.querySelectorAll('button');

//Manipulando Class do elemento Aula 5 e 6
//classList = retorna objeto que controla a classe dos elementos
function verde(){
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('verde');
}
function vermelho(){
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.add('vermelho');
}
function azul(){
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.add('azul');
}
function trocarCor(){
    let b1 = document.querySelector("#b1").classList;
    if(b1.contains('preto')){
        b1.remove('preto');
        b1.add('verde');
    }else if(b1.contains('verde')){
        b1.remove('verde');
        b1.add('preto');
    }
}

//Aula 7 - Tipos de dados 
var nome = "Tiago Rodrigues";//String
console.log(typeof nome);
var idade = 90;//Number
console.log(typeof idade);
var macho = true;//Boolean
console.log(typeof macho);
var altura = 1.70;//Number (Float)
console.log(typeof altura);
var diplomas = ['TI', 'BancodeDados', 'Docencia'];//Object (Array) | ou = new Array('TI', 'BancodeDados', 'Docencia');
console.log(typeof diplomas);
var pessoa = {nome: 'Tiago', idade: 90, altura:1.70};//Object
console.log(typeof pessoa);

//Aula 8 - Comentários 
//Comentário de uma linha...
/** Multiplas linhas 
 * usado para documentação, ou explicação mais detalhada.
*/

//Aulas 9 e 10 - Funções
function minhaFunção(param1, param2){//início da função
    //Corpo da função
    let retorno = param1+param2;
    return retorno;
}//final da função
function alterarTitulo(titulo){
    document.getElementById("titulo").innerHTML=titulo;
}

//Aula 11 - Manipulando atributos
function trocarImagem($fileName, $alt){
    document.querySelector('.imagem').setAttribute('src', 'images/'+$fileName+'.jpg');
    document.querySelector('.imagem').setAttribute('alt', $alt);
}
function exibeNomeAnimal(){
    let $animal = document.querySelector('.imagem').getAttribute('alt');
    alert('O animal é um: '+$animal);
}

//Aula 12 - Dimensões dos elementos
document.querySelector('.texto').offsetWidth;//Tamanho do elemento com padding+border+margim+scroll
document.querySelector('.texto').offsetHeight;
document.querySelector('.texto').clientWidth;//Tamanho sem contar borda e scroll
document.querySelector('.texto').clientHeight;
document.querySelector('.texto').scrollWidth;//Tamanho real do texto, mesmo se estiver compacto com barra de rolagem
document.querySelector('.texto').scrollHeight;
document.querySelector('.texto').scrollTop;//Posição atual em px da barra de rolagem Horizontal do elemento
document.querySelector('.texto').scrollLeft;//Posição atual em px da barra de rolagem Vertical do elemento
window.scrollY;//Posição atual em px da barra de rolagem Horizontal da Página
window.scrollY;//Posição atual em px da barra de rolagem Vertical da Página

//Aula 13 - Scroll suave
function subirTela(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' //Scroll suave
    });
}


function verificaBotaoScroll() {
    let posicaoy = window.pageYOffset;
    if (posicaoy > 100)
    document.querySelector('.botaoScrollTopo').style.display = 'block';
    
    else
    document.querySelector('.botaoScrollTopo').style.display = 'none';
}

document.addEventListener("scroll", verificaBotaoScroll);

//setInterval(verificaBotaoScroll, 500);//executa função a cada meio segundo