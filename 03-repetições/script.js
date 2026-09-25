let resultado = document.getElementById('resultado')

//for lucas
//6) Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.

function NúmeroDeMultas(){


}

// 5) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).

function JogoDeCartas(){

    
prompt("Digite o  numero do joagdor: ")
}


// 4) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)

function DigiteIdade(){
    
        let idadeDigitada
        let nomeDigitado
        let somaIdades = 0
        let maiorIdade = 0 
        let maiorNome = "" 
        
        for(i=0; i< 5; i++){
        
            nomeDigitado = prompt("Digite um nome: ")
            idadeDigitada = Number(prompt("Digite uma idade: "))
            somaIdades = somaIdades + idadeDigitada
            if(idadeDigitada > maiorIdade){

                maiorIdade = idadeDigitada
                maiorNome = nomeDigitado

            }
        }
        
        alert("Média das Idades: " + somaIdades/5 + "\nMaior Idade: " + maiorIdade + "\nNome do maior: " + maiorNome)
    }
//========================================================================================================================

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
