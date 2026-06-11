
// 1 //
let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));


if (numero1 > numero2) {
    console.log(`O maior número é: ${numero1}`);
} else if (numero2 > numero1) {
    console.log(`O maior número é: ${numero2}`);
} else {
    console.log("Os dois números são iguais!");
}

// 2//
let valor = parseFloat(prompt("Digite um número: "));

if (valor > 0) {
    console.log("O valor é POSITIVO.");
} else if (valor < 0) {
    console.log("O valor é NEGATIVO.");
} else {
    console.log("O valor é ZERO (neutro).");
}

//3//
let entrada = "m";
let sexo = entrada.toUpperCase();

switch (sexo) {
    case "F":
        console.log("F → Feminino");
        break;
    case "M":
        console.log("M → Masculino");
        break;
    default:
        console.log("Sexo inválido");
}

//4//
let entrada = "A";
let letra = entrada.toLowerCase();

switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log(`"${entrada}" é uma vogal.`);
        break;
    default:
        console.log(`"${entrada}" é uma consoante.`);
}

// 5
let nota1 = 8.5;
let nota2 = 7.5;
let media = (nota1 + nota2) / 2;

console.log(`Média do aluno: ${media}`);

if (media === 10) {
    console.log("Aprovado com Distinção");
} else if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 6 //
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
let n3 = parseFloat(prompt("Digite o terceiro número: "));

if (n1 >= n2 && n1 >= n3) {
    console.log(`O maior número é: ${n1}`);
} else if (n2 >= n1 && n2 >= n3) {
    console.log(`O maior número é: ${n2}`);
} else {
    console.log(`O maior número é: ${n3}`);
} 
// 7 //
let v1 = parseFloat(prompt("Digite o primeiro valor: "));
let v2 = parseFloat(prompt("Digite o segundo valor: "));
let v3 = parseFloat(prompt("Digite o terceiro valor: "));

let maior = Math.max(v1, v2, v3);
let menor = Math.min(v1, v2, v3);

console.log(`Dos números digitados:`);
console.log(`O MAIOR é: ${maior}`);
console.log(`O MENOR é: ${menor}`); 

// 8 //
let p1 = parseFloat(prompt("Digite o preço do primeiro produto: "));
let p2 = parseFloat(prompt("Digite o preço do segundo produto: "));
let p3 = parseFloat(prompt("Digite o preço do terceiro produto: "));

if (p1 <= p2 && p1 <= p3) {
    console.log(`Você deve comprar o primeiro produto, pois custa R$ ${p1.toFixed(2)}`);
} else if (p2 <= p1 && p2 <= p3) {
    console.log(`Você deve comprar o segundo produto, pois custa R$ ${p2.toFixed(2)}`);
} else {
    console.log(`Você deve comprar o terceiro produto, pois custa R$ ${p3.toFixed(2)}`);
}


// 9 //
let n1 = 15;
let n2 = 42;
let n3 = 23;

let aux; 

if (n2 > n1) {
    aux = n1;
    n1 = n2;
    n2 = aux;
}

if (n3 > n1) {
    aux = n1;
    n1 = n3;
    n3 = aux;
}

if (n3 > n2) {
    aux = n2;
    n2 = n3;
    n3 = aux;
}

console.log("Ordem decrescente:", n1, n2, n3);

// 10 //
let turno = prompt("Em que turno você estuda? Digite M-Matutino, V-Vespertino ou N-Noturno: ").toUpperCase();

if (turno === "M") {
    console.log("Bom dia!");
} else if (turno === "V") {
    console.log("Boa tarde!");
} else if (turno === "N") {
    console.log("Boa noite!");
} else {
    console.log("Valor inválido");
}

// 11 //
let salarioAtual = parseFloat(prompt("Digite o salário do colaborador: "));
let percentual;

if (salarioAtual <= 280) {
    percentual = 20;
} else if (salarioAtual <= 700) {
    percentual = 15;
} else if (salarioAtual <= 1500) {
    percentual = 10;
} else {
    percentual = 5;
}

let valorDoAumento = salarioAtual * (percentual / 100);
let novoSalario = salarioAtual + valorDoAumento;

console.log(`Salário antes do reajuste: R$ ${salarioAtual.toFixed(2)}`);
console.log(`Percentual aplicado: ${percentual}%`);
console.log(`Valor do aumento: R$ ${valorDoAumento.toFixed(2)}`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);

// 12 usei ia//
let valorHora = parseFloat(prompt("Informe o valor da sua hora trabalhada: "));
let horasMes = parseFloat(prompt("Informe a quantidade de horas trabalhadas no mês: "));

let salarioBruto = valorHora * horasMes;

let percentualIR;
if (salarioBruto <= 900) {
    percentualIR = 0;
} else if (salarioBruto <= 1500) {
    percentualIR = 5;
} else if (salarioBruto <= 2500) {
    percentualIR = 10;
} else {
    percentualIR = 20;
}

let valorIR = salarioBruto * (percentualIR / 100);
let valorINSS = salarioBruto * 0.10;
let valorSindicato = salarioBruto * 0.03;
let valorFGTS = salarioBruto * 0.11;

let totalDescontos = valorIR + valorINSS + valorSindicato;
let salarioLiquido = salarioBruto - totalDescontos;

console.log("-----------------------------------------");
console.log(`Salário Bruto (${valorHora} * ${horasMes}) : R$ ${salarioBruto.toFixed(2)}`);
if (percentualIR === 0) {
    console.log(`(-) IR (Isento)                 : R$ 0.00`);
} else {
    console.log(`(-) IR (${percentualIR}%)                    : R$ ${valorIR.toFixed(2)}`);
}
console.log(`(-) INSS (10%)                  : R$ ${valorINSS.toFixed(2)}`);
console.log(`(-) Sindicato (3%)               : R$ ${valorSindicato.toFixed(2)}`);
console.log(`FGTS (11%)                      : R$ ${valorFGTS.toFixed(2)}`);
console.log(`Total de descontos              : R$ ${totalDescontos.toFixed(2)}`);
console.log(`Salário Líquido                 : R$ ${salarioLiquido.toFixed(2)}`);
console.log("-----------------------------------------");
