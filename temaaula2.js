/*
  1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
    Esse funcionário foi contratado em 2013, com salário inicial de R$1000,00;
    A cada ano o funcionário recebe um aumento salarial de 1,5%;

    A partir de 2017 em diante, os aumentos salariais passaram a ser o dobro do percentual do ano anterior
    Faça um programa que determine e imprima o salário desse funcionário com o passar dos anos até o ano atual,
    Imprima o percentual de aumento com o passar dos anos
    E imprima o percentual de aumento total que o salário dele teve em comparação à 2013;
    
    OBS: Os salários serão os seguintes, 1000, 1015, 1030.22, 1045.68, 1077.05, 1141.67, 1278.67 e assim por diante...
*/


/*
2) Faça um programa que calcule a soma dos primeiros 50 números pares;
*/
 function somaDosPares(x) {
    let soma = 0;
    for (let i = 0; i <= x; i += 2) soma += i
    return soma;
}
console.log(somaDosPares(50));


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

/*
6) Pergunte ao usuário se ele quer:
	Inserir número / Finalizar
	Ao selecionar inserir número solicite para o usuário um valor numérico válido
	Ao selecionar finalizar mostre um alerta para o usuário com o resultado da soma de todos os números informados
	Utilize o laço DO...WHILE;

	OBS: façam os devidos tratamentos;
*/
let selecionarOpcao = 

const contratadoEm = 2013;
const anoAtual = 2022;

const salarioInicial = 1000;
let salario = salarioInicial;
let percentualAumento = 1.5 / 100; // Ou 0.015, mesma coisa

console.log(`Ano atual: 2013`);
console.log(`O salário atual é: R$${salario.toFixed(2)}`);

for(let ano = contratadoEm + 1; ano <= anoAtual; ano++) {

    if(ano >= 2017) {
        percentualAumento = percentualAumento * 2;
        // OU percentualAumento *= 2;
    }

    salario = salario + (salario * percentualAumento);    
    // OU salario = salario * (percentualAumento + 1)
    // OU salario *= (percentualAumento + 1)

    console.log(`\n\nAno atual: ${ano}`);
    console.log(`O percentual de aumento foi: ${percentualAumento * 100}%`);
    console.log(`O salário atual é: R$${salario.toFixed(2)}`);
}

const percentualDeAumentoTotal = ((salario / salarioInicial) * 100);
console.log(`\n\nEm comparação ao seu salário inicial, você teve um aumento de ${percentualDeAumentoTotal.toFixed(2)}%`);
