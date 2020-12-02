/* Exercício 02/12 */

//Exercício - 1
/* O código pede para o usuário digitar um número,
 após a digitação desse número e o converte o que foi digitado  para um número,
 realiza a comparação para saber se o numero é par ou impar. 
 Caso seja par mostra a mensagem "Passou no teste" e caso seja ímpar exibe a mensagem "Não passou no teste" */

 //Exercício - 2
 //A) O codigo serve para mostrar o preço de uma terminada fruta e caso ela não esteja no catálogo  possui um preço  padrão de 5 reais
 //B) A mensagem seria "O preço da fruta maça é R$ 2.25"
 //C) Seria de R$ 5
 //Exercício 3
 //A) Está pedindo para o usuário digitar um número e o convertando para número, pois por padrão o conteúdo do prompt é uma string
 //B) Vai aparecer a mensagem "Esse número passou no teste"
 //C) Vai aparecer um erro no console pois a variável mensagem está dentro do escopo da condição if. Para que ela fosse acessível deveria estar em escopo global.


 //Exercício - 4
/*  let idadeUsuario = Number(prompt('Digite a sua idade'))
 if(idadeUsuario >= 18){
   console.log('Você pode dirigir')
 }else{
   console.log('Você não pode dirigir')
 } */

 //Exercício - 5 
/* let turnoDeEstudo = prompt('Qual o turno que você estuda? Digite M para manhã, V para Vespertino e N para Noturno').toLowerCase()
if(turnoDeEstudo === 'm'){
  console.log('Bom dia !')
}else if(turnoDeEstudo === 'v'){
  console.log('Boa tarde!')
}else if( turnoDeEstudo === 'n'){
  console.log('Boa noite!')
}else{
  console.log('Desculpa não consegui indentificar o horário que você estuda ')
}
 */
//Exercicio - 6
/* let turnoDeEstudo = prompt('Qual o turno que você estuda? Digite M para manhã, V para Vespertino e N para Noturno').toLowerCase()
switch(turnoDeEstudo){
  case 'm': 
    console.log('Bom dia')
    break;
  case 'v':
    console.log('Boa tarde !')
    break;
  case 'n':
    console.log('Boa Noite!')
    break
  default:
    console.log('Desculpa não consegui indentificar o horário que você estuda')
}  */

//Exercício - 7
/* let generoFilme = prompt('Digite o genero do filme').toLowerCase()
let valorIngresso = Number(prompt('Digite o valor do Ingresso'))

if(generoFilme === 'fantasia' && valorIngresso < 15){
  console.log('Bom Filme')
}else{
  console.log('Escolha outro filme :(')
} */

/* Resolução dos desafios */
//Desafio - 1

/* let generoFilme = prompt('Digite o genero do filme').toLowerCase()
let valorIngresso = Number(prompt('Digite o valor do Ingresso'))

if(generoFilme === 'fantasia' && valorIngresso < 15){
  console.log(`Bom filme`)
  let comparSnack = prompt('Gostaria de comprar qual snack?')
  console.log(`com ${comparSnack}`)
}else{
  console.log('Escolha outro filme :(')
} */
