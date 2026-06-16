/* 
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

// 2 //
let valor = parseFloat(prompt("Digite um número: "));

if (valor > 0) {
    console.log("O valor é POSITIVO.");
} else if (valor < 0) {
    console.log("O valor é NEGATIVO.");
} else {
    console.log("O valor é ZERO (neutro).");
}

// 3 //
let entradaEx3 = "m"; // Alterado para não dar conflito
let sexo = entradaEx3.toUpperCase();

switch (sexo) {
    case "F": console.log("F → Feminino"); break;
    case "M": console.log("M → Masculino"); break;
    default: console.log("Sexo inválido");
}

// 4 //
let entradaEx4 = "A"; // Alterado para não dar conflito
let letra = entradaEx4.toLowerCase();

switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log(`"${entradaEx4}" é uma vogal.`);
        break;
    default:
        console.log(`"${entradaEx4}" é uma consoante.`);
}

// 5 //
let nota1 = 8.5;
let nota2 = 7.5;
let media = (nota1 + nota2) / 2;

console.log(`--- Exercício 5 ---`);
console.log(`Média do aluno: ${media}`);

if (media === 10) {
    console.log("Aprovado com Distinção");
} else if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

console.log(`\n--- Exercício 6 ---`);
// 6 //
let n1 = parseFloat(prompt("Digite o primeiro número para o Ex 6: "));
let n2 = parseFloat(prompt("Digite o segundo número para o Ex 6: "));
let n3 = parseFloat(prompt("Digite o terceiro número para o Ex 6: "));

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
let num9_1 = 15; // Alterado o nome para evitar conflito com o Ex 6
let num9_2 = 42;
let num9_3 = 23;
let aux; 

if (num9_2 > num9_1) { aux = num9_1; num9_1 = num9_2; num9_2 = aux; }
if (num9_3 > num9_1) { aux = num9_1; num9_1 = num9_3; num9_3 = aux; }
if (num9_3 > num9_2) { aux = num9_2; num9_2 = num9_3; num9_3 = aux; }

console.log("Ordem decrescente:", num9_1, num9_2, num9_3);

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

// 12 //
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
*/


// questao 13, dia correspondente da semana 1 a 7//
let diaNum = parseInt(prompt("digite um número (1-7) para o dia da semana:"));
switch (diaNum) {
    case 1: console.log("domingo"); break;
    case 2: console.log("segunda"); break;
    case 3: console.log("terça"); break;
    case 4: console.log("quarta"); break;
    case 5: console.log("1uinta"); break;
    case 6: console.log("sexta"); break;
    case 7: console.log("sábado"); break;
    default: console.log("valor inválido");
}


/*
// 14 //
let notaA = parseFloat(prompt("Nota 1:"));
let notaB = parseFloat(prompt("Nota 2:"));
let mediaFinal = (notaA + notaB) / 2;
let conceito = "";

if (mediaFinal >= 9) conceito = "A";
else if (mediaFinal >= 7.5) conceito = "B";
else if (mediaFinal >= 6) conceito = "C";
else if (mediaFinal >= 4) conceito = "D";
else conceito = "E";

let situacao = (conceito === "A" || conceito === "B" || conceito === "C") ? "APROVADO" : "REPROVADO";
console.log(`Notas: ${notaA}, ${notaB} | Média: ${mediaFinal} | Conceito: ${conceito} | Status: ${situacao}`);

// 15 //
let l1 = parseFloat(prompt("Lado 1:"));
let l2 = parseFloat(prompt("Lado 2:"));
let l3 = parseFloat(prompt("Lado 3:"));

if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
    if (l1 === l2 && l2 === l3) console.log("Triângulo Equilátero");
    else if (l1 === l2 || l1 === l3 || l2 === l3) console.log("Triângulo Isósceles");
    else console.log("Triângulo Escaleno");
} else {
    console.log("Os lados não formam um triângulo.");
}

// 16 //
let vA = parseFloat(prompt("Valor de a:"));
if (vA === 0) {
    console.log("Não é equação de segundo grau.");
} else {
    let vB = parseFloat(prompt("Valor de b:"));
    let vC = parseFloat(prompt("Valor de c:"));
    let delta = (vB ** 2) - (4 * vA * vC);
    if (delta < 0) console.log("Não possui raízes reais.");
    else if (delta === 0) console.log("Raiz única: " + (-vB / (2 * vA)));
    else {
        let r1 = (-vB + Math.sqrt(delta)) / (2 * vA);
        let r2 = (-vB - Math.sqrt(delta)) / (2 * vA);
        console.log(`Raízes: ${r1.toFixed(2)} e ${r2.toFixed(2)}`);
    }
}

// 17 //
let ano = parseInt(prompt("Digite um ano:"));
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log("É bissexto.");
} else {
    console.log("Não é bissexto.");
}

// 18 //
let pNum = parseInt(prompt("Número inteiro:"));
console.log(pNum % 2 === 0 ? "Par" : "Ímpar");

// 19 //
let caracNum = parseFloat(prompt("Digite um número:"));
let pOuI = caracNum % 2 === 0 ? "Par" : "Ímpar";
let posNeg = caracNum >= 0 ? "Positivo" : "Negativo";
console.log(`O número ${caracNum} é ${pOuI} e ${posNeg}.`);

// 20 //
let score = 0;
if (prompt("Telefonou para a vítima? (s/n)").toLowerCase() === "s") score++;
if (prompt("Esteve no local do crime? (s/n)").toLowerCase() === "s") score++;
if (prompt("Mora perto da vítima? (s/n)").toLowerCase() === "s") score++;
if (prompt("Devia para a vítima? (s/n)").toLowerCase() === "s") score++;
if (prompt("Já trabalhou com a vítima? (s/n)").toLowerCase() === "s") score++;

if (score === 2) console.log("Suspeita");
else if (score === 3 || score === 4) console.log("Cúmplice");
else if (score === 5) console.log("Assassino");
else console.log("Inocente");

// 21 //
let numA = parseFloat(prompt("Número A:"));
let numB = parseFloat(prompt("Número B:"));
console.log(`Maior: ${Math.max(numA, numB)} | Menor: ${Math.min(numA, numB)}`);

// 22 //
let i1 = parseInt(prompt("Inteiro 1:"));
let i2 = parseInt(prompt("Inteiro 2:"));
let i3 = parseInt(prompt("Inteiro 3:"));
console.log(`Maior: ${Math.max(i1, i2, i3)}, Menor: ${Math.min(i1, i2, i3)}`);

// 23 //
let cNum = parseInt(prompt("Número para teste Par/Ímpar (Exercício C):"));
if (cNum % 2 === 0) console.log("Par");
else console.log("Ímpar");

// 24 //
let raio = parseFloat(prompt("Raio da circunferência:"));
console.log(`Diâmetro: ${2 * raio}`);
console.log(`Comprimento: ${(2 * Math.PI * raio).toFixed(2)}`);
console.log(`Área: ${(Math.PI * (raio ** 2)).toFixed(2)}`);

// 25 //
let idadeDoador = parseInt(prompt("Sua idade:"));
if (idadeDoador >= 18 && idadeDoador <= 67) {
    console.log("Pode doar sangue.");
} else {
    console.log("Não pode doar sangue.");
}
*/