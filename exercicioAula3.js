/*
1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
   e essa função imprima no console o valor de cada elemento da lista;
*/


/*
2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
   e todos caracteres em maiúsculo;
   // ex: minhaFuncao('      Oi     ! essa é  uma   string   qualquer   ') => deve retornar a string: 'OI     ! ESSA É  UMA   STRING   QUALQUER'
*/
function tirandoEspacos (frase= 'OI    ! ESSA É  UMA   STRING   QUALQUER') {
  let fraseTratada = frase.split('')
  fraseTratada=fraseTratada.filter(item=>item(''))
  
  


   return fraseTratada.join('')
}
console.log(tirandoEspacos( ))

/*
3) Crie uma função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma callback function que será 
   chamada caso algum dos números informados seja inválido.
   Esta função de Callback exibe somente um alerta informando que algum número digitado é inválido;
*/