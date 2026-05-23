let n1 = 8;
let n2 = 7;
let n3 = 9;
let media = (n1 + n2 + n3) /3;
console.log(media);
 
let numero = 7; 
let resto = numero % 2;
let resultado = resto === 0;
console.log(resultado);

let maiorIdade = true; 
let temIngresso = true;
let podeEntrar = maiorIdade && temIngresso;
console.log(podeEntrar);

let nome = "";
let usuario = nome || "Visitante";
console.log(usuario);

let temperatura = 30; 
let clima = temperatura > 25 ? "Quente" : "Frio";
console.log(clima);

let semParenteses = 5 + 3 * 2; 
let comParenteses = (5 + 3) * 2; 
console.log(semParenteses, comParenteses);