programa {
  funcao inicio() {
  // informações e variaveis
  real salario
  real  moradia, agua, luz, internet, gasolina, streamings, telefone, outros
  real sobra
  //entrada de dados
  escreva("Quanto juca ganha de salário?\n")
  leia(salario)
  escreva("Quanto juca gasta com moradia?\n")
  leia(moradia)
  escreva("Quanto juca gasta com luz?\n")
  leia(luz)
  escreva("Quanto juca gasta com água?\n")
  leia(agua)
  escreva("Quanto juca gasta com internet?\n")
  leia(internet)
  escreva("Quanto juca gasta com gasolina?\n ")
  leia(gasolina)
  escreva("Quanto juca gasta com streaming?\n")
  leia(streamings)
  escreva("Quanto juca gasta com telefone?\n")
  leia(telefone)
  escreva("Quanto juca gasta com outros?\n")
  leia(outros)
  
  //processamento
 sobra = salario - (moradia + agua + luz + internet + gasolina + streamings + telefone + outros)
//saída

escreva("Quanto sobrou pro juca fazer uns roles bacanas? R$" + sobra )

  }
}
