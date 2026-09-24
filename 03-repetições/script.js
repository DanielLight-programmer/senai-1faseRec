let resultado = document.getElementById('resultado')

//while lucas
//3) Em um jogo de Tower Defense, o castelo (torre) tem um total de 100 de HP. Faça um programa no qual o usuário possa digitar valores de dano até a torre ser destruída. Quando o HP acabar, mostrar a mensagem "Torre destruída". (Desafio: Mostrar o HP do castelo atualizado a cada rodada. Ao final mostrar "Jogo encerrado, com X rodadas!").

function TowerDefese(){
    let hpCastelo = 100
    let valorDano 
    let  rodadas = 0
    while(hpCastelo > 0){

        valorDano = Number(prompt("Digite o valor do dano: "))
        hpCastelo = hpCastelo - valorDano
        rodadas++
        
        if(hpCastelo > 0){

            alert("Vida atualizada: " + hpCastelo)
        }   

    }
    alert("Castelo desdruido!\nnúmero de rodadas: " + rodadas)
}

// hp-- dimnuir 1 é igual a isso hp = hp - 1
// hp-- dimnuir 1 é igual a isso hp = hp  + 1
   
//===========================================================//

//2) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar a frase “Sua salada de frutas está pronta!” Desafio: Mostrar ao final quantas frutas a salada tem."

function saladaDefruta(){
    let frutadigitada 
    while(frutadigitada != "cereja"){

        frutadigitada = prompt("Qual fruta você quer adicionar?")

    }
    alert("Sua salada de fruta está pronta!")
}
//1) Crie um programa que solicite a senha de um usuário e depois, peça pra digitar novamente até que as duas senhas sejam correspondentes.

function senhaUsuario(){

    let senhadigitada
    let senharepete
    
    senhadigitada = prompt("Digite uma senha: ")
    
    while(senhadigitada != senharepete){
        senharepete = prompt("Digite novamente a senha: ")
    }
    alert("Acesso confirmado!") 
    
}
//===============================================================================================================================

function parte3ex78(){
    resultado.innerHTML = 'Parte3-ex7.8 <br> '

}
function parte1ex7(){
   resultado.innerHTML = 'Parte1- ex7 <br> '


    }

function parte1ex6(){
    resultado.innerHTML = 'Parte1- ex6 <br> '
    for(let i = 1; i<=20;i++){
        if(i%2 != 0){
            resultado.innerHTML += '<p class="numeros">' + i + '</p>'
        }
    }

}

function parte1ex4(){
    resultado.innerHTML = 'Parte 1- ex4<br>'

    let i = 1
    while(i<=10){
        let multiplicacao = i * 5
        resultado.innerHTML += '5 x ' + i + ' = ' + multiplicacao + '<br>'
        i++
    }
}


function parte1ex3(){
    resultado.innerHTML = 'Parte 1- ex3<br>'
    let soma = 0
    let i = 1
    while(i<=100){
        soma += i
        // resultado.innerHTML += i + ':' + soma + '<br>'
        i++
    }
    resultado.innerHTML = soma
}


function parte1ex2(){

    resultado.innerHTML = 'Parte 1- ex2<br>'

    let i = 10
    while(i >= 0){
        resultado.innerHTML += i + '<br>'
        i--
    }




    
    
}

function parte1ex1(){
    document.getElementById('resultado').innerHTML = 'Parte 1- ex1<br>'
//ex1
    let i = 0
    while(i<10){
        i++
        let quadrado = i*i
        console.log(i + ': ' + quadrado);
        document.getElementById('resultado').innerHTML += i + ': ' + quadrado + '<br>'
        
    }
}
   



    // let qtd = 0
    // let total = 0 
    // let produto = -1
    //     while(produto != 0){
        //         produto = Number(prompt('Digite o preço do' + ' produto'))
        //         if(produto !=0 )qtd++
        //         total += produto
        //     }
//     alert('Valor total: ' + total + '\nQuantidade: ' + qtd )



// let contagem = 0 
// while(contagem  < 5){
//     alert(contagem)
//     contagem++
