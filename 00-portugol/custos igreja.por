programa {
  funcao inicio() {
    // dados e variáveis 
    real custos, recebido, quantofalta

    //leitura dos dados
  escreva("Qual os custos da igreja? R$")
  leia(custos)
  escreva("Quantias recebida igreja? R$")
  leia(recebido)
  // processamento 
  quantofalta = custos - recebido
  // apresento o resultado
  escreva("falta arrecadar R$" + quantofalta)

  
  }
}
