/*
  +================================================================+
  |                    SISTEMA DE COLABORADORES                    |
  +================================================================+

  Nesse nosso sistema teremos os seguintes MODELOS de Classe:

  Colaborador {
    id;
    nome;
    marcacoes; (um array de marcações, ex: [ { dia: 22, horas: 9 }, { dia: 23, horas: 7 } ]);
    
    marcarPonto = ( dia, hora ) => {
      // lógica pra marcar o ponto
    };
  };

  Marcacao {
    dia; (só um number mesmo, ex: 22 )
    horas; (também só um number, ex: 9)
  }
  
  Crie também uma classe de 'Validacoes' que terá métodos úteis de validação para usar em várias partes do sistema;
  Ex: Validacoes { 
    ehInvalido(valorParaValidar) {
      // imaginem uma lógica validando aqui
      return true ou false, dependendo da validação;
    }
  }

  Para utilizar essas validações, 

  Ex: const validador = new Validacoes(); // inicializando um validador (vai ser o mesmo global para o sistema, não precisa instanciar mais de 1)

  if(validador.ehInvalido('Valor qualquer')) {
    // só pra exemplificar como utilizar
    alert('Inválido')
    return;
  }

  Vamos criar um sistema da seguinte forma;
  Deve ser apresentado para o usuário um "menu" para ele escolher uma ação a ser realizada;

  As opções serão:

  1 - Cadastrar Colaborador;
  2 - Marcar Ponto; (não posso ter duas marcações no mesmo dia para o mesmo colaborador)
  3 - Editar as horas de uma marcação; (pesquisar pelo dia para poder editar)
  4 - Ver Lista de Colaboradores;
  5 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
  6 - Ver Lista de todas as marcações com o nome do colaborador; // ex: [ { colaborador: 'Fulano', dia: 12, horas: 7 }, { colaborador: 'Fulano', dia: 13, horas: 8 }, { colaborador: 'João', dia: 12, horas: 7 } ]
  9 - Encerrar;
*/

class Colaborador {
  constructor(nome, marcacoes){
      this.id = incrementaID()
      this.nome = nome
      this.marcacoes = marcacoes
  }

  marcarPonto = (dia, hora) => {
    this.marcacoes.push(new Marcacao(dia, hora))
  };

  mostrarMarcacoes = () => {
     let mensagem = ``
     this.marcacoes.forEach(marcacao => {
        mensagem += `Marcacao - Dia: ${marcacao.dia} - Hora ${marcacao.hora}\n`
     }) 
     return mensagem
  }

};

class Marcacao {
  constructor(dia, hora){
    this.dia = dia;
    this.hora = hora; 
  }
}

class Validacoes { 
  existeColaborador = () => {
     return listaColaboradores.length > 0
  }
}

const listaColaboradores = []

const incrementaID = () => {
  if(new Validacoes().existeColaborador()){
    let colaborador = listaColaboradores[listaColaboradores.length - 1]//pega o ultimo da lista
    return colaborador.id + 1
  }
  return 1
}

const cadastrarColaborador = () => {
  let colaborador = new Colaborador(prompt(`Digite o nome do colaborador:`), [])
  listaColaboradores.push(colaborador)

  alert(`Colaborador ${colaborador.nome} cadastrado com sucesso!`)
}

const cadastrarMarcacaoPonto = () => {
  let colaborador = buscarColaboradorPorNome(prompt(`Digite o nome do colaborador:`))
  //valida se colaborador existe
  if(colaborador){
    //solicito dia e hora para o ususario
    let dia = parseInt(prompt(`Digite o dia do ponto:`))
    let hora = parseInt(prompt(`Digite a hora do ponto:`))
    //registro a marcacao de ponto para o colaborador
    colaborador.marcarPonto(dia, hora)
    alert(`Marcacao do colaborador  ${colaborador.nome} cadastrado com sucesso!`)
  }else{
    alert(`Colaborador nao encontrado!`)
  }
}

const editarMarcacaoPontoColaborador = () => {
  //busca colaborador
  let colaborador = buscarColaboradorPorNome(prompt(`Digite o nome do colaborador:`))
  //valida se colaborador foi encontrado
  if(colaborador){
    //solicito para o usuario qual dos dias das marcacoes ele deseja editar
    let dia = parseInt(prompt(`
        As marcacoes do colaborador ${colaborador.nome} sao: \n${colaborador.mostrarMarcacoes()}\n
        Digite o dia do ponto para edicao:
    `))
    //busco a marcacao pelo dia selecionado na variavel anterior
    let novaMarcacao = colaborador.marcacoes.filter(marcacao => marcacao.dia === dia)[0]
    //solicito a hora para o usuario editar nessa nova marcacao
    novaMarcacao.hora = parseInt(prompt(`Digite a nova hora dessa marcacao:`))

    //excluo das marcaocoes anteriores a marcacao do dia selecionado
    colaborador.marcacoes = colaborador.marcacoes.filter(marcacao => marcacao.dia != marcacao.dia )
  
    //insiro a nova marcacao na lista de marcacoes
    colaborador.marcacoes.push(novaMarcacao)

    alert(`Marcacao do colaborador ${colaborador.nome} editada com sucesso!`)
  }else{
    alert(`Colaborador nao encontrado`)
  }
}

const buscarColaboradorPorNome = (nome) => {
    return listaColaboradores.filter(colaborador => colaborador.nome === nome)[0]
}

const menu = () => {
   let opcaoMenu = parseInt(prompt(`
    Selecione:\n
    1 - Cadastrar Colaborador\n
    2 - Marcar Ponto \n
    3 - Editar as horas de uma marcação\n
    4 - Ver Lista de Colaboradores\n
    5 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto\n
    6 - Ver Lista de todas as marcações com o nome do colaborador\n
    9 - Encerrar
   `))

   switch(opcaoMenu){
      case 1:
          cadastrarColaborador()
          break;
      case 2:
          cadastrarMarcacaoPonto()
          break;
      case 3:
          editarMarcacaoPontoColaborador()
          break;
      case 4:
          console.table(listaColaboradores, [`id`, `nome`])
          alert(`Lista apresentada no console!`)
          break;
      case 5:
          console.table(listaColaboradores.filter(colaboradores => colaboradores.marcacoes.length === 0), [`id`, `nome`])
          alert(`Lista apresentada no console!`)
          break;
      case 6:
          listaColaboradores.filter(colaboradores => colaboradores.marcacoes.length > 0).forEach(colaborador => {
             console.log(`Segue as marcacoes do colaborador ${colaborador.nome}`)
             console.table(colaborador.marcacoes, [`dia`, `hora`])
          })
          alert(`Lista apresentada no console!`)
          break;
      case 9:
          alert(`Ate logo`)
          return;
      default:
          alert(`Opcao invalida!`)
   }
   menu()
}

menu();