
# Aula 06 – JavaScript: Repetições e Vetores

## 🎯 O que você vai aprender nesta aula?

Ao final desta aula você será capaz de:

✅ Utilizar o `for`

✅ Utilizar o `while`

✅ Utilizar o `do while`

✅ Criar e manipular vetores (arrays)

✅ Percorrer listas de dados

✅ Resolver problemas utilizando repetição

✅ Desenvolver pequenos sistemas usando os conceitos aprendidos

---

# 🚀 Antes de começar...

Pense na seguinte situação:

Você precisa mostrar a mensagem:

```javascript
console.log("Bem-vindo!");
```

100 vezes.

Você escreveria isso?

```javascript
console.log("Bem-vindo!");
console.log("Bem-vindo!");
console.log("Bem-vindo!");
console.log("Bem-vindo!");
console.log("Bem-vindo!");
...
```

Provavelmente não.

Além de demorado, seria um desperdício de tempo.

Para resolver esse problema existem as **estruturas de repetição**.

---

# 🔄 O que é repetição?

Repetição é quando pedimos para o computador executar uma mesma tarefa várias vezes.

Pense em um jogo.

Quando você está jogando, o personagem continua andando, pulando e verificando colisões dezenas de vezes por segundo.

O programador não escreveu o código milhares de vezes.

Ele escreveu uma vez e utilizou uma estrutura de repetição.

---

# 🎮 FOR

O `for` é utilizado quando sabemos quantas vezes queremos repetir uma tarefa.

## Estrutura

```javascript
for(inicio; condicao; incremento){
    // código
}
```

---

## Exemplo 1

Mostrar os números de 1 até 5.

```javascript
for(let i = 1; i <= 5; i++){
    console.log(i);
}
```

Resultado:

```text
1
2
3
4
5
```

---

## Entendendo passo a passo

```javascript
for(let i = 1; i <= 5; i++)
```

Significa:

```text
Comece em 1
Enquanto for menor ou igual a 5
Aumente de 1 em 1
```

---

## Visualizando

```text
Volta 1 → i = 1
Volta 2 → i = 2
Volta 3 → i = 3
Volta 4 → i = 4
Volta 5 → i = 5
```

Fim da repetição.

---

# 🚀 Desafio 1

Crie um programa que mostre:

```text
1
2
3
4
5
6
7
8
9
10
```

---

# 🚀 Desafio 2

Mostre apenas os números pares de 0 até 20.

Resultado esperado:

```text
0
2
4
6
8
10
12
14
16
18
20
```

---

# 🚀 Desafio 3

Crie uma contagem regressiva.

Resultado esperado:

```text
5
4
3
2
1
🚀 LANÇAMENTO!
```

---

# 🎮 Aplicação prática: Tabuada

Vamos gerar automaticamente a tabuada do número 7.

```javascript
let numero = 7;

for(let i = 1; i <= 10; i++){
    console.log(numero + " x " + i + " = " + (numero * i));
}
```

Resultado:

```text
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
```

---

# 🔄 WHILE

O `while` é utilizado quando não sabemos quantas vezes uma repetição acontecerá.

## Estrutura

```javascript
while(condicao){
    // código
}
```

---

## Exemplo

```javascript
let bateria = 100;

while(bateria > 0){
    console.log("Bateria: " + bateria + "%");
    bateria -= 20;
}
```

Resultado:

```text
Bateria: 100%
Bateria: 80%
Bateria: 60%
Bateria: 40%
Bateria: 20%
```

---

## Como funciona?

Enquanto a condição for verdadeira:

```javascript
bateria > 0
```

o bloco continuará executando.

---

# 🎮 Exemplo: Sistema de Senha

Imagine que o usuário precisa acertar uma senha.

```javascript
let senha = "";

while(senha !== "123"){
    senha = prompt("Digite a senha:");
}

alert("Acesso liberado!");
```

---

## Por que usar while?

Porque não sabemos quantas tentativas o usuário fará.

Pode acertar na primeira.

Pode errar dez vezes.

---

# 🚀 Desafio 4

Crie um programa que:

- Comece com energia igual a 100.
- Diminua 10 pontos por rodada.
- Mostre a energia até chegar a zero.

---

# 🔄 DO WHILE

O `do while` é parecido com o `while`.

A diferença é que ele executa pelo menos uma vez.

---

## Estrutura

```javascript
do{

}while(condicao);
```

---

## Exemplo

```javascript
let credito = 0;

do{
    console.log("Tentando jogar...");
}while(credito > 0);
```

Resultado:

```text
Tentando jogar...
```

Mesmo sem crédito, ele executou uma vez.

---

## Comparando

### While

Primeiro verifica.

Depois executa.

```javascript
while(condicao){
}
```

---

### Do While

Primeiro executa.

Depois verifica.

```javascript
do{

}while(condicao);
```

---

# 🚀 Desafio 5

Crie um menu:

```text
1 - Jogar
2 - Ranking
3 - Sair
```

Utilize `do while`.

O menu deve continuar aparecendo até que a opção 3 seja escolhida.

---

# 📦 Vetores (Arrays)

Agora imagine que você precisa armazenar as notas de 30 alunos.

Você faria isso?

```javascript
let nota1;
let nota2;
let nota3;
...
```

Claro que não.

Para isso utilizamos vetores.

---

# 🎒 O que é um vetor?

Um vetor é uma variável capaz de armazenar vários valores.

Exemplo:

```javascript
let frutas = [
    "Maçã",
    "Banana",
    "Uva",
    "Morango"
];
```

---

# 📍 Índices

Cada posição possui um número.

```text
0 → Maçã
1 → Banana
2 → Uva
3 → Morango
```

Atenção:

⚠️ Em JavaScript a contagem começa em zero.

---

# 🎮 Acessando elementos

```javascript
let frutas = [
    "Maçã",
    "Banana",
    "Uva"
];

console.log(frutas[0]);
```

Resultado:

```text
Maçã
```

---

# ➕ Adicionando elementos

```javascript
let frutas = [];

frutas.push("Maçã");
frutas.push("Banana");
```

Resultado:

```javascript
["Maçã", "Banana"]
```

---

# 📏 Descobrindo o tamanho

```javascript
let frutas = [
    "Maçã",
    "Banana",
    "Uva"
];

console.log(frutas.length);
```

Resultado:

```text
3
```

---

# 🔄 Percorrendo um vetor

Imagine uma playlist.

```javascript
let playlist = [
    "Música 1",
    "Música 2",
    "Música 3"
];
```

Queremos mostrar todas as músicas.

```javascript
for(let i = 0; i < playlist.length; i++){
    console.log(playlist[i]);
}
```

Resultado:

```text
Música 1
Música 2
Música 3
```

---

# 🎮 Exemplo: Lista de Jogos

```javascript
let jogos = [
    "Minecraft",
    "Valorant",
    "Fortnite",
    "Rocket League"
];

for(let i = 0; i < jogos.length; i++){
    console.log(jogos[i]);
}
```

---

# 🚀 Desafio 6

Crie um vetor contendo:

```text
5 filmes
```

Mostre todos utilizando um `for`.

---

# 🚀 Desafio 7

Crie um vetor com as notas:

```javascript
[7, 8, 10, 5]
```

Calcule a soma.

Resultado esperado:

```text
30
```

---

# 🚀 Desafio 8

Utilizando o mesmo vetor, calcule a média.

Resultado esperado:

```text
7.5
```

---

# 🚀 Desafio 9

Crie um vetor com idades:

```javascript
[15, 18, 22, 13, 30]
```

Mostre a maior idade.

---

# 🚀 Desafio 10

Crie um vetor com preços:

```javascript
[10.50, 25.00, 8.99, 12.75]
```

Mostre o menor preço.

---

# 🏆 Projeto Final da Aula

Você irá desenvolver um sistema de ranking de jogadores.

---

## Requisitos

Cadastrar:

- Nome do jogador
- Pontuação

Armazenar em vetores.

Exibir todos os jogadores cadastrados.

---

## Exemplo

```javascript
let jogadores = [];
let pontos = [];
```

---

## Cadastro

```javascript
for(let i = 0; i < 3; i++){

    let nome = prompt("Digite o nome:");

    let pontuacao = Number(
        prompt("Digite a pontuação:")
    );

    jogadores.push(nome);
    pontos.push(pontuacao);
}
```

---

## Exibição

```javascript
for(let i = 0; i < jogadores.length; i++){

    console.log(
        jogadores[i] +
        " - " +
        pontos[i]
    );
}
```

---

# 📝 Resumo da Aula

## FOR

Utilizado quando sabemos quantas vezes queremos repetir.

```javascript
for(...)
```

---

## WHILE

Utilizado quando não sabemos quantas repetições acontecerão.

```javascript
while(...)
```

---

## DO WHILE

Executa pelo menos uma vez.

```javascript
do{

}while(...);
```

---

## ARRAY

Armazena vários valores.

```javascript
let nomes = [];
```

---

## PUSH

Adiciona um item ao vetor.

```javascript
nomes.push("Ana");
```

---

## LENGTH

Retorna o tamanho do vetor.

```javascript
nomes.length
```

---

# 💡 Reflexão Final

Sempre que você perceber que está escrevendo o mesmo código várias vezes, faça a seguinte pergunta:

> Será que um laço de repetição pode resolver isso?

E quando precisar armazenar vários valores semelhantes:

> Será que um vetor pode organizar isso melhor?

Essas duas ferramentas são fundamentais para praticamente qualquer sistema, jogo, aplicativo ou site que você desenvolverá daqui para frente.
