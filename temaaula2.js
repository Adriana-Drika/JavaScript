/*
/*
  1) Uma revendedora de carros possui 10 carros em sua loja.
     O estoque da loja está separado por marcas, modelos e anos de fabricação;
     Da seguinte forma:
     marcas = [ 'Fiat', 'Ford', 'Honda', 'Volkswagen', 'Land', 'BMW', 'Peugeot', 'Renault' ];
     modelos = [ 'Uno', 'Mustang', 'Civic', 'Jetta', 'Rover', 'X5', '208', 'Sandero', 'Duster' ];
     anosFabricacao = [ 2005, 2015, 2018, 2010, 2022, 2022, 2008, 2009, 2007 ];
     
    Saiba que todas as informações se encontram na ordem certa, ou seja:
    A posição zero das marcas condiz com a posição zero dos modelos e o mesmo para o ano de fabricação;
    Ex: marcas[0] = 'Fiat', modelos[0] = 'Uno' e anosFabricacao[0] = 2005 ou seja nas posições zero temos um Fiat Uno do ano de 2005;

    Faça um programa que peça para o usuário informar uma marca e com esse informação o programa imprima no console
    todas as informações referente ao veículo daquela marca;

    Ex: usuarioInformou = 'Land'
        console exibiu => 'Land Rover do ano de 2022'
*/
let  lista_marcas = [ 'Fiat', 'Ford', 'Honda', 'Volkswagen', 'Land', 'BMW', 'Peugeot', 'Renault' ];
let  lista_modelos = [ 'Uno', 'Mustang', 'Civic', 'Jetta', 'Rover', 'X5', '208', 'Sandero', 'Duster' ];
let  lista_anos_fabricacao = [ 2005, 2015, 2018, 2010, 2022, 2022, 2008, 2009, 2007 ];

let marca = prompt("Selecione  uma  marca de carro: \n  Fiat , Ford, Honda, Volkswagen, Land, BMW, Peugeot, Renault  ");

let resultadoPosicao = 0

for(let i = 0; i < 8; i++ ){
    if(marca == lista_marcas[i]){
        resultadoPosicao = i
    }
}


console.log(`Usuário informou = "${marca}" \n
Resultado => "${lista_marcas[resultadoPosicao]}" - "${lista_modelos[resultadoPosicao]}" - "${lista_anos_fabricacao[resultadoPosicao]}"
`)




/*
2) Faça um programa que calcule a soma dos primeiros 50 números pares;
*/
 function somaDosPares(x = 50) {
    let soma = 0;
    for (let i = 0; i <= x; i += 2) soma += i
    return soma;
}
console.log(somaDosPares());



/*
3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;
	 Exiba essa tabuada de forma organizada com os console.logs
*/
let valor;
let n;

valor = prompt("Digite um valor para tabuada: ");

n = parseInt(valor);

while(n<=0){
    valor = prompt("O valor precisa ser maior que zero! Digite um valor para tabuada: ");
    n = parseInt(valor);
}

for(i=0;i<=10;i++){
    console.log(i+" x "+n+" = "+i*n+"<Tabuada>");
}
    
/*
4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;
*/
function passandoNumPares() {
    for (var i = 0; i < 100; i++) {
        if ((i % 2) == 0) {
             console.log('números pares ao quadrado ' + i * i);
        }
    }
}

passandoNumPares();

/*
5) Faça um algoritmo que imprima no console os valores como se fosse um relógio durante 1 minuto;
	Exemplo do console:
	00
	01
	02
	03
	...
	57
	58
	59
	60 (não deve imprimir mais)
*/
let segundo = 0
let timer = setInterval(() => {
    segundo += 1
    console.log("Segundo - "+segundo)
    if(segundo == 60)
        clearInterval(timer);
}, 1000)

/*
6) Pergunte ao usuário se ele quer:
	Inserir número / Finalizar
	Ao selecionar inserir número solicite para o usuário um valor numérico válido
	Ao selecionar finalizar mostre um alerta para o usuário com o resultado da soma de todos os números informados
	Utilize o laço DO...WHILE;

	OBS: façam os devidos tratamentos;
*/
let lista_numeros = []
let opcaoNavegaco = parseInt(prompt("Inserir numero ou finalizar: (0 - Inserir / 1 - Finalizar)"))
do{
    let novo_numero = parseInt(prompt("Inserir numero :"))
    lista_numeros.push(novo_numero)
    opcaoNavegaco = parseInt(prompt("Inserir numero ou finalizar: (0 - Inserir / 1 - Finalizar)"))
}while(opcaoNavegaco < 1)

let soma = 0;
for (let i = 0; i < lista_numeros.length; i++) {
    soma = soma + lista_numeros[i]
}

alert(`O Resultado da soma de todos os números é: ${soma}`)


































