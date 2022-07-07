/*
1) Crie uma função baseada na função que fizemos em aula, que removia os espaços em branco e deixava em maiúsculo
	Só que esta função agora deve remover os espaços a mais entre as palavras, mantendo somente um para que as palavras continuem separadas
	// ex: minhaFuncao('OI     ! ESSA É  UMA   STRING   QUALQUER') => deve retornar a string: 'OI! ESSA É UMA STRING QUALQUER'
*/

function reduzirEspacos(frase = "OI     ! ESSA É  UMA   STRING   QUALQUER"){
   let fraseTratada = frase.split(' ') // quebra a string em array
   fraseTratada = fraseTratada.filter(item => item != '') // remove do array as strings vazias
   fraseTratada=fraseTratada.join(' ') //aqui junto todo o array por uma string com espaço
   return fraseTratada.replace(' ', '') // aqui eu substituo um espaco por uma string vazia
}
console.log(reduzirEspacos())


/*

2) Crie uma função de busca, que recebe 2 parâmetros (um array e um elemento) e retorna uma mensagem dizendo se aquele elemento
   existe no array e também qual a posição dele (índice)
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'cachorro' ) => retorna 'O elemento existe no array e a posição dele é: 1'
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 255 ) => retorna 'O elemento existe no array e a posição dele é: 2'
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'abacate' ) => retorna 'O elemento não existe no array'
   // Ex: minhaFuncao( ['a', 'cachorro', 255], '255' ) => retorna 'O elemento não existe no array'
*/
function buscaElemento(lista=[], elemento) {
     let indexElemento = lista.findIndex(item=>item===elemento)
     if(indexElemento>=0){
         return `O elemento existe no array e a posição dele é ${indexElemento}`
     }else{
         return `O elemento não existe no array`
     } 
}
console.log(buscaElemento(['a', 'cachorro', 255], 'cachorro'))
console.log(buscaElemento(['a', 'cachorro', 255], 255))
console.log(buscaElemento(['a', 'cachorro', 255], 'abacate'))
console.log(buscaElemento(['a', 'cachorro', 255], '255'))



/*
3) Crie uma função que recebe como parâmetros um caracter e um array de 
	caracteres e que remova todas as ocorrências daquele caracter no array; 
   // ex. funcaoRemoveCaracterDoArray('a', [ 'c', 'a', 'texto', 'a' ] )
   => deve retornar o array: [ 'c', 'texto' ] (pois removeu todos 'a');
*/

function removeCaracterArray(caracter, lista ){
 let listaFiltrada=lista.filter(item =>item!==caracter)
 return listaFiltrada
}
console.log(removeCaracterArray('a', [ 'c', 'a', 'texto', 'a' ]))


/*
4) Crie uma função para remover um elemento específico de uma lista;
	 // ex: Imagine que temos o seguinte 
	 // let lista = [ 'a', 4, 'Tiago', 187 ]
	 // e chamamos a função removeElemento(lista, 'Tiago')
	 // deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
	 Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando.
*/



function removerElemento(lista, elemento) {
  let listaNova=lista.filter(item=>item!==elemento)
  return listaNova
}

console.log(removerElemento([ 'a', 4, 'Tiago', 187 ], 'Tiago'))


/*

5) Crie uma função que gera um número aleátorio entre 0 e 100;
*/
function numeroAleatorio () {

   return Math.round(Math.random()*100)   

}
console.log(numeroAleatorio())





/*
5b) Crie uma lista vazia [] e vá adicionando números aleatórios nesta lista até que a lista tenha 10 números inseridos nela;
    OBS: só podem ser adicionados a esta lista os números que obedecerem à alguma das seguintes regras:
    - números ímpares que estão entre 14 e 50;
    - números múltiplos de 12;
*/

function gerarNumeroImpar14a50(){
   let numeroRandomico = Math.floor(Math.random() * (50 - 14 + 1)) + 14 // gera o numero randomico de 14 a 50
   while((numeroRandomico % 2) === 0) {// enquanto isso for par
      numeroRandomico =  Math.floor(Math.random() * (50 - 14 + 1)) + 14
   }
   return numeroRandomico
}

function gerarMultiplos12(){
      let numero = Math.floor(Math.random() * 1000) + 1;
      while(numero % 12 !== 0){
         numero = Math.floor(Math.random() * 1000) + 1;
      }
      return numero
}

let lista=[]
for(let i=0 ; i < 10; i++){
  if(i % 2 === 0){
      let numeroMultiplo12 = gerarMultiplos12()
      lista.push(numeroMultiplo12)
  }else{
      let numeroImpar = gerarNumeroImpar14a50()
      lista.push(numeroImpar)
  }
}
console.log(lista)




/*
// EXERCÍCIO BÔNUS (SÓ FAÇA SE TIVER TERMINADO TODOS OS ANTERIORES)
6) Crie uma função que receba como parâmetro um array de números e retorne
 	um array ordenado (NÃO pode usar o método array.sort());
   // ex. funcaoOrdenaArray( [4, 5, 13, 7, 3, 12, 5, 2, 2] ) ===> retorna o array [ 2, 2, 3, 4, 5, 5, 7, 12, 13 ]
*/
function ordenacaoSelecao(vetor) {
   let n = vetor.length;
   for (let i = 0; i < n - 1; i++) {
     //Encontra o menor item da parte não ordenada
     let min_idx = i;
     for (let j = i + 1; j < n; j++)
       if (vetor[j] < vetor[min_idx])
         min_idx = j;
     //Troca o menor com o primeiro elemento
     let temp = vetor[min_idx];
     vetor[min_idx] = vetor[i];
     vetor[i] = temp;
   }
   console.log(vetor);
 }
ordenacaoSelecao( [4, 5, 13, 7, 3, 12, 5, 2, 2] )