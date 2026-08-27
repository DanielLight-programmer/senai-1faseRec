programa {
  funcao inicio() {
    //dados e variáveis
    inteiro qtd_inicial,qtd_final,qtd_vendidas
    //leitura dos dados 
    escreva("Com quantas laranjas você começou do dia? ")
    leia(qtd_inicial)
    escreva("Com quantas laranjas você terminou o dia? " )
    leia(qtd_final )
    // processamento 
    qtd_vendidas = qtd_inicial - qtd_final
    // apresento o resultado
    escreva("Você vendeu " + qtd_vendidas + " laranjas vedidas hoje!")

  }
}
