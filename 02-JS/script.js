



function JogoDeAdvinhação(){
//entendimento
//Crie um número aleatório entre 1 e 10. Peça ao usuário para adivinhar o número e, em seguida, diga se ele acertou ou não.

//infos e varíaveis
//jean
let numero
let sorteado

//entrada de dados - Rafael
numero = Number(prompt('Adivinhe qual número foi sorteado (1..10):'))
sorteado = Math.ceil(Math.random()*10)

//processamentos
if (numero >= 9) {
    alert ("acertou")
    
} else {
     alert ("tente novamente")
    
}
//saída
}


function verificarMaioridade(){ 
//entendimento
//o programa deve ler a idade de uma pessoa e informar se ela é maior de idade ou não.

//informação e variáveis
let idade
//entrada de dados 
idade = Number(prompt("Digite sua idade:"))

//processamento
//saída
if(idade >= 18){
    alert("Maior de idade")
}else{
    alert("NÃO é maior de idade")
}
}

function CalcularLucroDoGanso(){
//entendimento
//O programa deve ler gastos, faturamento em ingressos e faturamento na loja e calcular o lucro em reais e o lucro em percentual.  
//infos e variaveis
let gastos, faturamentoIngressos, faturamentoLoja
let lucroReais, lucroPercentual

//entrada de dados 
gastos = Number(prompt('Digite o gasto de hoje: '))
faturamentoIngressos = Number(prompt('Faturamento em engresso: '))
faturamentoLoja = Number(prompt('Faturamento na loja de itens: '))

//processamento
console.log(faturamentoIngressos);
console.log(faturamentoLoja);

let faturamentoTotal = faturamentoIngressos + faturamentoLoja
console.log(gastos);
 console.log(faturamentoTotal);
 
lucroReais = faturamentoTotal - gastos

// gastos -- 100%
// lucroReais -- x% (lucroPercentual)
///gastos*LucroPercentual = LucroReais*100
// lucroPercentual = (lucroReais/gastos)*100

lucroPercentual = (lucroReais*100)/gastos
console.log(lucroReais)
    // saída
    alert('Lucro: R$' + lucroReais.toFixed(2) + ' ou ' + lucroPercentual + '%')
}

function calcularPrecoDoPrompt(){
    // entendimento
    // ler o tamanho do texto do prompt e calcular o seu custo. 
        // o custo é calculado por: 5 tokens fixos + 1 token por caracter do prompt.

    // infos e variáveis
    let textoPrompt
    let tamanhoPrompt 
    let totalDeTokens
    // leitura de dados
    textoPrompt = prompt('Digite seu prompt')
    // processamento
    tamanhoPrompt = textoPrompt.length
    totalDeTokens = 5 + tamanhoPrompt
    // saída
    alert("Seu prompt vai consumir " + totalDeTokens + ' tokens')
}