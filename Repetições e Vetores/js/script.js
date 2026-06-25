/*for(let i = 1; i <= 10; i++){
    console.log(i); //contagem de 1 a 10
}

for(let i = 0; i <= 20; i++){
    if(i % 2 === 0){  //apenas numeros pares
        console.log(i);
    }
} 

for(let i = 5; i >=0; i --){ //contagem regressiva 0 a 5
    console.log(i);
}


let numero = 9;

for(let i = 1; i <= 10; i++){
    console.log(numero + " x " + i + " = " + (numero * i));
}


let bateria = 100; 

while(bateria > 0){
    console.log("bateria: " + bateria + "%");
    bateria -= 20;
}

let senha = "";

while(senha !== "123"){
    senha = prompt("Digite a senha:");
}

alert("Acesso LIBERADO!");
     

let energia = 100;

while(energia > 0){
    console.log("Energia: " + energia);
    energia -= 10;
}
console.log("Energia: " + energia); 

let opcao; 

do {
    opcao = prompt(
        "Escolha uma opção: " +
        "1 - Jogar " +
        "2 - Ranking " +
        "3 - Sair"
    );

    switch (opcao) {
        case "1":
            alert("iniciando o jogo..");
            break;
        case "2":
            alert("exibindo o ranking..");
            break;
        case "3":
            break;
    }
} while (opcao !== "3");


alert("saindo do programa. até mais!"); 
*/

let filmes = [
    "filme 1",
    "filme 2",
    "filme 3",
    "filme 4",
    "filme 5",
];

for(let i = 0; i < filmes.length; i++){
    console.log(filmes,[i]);
}
