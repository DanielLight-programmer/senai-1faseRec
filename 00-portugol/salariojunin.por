programa {
  funcao inicio() {
    // dados e variáveis
    inteiro diastrabalhados
    real salariomensal
    real salariodiario

    //leitura dos dados
      escreva("Dias trabalhados : ")
      leia(diastrabalhados)
      escreva("Salário mensal : ")
      leia( salariomensal)

      // processamento
       salariodiario = salariomensal / diastrabalhados
    
      // apresento o resultado
      escreva("ganha por dia: " + salariodiario)




  }
}
