let resultado = document.getElementById('resultado')

function parte1ex3(){
    resultado.innerHTML = 'Parte 1, ex3<br>'
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

    resultado.innerHTML = 'Parte 1, ex2<br>'

    let i = 10
    while(i >= 0){
        resultado.innerHTML += i + '<br>'
        i--
    }




    
    
}

function parte1ex1(){
    document.getElementById('resultado').innerHTML = 'Parte 1, ex1<br>'
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
