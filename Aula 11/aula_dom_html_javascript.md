# Aula: DOM (Document Object Model) com HTML e JavaScript

## 1. Objetivo da aula

Nesta aula, você vai aprender como o **JavaScript consegue acessar e modificar uma página HTML**.

Ao final da aula, você será capaz de:

- Entender o que é o DOM.
- Selecionar elementos HTML com JavaScript.
- Alterar textos, estilos e imagens.
- Capturar valores digitados pelo usuário.
- Trabalhar com eventos, como clique em botões.
- Criar e remover elementos na página.
- Desenvolver pequenos sistemas interativos usando HTML e JavaScript.

---

## 2. O que é o DOM?

DOM significa **Document Object Model**, ou seja, **Modelo de Objeto do Documento**.

Parece nome de coisa de outro planeta, mas calma: o DOM é simplesmente a forma como o navegador organiza o HTML para que o JavaScript consiga mexer nele.

Imagine que uma página HTML é uma árvore.

Exemplo:

```html
<body>
    <h1>Título da página</h1>
    <p>Este é um parágrafo.</p>
</body>
```

O navegador enxerga essa estrutura mais ou menos assim:

```text
HTML
 └── BODY
      ├── H1
      └── P
```

Cada elemento HTML vira um **objeto** que pode ser acessado pelo JavaScript.

Com isso, podemos mudar o conteúdo da página sem precisar recarregá-la.

---

## 3. Por que aprender DOM?

Sem o DOM, uma página HTML seria praticamente estática.

Com o DOM, conseguimos criar páginas interativas.

Exemplos do que podemos fazer:

- Alterar textos.
- Trocar cores.
- Mostrar e esconder elementos.
- Capturar dados de formulários.
- Criar listas automaticamente.
- Validar campos.
- Fazer calculadoras.
- Criar jogos simples.
- Criar sistemas de cadastro.

Ou seja: o DOM é uma das pontes principais entre **HTML** e **JavaScript**.

---

## 4. Estrutura básica de um arquivo HTML com JavaScript

Antes de começar, observe uma estrutura básica:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Aula de DOM</title>
</head>
<body>

    <h1 id="titulo">Minha primeira página com DOM</h1>

    <button onclick="alterarTitulo()">Clique aqui</button>

    <script>
        function alterarTitulo() {
            document.getElementById("titulo").innerText = "Título alterado com JavaScript!";
        }
    </script>

</body>
</html>
```

Nesse exemplo:

- O HTML cria o título e o botão.
- O JavaScript cria uma função.
- O botão chama a função quando é clicado.
- A função altera o texto do título.

---

## 5. Selecionando elementos HTML

Para modificar um elemento, primeiro precisamos encontrá-lo dentro da página.

O JavaScript oferece várias formas de selecionar elementos.

---

### 5.1 Selecionando pelo ID

O método `getElementById()` busca um elemento pelo seu `id`.

HTML:

```html
<h1 id="titulo">Olá, mundo!</h1>
```

JavaScript:

```javascript
let titulo = document.getElementById("titulo");
console.log(titulo);
```

Explicação:

- `document` representa a página HTML.
- `getElementById("titulo")` procura o elemento com o ID `titulo`.
- O elemento encontrado é guardado na variável `titulo`.

---

### 5.2 Selecionando com querySelector

O `querySelector()` seleciona o primeiro elemento que encontrar.

Ele pode buscar por:

- Tag.
- Classe.
- ID.

Exemplo com classe:

```html
<p class="mensagem">Aprendendo DOM</p>
```

```javascript
let texto = document.querySelector(".mensagem");
console.log(texto);
```

Atenção:

- Para classe usamos ponto: `.mensagem`
- Para ID usamos jogo da velha: `#titulo`
- Para tag usamos o nome direto: `p`, `h1`, `button`

Exemplo com ID:

```javascript
let titulo = document.querySelector("#titulo");
```

Exemplo com tag:

```javascript
let paragrafo = document.querySelector("p");
```

---

### 5.3 Selecionando vários elementos

O `querySelectorAll()` seleciona todos os elementos que combinam com a busca.

HTML:

```html
<p>Item 1</p>
<p>Item 2</p>
<p>Item 3</p>
```

JavaScript:

```javascript
let paragrafos = document.querySelectorAll("p");
console.log(paragrafos);
```

Ele retorna uma lista de elementos.

---

## 6. Alterando conteúdo da página

Depois de selecionar um elemento, podemos modificar seu conteúdo.

---

### 6.1 Usando innerText

O `innerText` altera apenas o texto do elemento.

HTML:

```html
<h1 id="titulo">Texto original</h1>
```

JavaScript:

```javascript
document.getElementById("titulo").innerText = "Novo texto";
```

Resultado na tela:

```text
Novo texto
```

---

### 6.2 Usando innerHTML

O `innerHTML` permite inserir texto com tags HTML.

HTML:

```html
<p id="resultado"></p>
```

JavaScript:

```javascript
document.getElementById("resultado").innerHTML = "<strong>Texto em negrito</strong>";
```

Resultado:

**Texto em negrito**

Use `innerHTML` com cuidado, pois ele interpreta tags HTML.

---

## 7. Alterando estilos com JavaScript

Também podemos alterar o CSS usando JavaScript.

HTML:

```html
<p id="mensagem">Texto de exemplo</p>
```

JavaScript:

```javascript
let mensagem = document.getElementById("mensagem");

mensagem.style.color = "blue";
mensagem.style.fontSize = "30px";
mensagem.style.backgroundColor = "yellow";
```

Explicação:

- `style.color` altera a cor do texto.
- `style.fontSize` altera o tamanho da fonte.
- `style.backgroundColor` altera a cor de fundo.

Observação importante:

No CSS escrevemos:

```css
background-color
```

No JavaScript escrevemos:

```javascript
backgroundColor
```

O JavaScript usa o padrão chamado **camelCase**.

---

## 8. Eventos

Eventos são ações que acontecem na página.

Alguns exemplos:

- Clique em um botão.
- Digitação em um campo.
- Passar o mouse sobre um elemento.
- Carregar a página.
- Enviar um formulário.

O evento mais comum para começar é o clique.

---

### 8.1 Evento onclick

HTML:

```html
<button onclick="mostrarMensagem()">Clique aqui</button>
```

JavaScript:

```javascript
function mostrarMensagem() {
    alert("Você clicou no botão!");
}
```

Quando o usuário clicar no botão, a função `mostrarMensagem()` será executada.

---

## 9. Exemplo prático: Alterando título com botão

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Exemplo DOM</title>
</head>
<body>

    <h1 id="titulo">Título original</h1>

    <button onclick="trocarTitulo()">Trocar título</button>

    <script>
        function trocarTitulo() {
            document.getElementById("titulo").innerText = "Título alterado!";
        }
    </script>

</body>
</html>
```

---

## 10. Capturando valores de campos input

Muitas vezes precisamos pegar o valor digitado pelo usuário.

Para isso usamos `.value`.

HTML:

```html
<input type="text" id="nome" placeholder="Digite seu nome">
<button onclick="mostrarNome()">Mostrar nome</button>
<p id="resultado"></p>
```

JavaScript:

```javascript
function mostrarNome() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerText = "Olá, " + nome + "!";
}
```

Explicação:

- O usuário digita o nome.
- O JavaScript captura o valor do campo.
- O resultado aparece no parágrafo.

---

## 11. Exemplo prático: Verificando maioridade

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Maioridade</title>
</head>
<body>

    <h1>Verificador de idade</h1>

    <input type="number" id="idade" placeholder="Digite sua idade">
    <button onclick="verificarIdade()">Verificar</button>

    <p id="resultado"></p>

    <script>
        function verificarIdade() {
            let idade = Number(document.getElementById("idade").value);

            if (idade >= 18) {
                document.getElementById("resultado").innerText = "Você é maior de idade.";
            } else {
                document.getElementById("resultado").innerText = "Você é menor de idade.";
            }
        }
    </script>

</body>
</html>
```

Observe o uso de `Number()`.

Ele converte o valor digitado para número.

Isso é importante porque valores de input normalmente chegam como texto.

---

## 12. Alterando imagens com DOM

Podemos alterar o atributo `src` de uma imagem.

HTML:

```html
<img id="imagem" src="imagem1.jpg" width="250">
<button onclick="trocarImagem()">Trocar imagem</button>
```

JavaScript:

```javascript
function trocarImagem() {
    document.getElementById("imagem").src = "imagem2.jpg";
}
```

O JavaScript muda o caminho da imagem exibida.

---

## 13. Mostrar e esconder elementos

Podemos usar `style.display`.

HTML:

```html
<p id="texto">Mensagem secreta</p>
<button onclick="esconderTexto()">Esconder</button>
<button onclick="mostrarTexto()">Mostrar</button>
```

JavaScript:

```javascript
function esconderTexto() {
    document.getElementById("texto").style.display = "none";
}

function mostrarTexto() {
    document.getElementById("texto").style.display = "block";
}
```

Explicação:

- `display = "none"` esconde o elemento.
- `display = "block"` mostra o elemento novamente.

---

## 14. Criando elementos com JavaScript

Também podemos criar novos elementos HTML usando JavaScript.

HTML:

```html
<div id="area"></div>
<button onclick="criarParagrafo()">Criar parágrafo</button>
```

JavaScript:

```javascript
function criarParagrafo() {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Este parágrafo foi criado com JavaScript.";

    document.getElementById("area").appendChild(novoParagrafo);
}
```

Explicação:

- `createElement("p")` cria um parágrafo.
- `innerText` adiciona texto ao parágrafo.
- `appendChild()` coloca o parágrafo dentro da página.

---

## 15. Removendo elementos

Podemos remover elementos usando `.remove()`.

HTML:

```html
<p id="aviso">Este texto será removido.</p>
<button onclick="removerAviso()">Remover</button>
```

JavaScript:

```javascript
function removerAviso() {
    document.getElementById("aviso").remove();
}
```

---

## 16. Projeto prático: Calculadora de IMC

Neste projeto, vamos criar uma calculadora simples de IMC.

### Código completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Calculadora de IMC</title>
</head>
<body>

    <h1>Calculadora de IMC</h1>

    <label>Peso:</label>
    <input type="number" id="peso" placeholder="Ex: 70">

    <br><br>

    <label>Altura:</label>
    <input type="number" id="altura" placeholder="Ex: 1.75" step="0.01">

    <br><br>

    <button onclick="calcularIMC()">Calcular</button>

    <p id="resultado"></p>

    <script>
        function calcularIMC() {
            let peso = Number(document.getElementById("peso").value);
            let altura = Number(document.getElementById("altura").value);

            let imc = peso / (altura * altura);

            document.getElementById("resultado").innerText = "Seu IMC é: " + imc.toFixed(2);
        }
    </script>

</body>
</html>
```

---

## 17. Projeto prático: Lista de tarefas simples

Agora vamos criar uma lista onde o usuário pode adicionar tarefas.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Lista de Tarefas</title>
</head>
<body>

    <h1>Minha lista de tarefas</h1>

    <input type="text" id="tarefa" placeholder="Digite uma tarefa">
    <button onclick="adicionarTarefa()">Adicionar</button>

    <ul id="lista"></ul>

    <script>
        function adicionarTarefa() {
            let textoTarefa = document.getElementById("tarefa").value;

            let item = document.createElement("li");
            item.innerText = textoTarefa;

            document.getElementById("lista").appendChild(item);

            document.getElementById("tarefa").value = "";
        }
    </script>

</body>
</html>
```

### Melhorando com botão de excluir

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Lista de Tarefas</title>
</head>
<body>

    <h1>Minha lista de tarefas</h1>

    <input type="text" id="tarefa" placeholder="Digite uma tarefa">
    <button onclick="adicionarTarefa()">Adicionar</button>

    <ul id="lista"></ul>

    <script>
        function adicionarTarefa() {
            let textoTarefa = document.getElementById("tarefa").value;

            if (textoTarefa === "") {
                alert("Digite uma tarefa antes de adicionar.");
                return;
            }

            let item = document.createElement("li");
            item.innerText = textoTarefa + " ";

            let botaoExcluir = document.createElement("button");
            botaoExcluir.innerText = "Excluir";

            botaoExcluir.onclick = function() {
                item.remove();
            };

            item.appendChild(botaoExcluir);
            document.getElementById("lista").appendChild(item);

            document.getElementById("tarefa").value = "";
        }
    </script>

</body>
</html>
```

---

## 18. Resumo dos principais comandos

| Comando | Para que serve |
|---|---|
| `document.getElementById()` | Seleciona um elemento pelo ID |
| `document.querySelector()` | Seleciona o primeiro elemento encontrado |
| `document.querySelectorAll()` | Seleciona vários elementos |
| `.innerText` | Altera ou lê o texto de um elemento |
| `.innerHTML` | Altera ou lê o HTML interno de um elemento |
| `.value` | Captura o valor de um campo input |
| `.style` | Altera o estilo CSS de um elemento |
| `.src` | Altera o caminho de uma imagem |
| `document.createElement()` | Cria um novo elemento HTML |
| `.appendChild()` | Adiciona um elemento dentro de outro |
| `.remove()` | Remove um elemento da página |
| `onclick` | Executa uma função ao clicar |

---

# 19. Exercícios

## Nível 1 — Primeiros passos

### Exercício 1

Crie uma página com:

- Um título.
- Um botão.

Ao clicar no botão, o título deve mudar para:

```text
DOM é incrível!
```

---

### Exercício 2

Crie um parágrafo e um botão.

Ao clicar no botão, a cor do parágrafo deve mudar para azul.

---

### Exercício 3

Crie um texto e um botão.

Ao clicar no botão, o tamanho da fonte deve mudar para `40px`.

---

### Exercício 4

Crie um botão que exiba um `alert` com a mensagem:

```text
Bem-vindo à aula de DOM!
```

---

## Nível 2 — Capturando dados

### Exercício 5

Crie um campo para o usuário digitar o nome.

Ao clicar em um botão, exiba na tela:

```text
Olá, nome_digitado!
```

---

### Exercício 6

Crie um campo para digitar a idade.

Ao clicar em um botão, mostre:

```text
Você é maior de idade.
```

ou

```text
Você é menor de idade.
```

---

### Exercício 7

Crie dois campos numéricos.

Ao clicar em um botão, mostre a soma dos dois números.

---

### Exercício 8

Crie dois campos numéricos e quatro botões:

- Somar.
- Subtrair.
- Multiplicar.
- Dividir.

Cada botão deve mostrar o resultado da operação correspondente.

---

## Nível 3 — Manipulação de elementos

### Exercício 9

Crie um botão chamado `Adicionar item`.

Cada vez que o botão for clicado, um novo item deve aparecer em uma lista.

---

### Exercício 10

Crie uma mensagem na tela e dois botões:

- Esconder.
- Mostrar.

O botão esconder deve ocultar a mensagem.

O botão mostrar deve exibir a mensagem novamente.

---

### Exercício 11

Crie uma imagem e um botão.

Ao clicar no botão, a imagem deve ser trocada por outra.

---

### Exercício 12

Crie um botão para ativar o modo escuro da página.

Ao clicar:

- O fundo deve ficar preto.
- O texto deve ficar branco.

---

## Nível 4 — Desafios

### Exercício 13 — Lista de tarefas

Crie uma lista de tarefas com as seguintes funcionalidades:

- Digitar uma tarefa.
- Adicionar a tarefa na lista.
- Limpar o campo após adicionar.
- Não permitir adicionar tarefa vazia.

---

### Exercício 14 — Lista de tarefas com exclusão

Melhore o exercício anterior adicionando um botão `Excluir` em cada tarefa.

Ao clicar em `Excluir`, apenas aquela tarefa deve ser removida.

---

### Exercício 15 — Cadastro de alunos

Crie uma página de cadastro de alunos contendo:

- Nome.
- Idade.
- Curso.
- Botão cadastrar.

Ao clicar em cadastrar:

1. Capturar os dados digitados.
2. Criar um novo item na tela.
3. Exibir o aluno cadastrado.
4. Limpar os campos.
5. Permitir remover um aluno da lista.

---

## 20. Desafio final

Desenvolva uma página chamada **Sistema de Cadastro de Alunos**.

O sistema deve conter:

- Campo para nome.
- Campo para idade.
- Campo para curso.
- Botão cadastrar.
- Lista de alunos cadastrados.
- Botão excluir para cada aluno.
- Validação para não permitir campos vazios.

### Exemplo de saída esperada

```text
Nome: Ana | Idade: 18 | Curso: Desenvolvimento de Sistemas [Excluir]
Nome: João | Idade: 20 | Curso: Administração [Excluir]
```

---

## 21. Avaliação

A atividade pode ser avaliada considerando:

| Critério | Pontuação sugerida |
|---|---:|
| Estrutura correta do HTML | 2 pontos |
| Uso correto de IDs e seleção no DOM | 2 pontos |
| Captura correta dos valores | 2 pontos |
| Criação dinâmica dos elementos | 2 pontos |
| Botão de exclusão funcionando | 1 ponto |
| Organização e clareza do código | 1 ponto |

Total: **10 pontos**

---

## 22. Conclusão

O DOM permite que o JavaScript converse com o HTML.

Com ele, uma página deixa de ser parada e passa a responder às ações do usuário.

Aprender DOM é um passo essencial para criar páginas interativas, formulários inteligentes, sistemas simples e aplicações web completas.

Em resumo:

```text
HTML cria a estrutura.
CSS cuida da aparência.
JavaScript, com DOM, dá vida à página.
```

Agora é praticar, errar, corrigir e testar. Programação é isso: conversa séria com o computador, mas com bastante tentativa e erro no meio do caminho.
