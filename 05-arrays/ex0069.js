// Criar um vetor de 25 posições;
//  Gerar valores para cada posição com Math.random;
//  Solicitar ao usuário dois números inteiros entre 0 e 24 e armazená-los nas variáveis n1 e n2;
//     - confirmar se o usuário digitou valores válidos;
//  Apresentar o vetor completo na página html ou no console;
//  Apresentar a soma dos valores que se encontram nas posições n1 e n2.

function vetoresaleatorios_8_3(){
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    
let n1 
let n2 
let procurar

do{
    n1 = prompt('digite número: ')
}while(n1<0 || n1>24)

do{
    n2 = prompt('digite número: ')
}while(n2<0 || n2>24)

  let resultado =  numeros[n1]+numeros[n2]
alert(resultado)



 mostrarArray(numeros)
    console.log(numeros);
   
}

//Para o mesmo vetor anterior, acrescentar ao final uma função/funcionalidade/feature de busca de valor. Para isso, devemos solicitar ao usuário um novo valor e em seguida informar se esse valor está preseente no vetor ou não.

function vetoresaleatorios_8_4(){
const numeros = [34, 187, 412, 89, 205, 12, 499, 310, 76, 243, 150, 388, 61, 420, 275, 108, 333, 19, 451, 92, 164, 399, 215, 8]
    
let n1 
let n2 
let procurar


do{
    n1 = prompt('digite número: ')
}while(n1 >= 0 || n1 <= 24)

do{
    n2 = prompt('digite número: ')
}while(n2 >= 0 || n2 <=24)

  let resultado =  numeros[n1]+numeros[n2]
alert(resultado)



 mostrarArray(numeros)
    console.log(numeros);

    
let valor = Number(prompt("Digite um valor para pesquisar?"))
let existe = numeros.includes(valor) 
console.log(existe);

}

function andarcovolo(){

}
   


//  P-
     // P-
    





























///Para o mesmo vetor anterior, acrescentar ao final uma função/funcionalidade/feature de busca de valor. Para isso, devemos solicitar ao usuário um novo valor e em seguida informar se esse valor está preseente no vetor ou não.

function  jsgcysvycvyv(){

}

