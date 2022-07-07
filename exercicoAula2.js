/*
1) Crie um programa que atribua à uma varíavel e imprima no console os textos: 
   'Sextou' ou 'Ainda não sextou' de acordo com a resposta de confirmação do usuário;
*/   
let ehSexta = confirm( "Hoje é Sexta-feira?")
  ? alert( "sextou" ) : alert( "nao sextou")

  console.log(ehSexta)

/*
2) Crie um programa que imprima no console os números de 1 até 10;
*/
let contador = 1
while(contador <= 10){
   console.log(`contador ${contador})`)
   contador ++
}


/*
3) Crie um programa que percorra uma determinada lista com os seguintes números: [1, 2, 7, 10, 18]
   e imprima no console a soma de todos os elementos, neste caso seria 38;
*/

 const lista = [1, 2, 7, 10,18] 
 let soma = 0; 
 for (let i = 0; i < lista. length; i++) { soma += lista[i]; }



/*
4) Crie um programa que mostre um prompt para o usuário pedindo para selecionar uma das opções: 
	1 - Continuar perguntando / 2 - Parar de perguntar
   se ele digitar algo diferente de 1 ou de 2 deve mostrar um alerta para ele informando o erro e deve solicitar novamente que escolha uma opção.
*/
let opcao;
do {
   opcao = prompt (`
   Selecione:
   1 - Continuar
   2 - Parar
   `);
   if(opcao !== '1' && opcao !== '2') {
      alert('Não entendi')
   }
} while(opcao !== '2')