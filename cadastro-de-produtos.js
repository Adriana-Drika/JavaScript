/*
  +============================================================+
  |                    CADASTRO DE PRODUTOS                    |
  +============================================================+

  Imaginando que teremos o seguinte produto:
  
  (modelo do objeto)
  {
    id: 0           (number, deve ser sempre único, ou seja, não podem existir dois produtos com o mesmo id)
    descricao: "",  (string)
    preco: 0        (number)
  }

  Teremos também uma lista de produtos que será uma variável de escopo global no sistema (let, não utilizem var);

  Criem um sistema onde seja possível:

  1) Cadastrar um produto;
    - cuidado para não ter o mesmo id (identificador);

  2) Excluir um produto pelo código;

  3) Encontrar um produto pelo código;

  4a) Imprimir no console em tabela a lista de produtos cadastrados;

  4b) Imprimir no console em tabela a lista de descrições dos produtos cadastrados;

  4c) Selecionar uma descrição desejada e:
    Imprimir no console em tabela somente a descrição e preço dos produtos que possuem aquela descrição escolhida; 

  5) Verificar o total de patrimônio da loja (preço total de todos os produtos);
  
  6) Verificar se todos os produtos cadastrados possuem um preço válido;
*/

let sair = 1
let opcaoSelecionada;
let listaProdutos = [
    {id: '1', descricao: 'banana', preco: 1.50},
    {id: '2', descricao: 'maca', preco: 1.20},
    {id: '3', descricao: 'abacaxi', preco: 2.99},
    {id: '4', descricao: 'bergamota', preco: 1.00},
    {id: '5', descricao: 'limao', preco: 0.75},
    {id: '6', descricao: 'uva', preco: 0.99},
    {id: '7', descricao: 'batata', preco: 1.99},
]


function cadastrarProduto(){
    console.log(`A opção selecionada foi: ${opcaoSelecionada} - Cadastrar Produto`)
    var produto = {//montar o objeto
        id: validaConversaoStringParaNumber(parseInt(prompt(`Digite o codigo do produto:`))),//validar a entrada
        descricao: prompt(`Digite a descricao do produto:`),//pegar a entrada
        preco: validaConversaoStringParaFloat(parseFloat(prompt(`Digite o preco do produto: (Ex: não digite R$ ou $, apenas números com casas decimais.)`).replace(',','.'))),//validar a entrada
    }

    if(listaProdutos.find(item => item.id === produto.id)){// antes de cadastrar valida se já existe o mesmo id/código na lista
        alert('Produto com o mesmo código já cadastrado!') 
    }else if(isNaN(produto.preco)){// antes de cadastrar valida se o preço é válido
        alert('valor informado para preço incorreto!') 
    }else{
        listaProdutos.push(produto)//salva o objeto na lista
        alert('Produto cadastrado com sucesso!')
    }
    console.log(`Voltando ao menu`)
}

function excluirProduto(){
    console.log(`A opção selecionada foi: ${opcaoSelecionada} - Excluir Produto`)
    let id = prompt(`Digite o codigo do produto:`)
    listaProdutos = listaProdutos.filter(item => item.id !== id)// atribuo uma nova lista sem o produto com o id selecionado
    alert('Produto excluido com sucesso!')
    console.log(`Voltando ao menu`)
}

function buscarProdutoPorId(){
    console.log(`A opção selecionada foi: ${opcaoSelecionada} - Buscar Produto por código`)
    let codigoProduto = prompt(`Digite o codigo do produto:`)
    console.table(listaProdutos.filter(item => item.id === codigoProduto))
    alert('Operação realizada com sucesso!')
    console.log(`Voltando ao menu`)
}

function buscarProdutoPorDescricao(){
    console.log(`A opção selecionada foi: ${opcaoSelecionada} - Buscar lista de produtos por descricao`)
    var descricaoProduto = prompt(`Digite a descricao do produto:`)
    // esta filtrando por descricao selecionada e no map devolvendo uma nova lista com apenas a propriedade preco e descicao
    console.table(listaProdutos.filter(item => item.descricao === descricaoProduto), ['descricao'])
    alert('Confira a lista dos produtos solicitados!')
    console.log(`Voltando ao menu`)
}

function verificarTotalPatrimonioLoja(){
    console.log(`A opção selecionada foi: ${opcaoSelecionada} - Verificar total de patrimonio da loja`)
    console.log(listaProdutos.reduce((acumulador, item) => acumulador + item.preco, 0))
    alert('Confira o total do patrimonio da loja!')
    console.log(`Voltando ao menu`)
}

function validaConversaoStringParaNumber(numero){
    while(isNaN(numero)){
        alert('Código inválido, digite um número válido')
        numero = parseInt(prompt(`Digite o codigo do produto:`))
    }
    return numero
}

function validaConversaoStringParaFloat(numero){
    while(isNaN(numero)){
        alert('Preço inválido, digite um número válido')
        numero = parseFloat(prompt(`Digite o preco do produto: (Ex: 39.90, 99.90, nao aceita virgula, apenas ponto.)`))
    }
    return numero
}

function listarProdutos(){
    console.log(`A opção selecionada foi: ${opcaoSelecionada} - Buscar lista de produtos`)
    console.table(listaProdutos)
    alert('Confira a lista dos produtos solicitados!')
    console.log(`Voltando ao menu`)
}

function listarProdutosDescricao(){
    console.log(`A opção selecionada foi: ${opcaoSelecionada} - Buscar lista de produtos e mostrar apenas descrição`)
    console.table(listaProdutos.map(item => item.descricao))
    alert('Confira a lista dos produtos solicitados!')
    console.log(`Voltando ao menu`)
}

function acaoSair(opcaoSelecionada){
    console.table(`A opção selecionada foi: ${opcaoSelecionada} - Sair`)
    sair = opcaoSelecionada
}

function main(){
    while(sair !== 0){
        switch(opcaoSelecionada){
            case 1:
                cadastrarProduto()
                break;
            case 2:
                excluirProduto()
                break;
            case 3:
                buscarProdutoPorId()
                break;
            case 4:
                listarProdutos()
                break;
            case 5:
                listarProdutosDescricao()
                break;
            case 6:
                buscarProdutoPorDescricao()
                break;
            case 7:
                verificarTotalPatrimonioLoja()
                break;
            case 0:
                acaoSair(opcaoSelecionada)
                break;
        }
        if(sair !== 0){

            opcaoSelecionada = parseInt(prompt(`
            1 - Cadastrar Produto\n
            2 - Excluir Produto\n
            3 - Buscar Produto por código\n
            4 - Buscar lista de produtos\n
            5 - Buscar lista de produtos e mostrar apenas descrição\n
            6 - Buscar lista de produtos por descricao\n
            7 - Verificar total de patrimonio da loja\n
            0 - Sair\n
            `))

            if(isNaN(opcaoSelecionada)){
                console.table(`A opção selecionada foi: ${0} - Sair`)
                sair = 0
            }
        }
    }
}

main()
