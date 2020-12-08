/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


 console.log("Bem-vindo(a) ao jogo de Backjack")

 let jogo = confirm("Quer iniciar uma nova rodada?")

 if (jogo) {
    let carta1Usuario = comprarCarta()
    let carta2Usuario = comprarCarta()
    let carta1Pc = comprarCarta()
    let carta2Pc = comprarCarta()

   let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
   let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
   console.log(`PC - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)

   if (pontuacaoUsuario > pontuacaoPc) {
      console.log("O usuário ganhou!")
   } else if (pontuacaoPc > pontuacaoUsuario){
      console.log("o PC ganhou!")
   } else if (pontuacaoUsuario === pontuacaoPc) {
      console.log("O jogo empatou!")
   }

 } else {
    console.log ("O jogo Acabou!")
 }