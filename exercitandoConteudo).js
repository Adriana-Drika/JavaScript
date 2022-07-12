/*
Faça um programa em javascript que execute e apresente um menu com as seguintes opções: 

1 - Cadastro de Filhos
2 - Apresente Lista de Filhos
3 - Encerrar Sair

Observação/Dicas: 
1 - você irá precisar de 1 array global que pode ser uma const ou let chamada listaFilhos
2 - use a estrutura de função recursiva, exe:
    const menu = () => {
        let opcaoMenu = parseInt(prompt('...texto de opçõex menu'))
        switch(opcaomenu){
            //aqui eu coloco os casos conforme já vimos nos programas anteriores
        }
        menu() // aqui eu chamo a função recursivamente
    }

*/

class Filhos {
    constructor(nome){
        this.nome = nome
     
    }

}
const nomeFilhos = new Filhos 





let menu = () => {
    let opcaoMenu = parseInt(prompt(`
    Selecione:\n
    1-Cadastro de Filhos
    2-Apresente lista de filhos
    3-Encerrar/Sair
    `))
    switch(opcaoMenu){
    case 1:
         cadastrarFilhos()
         break;
    case 2:
        console.table(listaFilhos, [`nome`])
        alert(`Lista apresentada no console!`)
        break;    
        //aqui eu coloco os casos conforme já vimos nos programas anteriores
    }
    menu() // aqui eu chamo a função recursivamente
}

menu();