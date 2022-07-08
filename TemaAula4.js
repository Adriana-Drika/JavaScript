/*
1) Crie uma função que retorna um array contendo todas as possíveis combinações de uma string;
  // ex: imprimirCombinacoes('tri')
  => possiveis combinações da string "tri":  
  ['t', 'r', 'i', 'tr', 'tri', 'ti', 'tir', 'rt', 'rti', 'ri', 'rit', 'it', 'itr', 'ir', 'irt']

  OBS: ignorem palavras que possuem caracteres repetidos como por exemplo 'banana';
       imaginem que essa função só serve para palavras que não repetem caracteres (dessa forma a lógica fica menos complicada);
*/

/*
Fontes de leitura: 

- https://brainly.com.br/tarefa/12729398 que explica minha linha 17 onde conclui que é possível 6 combinacoes possíveis que não se repete
- https://dicasdejavascript.com.br/javascript-como-remover-valores-repetidos-de-um-array/ linha 31
*/ 

function imprimirCombinacoes(string = 'tri'){
  let listaString = string.split('')
                            //TRI,     IRT,     RIT,     RTI,     TIR,     ITR
  let listaPossibilidades = [[0,1,2], [2,1,0], [1,2,0], [1,0,2], [0,2,1], [2,0,1]] // 6 possibilidades que não repetem letras
  let resultadoCombinacoes = []
  listaPossibilidades.forEach(combinacao => {//percorro a minha lista de possibilidades que montei no caderno, que são 6 possibilidades com as 3 letras
    let palavra = listaString[combinacao[0]]+listaString[combinacao[1]]+listaString[combinacao[2]]//aqui realiza as combinações das letras
    for(let i = 0; i < palavra.length; i++) {//aqui montamos as 6 possibilidades de cada palavra
        for(let j = i + 1; j < palavra.length + 1; j++){
          resultadoCombinacoes.push(palavra.slice(i , j));
        }
      }
  });
  resultadoCombinacoes = [...new Set(resultadoCombinacoes)] // usando spread e o objeto Set que remove as palavras repetidas no laço criado acima
  return resultadoCombinacoes
}
console.log(imprimirCombinacoes('tri'))

