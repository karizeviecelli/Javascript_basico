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