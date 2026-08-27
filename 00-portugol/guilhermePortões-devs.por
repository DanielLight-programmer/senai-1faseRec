programa {
  funcao inicio() {
  // dados e varíaveis
inteiro qtd_estagiarios, qtd_clt, qtd_pj
  inteiro equipe
  // ler os dados 
  escreva("Digite o número de estagiários: ")
  leia(qtd_estagiarios)

  escreva("Digite o número de ClTs: ")
  leia(qtd_clt)

  escreva("Digite o número de PJs: ")
  leia(qtd_pj)
  //processar/calcular
  equipe = qtd_estagiarios + qtd_clt + qtd_pj
  //apresentar os resultados
  escreva("A equipe tem " + equipe + "devs")



  }
}

  