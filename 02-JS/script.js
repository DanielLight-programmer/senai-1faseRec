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

function 