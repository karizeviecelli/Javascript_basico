# Aula 02 – DOM Avançado: Entendendo Cada Função na Prática

## Objetivos da Aula

Nesta aula você aprenderá:

* Como capturar eventos da página.
* Como adicionar e remover classes CSS.
* Como criar elementos usando JavaScript.
* Como remover elementos.
* Como navegar pela árvore DOM.
* Como desenvolver aplicações dinâmicas.

---

# Relembrando o DOM

Imagine que o HTML é uma árvore.

Exemplo:

```html
<body>

    <h1>Título</h1>

    <p>Texto</p>

    <button>Enviar</button>

</body>
```

O navegador transforma isso em:

```text
Document
│
└── body
    │
    ├── h1
    ├── p
    └── button
```

O JavaScript consegue navegar por essa árvore e modificar qualquer elemento.

---

# Eventos

## O que é um evento?

Um evento é uma ação realizada pelo usuário.

Exemplos:

| Evento    | Ação                  |
| --------- | --------------------- |
| click     | Clique                |
| dblclick  | Duplo clique          |
| keyup     | Soltar tecla          |
| keydown   | Pressionar tecla      |
| mouseover | Mouse sobre elemento  |
| mouseout  | Mouse sai do elemento |
| submit    | Envio de formulário   |

---

# addEventListener()

## O que significa?

Tradução:

```text
add = adicionar
event = evento
listener = ouvinte
```

Ou seja:

```text
"Adicione um ouvinte para ficar esperando um evento acontecer."
```

---

## Sintaxe

```javascript
elemento.addEventListener("evento", funcao)
```

---

## Exemplo

HTML

```html
<button id="botao">
Clique Aqui
</button>
```

JavaScript

```javascript
let botao =
document.getElementById("botao");

botao.addEventListener("click", function(){

    alert("Você clicou!");

});
```

---

## O que acontece?

Passo a passo:

```javascript
let botao =
document.getElementById("botao");
```

Procura o botão na página.

---

```javascript
botao.addEventListener(...)
```

Fica observando esse botão.

---

```javascript
"click"
```

O evento observado será um clique.

---

```javascript
function(){

    alert("Você clicou!");

}
```

Código executado quando o clique acontecer.

---

# Outra forma de escrever

```javascript
function mostrarMensagem(){

    alert("Olá!");

}

botao.addEventListener(
    "click",
    mostrarMensagem
);
```

Muito utilizada em projetos maiores.

---

# Eventos de Teclado

HTML

```html
<input id="nome">
```

JavaScript

```javascript
let campo =
document.getElementById("nome");

campo.addEventListener("keyup", function(){

    console.log(campo.value);

});
```

---

## O que é keyup?

```text
key = tecla
up = soltar
```

O evento dispara quando o usuário solta uma tecla.

---

## O que é .value?

Todo input possui um valor.

HTML

```html
<input value="João">
```

JavaScript

```javascript
campo.value
```

Resultado:

```text
João
```

---

# Trabalhando com Classes

Imagine este CSS:

```css
.destaque{

    background: yellow;

}
```

---

# classList

Todo elemento possui uma lista de classes.

HTML

```html
<p class="texto destaque">
Olá
</p>
```

JavaScript

```javascript
elemento.classList
```

Resultado:

```text
texto
destaque
```

---

# classList.add()

## Significado

```text
add = adicionar
```

---

Exemplo

```javascript
document.getElementById("texto")
        .classList.add("destaque");
```

---

O navegador faz:

Antes:

```html
<p id="texto">
Mensagem
</p>
```

Depois:

```html
<p id="texto"
class="destaque">

Mensagem

</p>
```

---

# classList.remove()

## Significado

```text
remove = remover
```

---

Exemplo

```javascript
document.getElementById("texto")
        .classList.remove("destaque");
```

---

Antes:

```html
<p class="destaque">
Mensagem
</p>
```

Depois:

```html
<p>
Mensagem
</p>
```

---

# classList.toggle()

## Significado

```text
toggle = alternar
```

Se existir:

```text
Remove
```

Se não existir:

```text
Adiciona
```

---

Exemplo

```javascript
document.getElementById("texto")
        .classList.toggle("destaque");
```

---

Primeiro clique:

```html
<p class="destaque">
```

Segundo clique:

```html
<p>
```

Terceiro clique:

```html
<p class="destaque">
```

---

# Exemplo Real

Modo Escuro

CSS

```css
.dark{

    background:black;
    color:white;

}
```

JavaScript

```javascript
document.body.classList.toggle("dark");
```

---

O que é document.body?

Significa:

```text
Pegue a tag body da página.
```

Exemplo:

```html
<body>

Toda a página

</body>
```

---

# Criando Elementos

Até agora os elementos já existiam.

Agora vamos criar novos elementos.

---

# createElement()

## Significado

```text
create = criar
element = elemento
```

---

Exemplo

```javascript
let p =
document.createElement("p");
```

Resultado:

```html
<p></p>
```

Foi criado na memória.

Ainda não aparece na página.

---

# Adicionando Conteúdo

```javascript
p.innerText =
"Olá Mundo";
```

Resultado:

```html
<p>Olá Mundo</p>
```

---

# appendChild()

## Significado

```text
append = anexar
child = filho
```

Ou seja:

```text
Adicionar um elemento filho.
```

---

Exemplo

```javascript
document.body.appendChild(p);
```

---

Antes

```html
<body>

</body>
```

Depois

```html
<body>

<p>Olá Mundo</p>

</body>
```

---

# Projeto Mental

Imagine:

```text
BODY
```

é uma caixa.

Quando fazemos:

```javascript
appendChild()
```

Estamos colocando um novo objeto dentro da caixa.

---

# Removendo Elementos

## remove()

Significado:

```text
remove = remover
```

---

HTML

```html
<p id="teste">
Excluir
</p>
```

JavaScript

```javascript
document.getElementById("teste")
        .remove();
```

---

Antes

```html
<p id="teste">
Excluir
</p>
```

Depois

```html
```

Elemento apagado.

---

# Navegando na Árvore DOM

HTML

```html
<div id="caixa">

    <p>Item 1</p>

    <p>Item 2</p>

    <p>Item 3</p>

</div>
```

---

# children

Significado:

```text
children = filhos
```

---

JavaScript

```javascript
let caixa =
document.getElementById("caixa");

console.log(
caixa.children
);
```

Resultado:

```text
[p, p, p]
```

---

# firstElementChild

Significado:

```text
first = primeiro
element = elemento
child = filho
```

---

JavaScript

```javascript
console.log(
caixa.firstElementChild
);
```

Resultado:

```html
<p>Item 1</p>
```

---

# lastElementChild

Significado:

```text
last = último
element = elemento
child = filho
```

---

JavaScript

```javascript
console.log(
caixa.lastElementChild
);
```

Resultado:

```html
<p>Item 3</p>
```

---

# Projeto Completo

## Lista de Tarefas

HTML

```html
<input
type="text"
id="tarefa">

<button id="adicionar">
Adicionar
</button>

<ul id="lista"></ul>
```

---

JavaScript

```javascript
let botao =
document.getElementById("adicionar");

botao.addEventListener(
"click",

function(){

    let texto =
    document.getElementById("tarefa").value;

    let item =
    document.createElement("li");

    item.innerText = texto;

    document.getElementById("lista")
            .appendChild(item);

});
```

---

## Explicação Linha por Linha

```javascript
let texto =
document.getElementById("tarefa").value;
```

Captura o texto digitado.

---

```javascript
let item =
document.createElement("li");
```

Cria um item de lista.

---

```javascript
item.innerText = texto;
```

Coloca o texto dentro do item.

---

```javascript
document.getElementById("lista")
        .appendChild(item);
```

Adiciona o item na lista.

---

# Resumo da Aula

| Função             | O que faz              |
| ------------------ | ---------------------- |
| addEventListener() | Escuta eventos         |
| value              | Captura valor do input |
| classList.add()    | Adiciona classe        |
| classList.remove() | Remove classe          |
| classList.toggle() | Alterna classe         |
| createElement()    | Cria elemento          |
| appendChild()      | Adiciona elemento      |
| remove()           | Remove elemento        |
| children           | Lista os filhos        |
| firstElementChild  | Primeiro filho         |
| lastElementChild   | Último filho           |

## Regra de Ouro

Sempre que estiver trabalhando com DOM, pense nestas 4 perguntas:

1. **Qual elemento quero acessar?**
2. **Qual evento vai disparar a ação?**
3. **O que quero alterar?**
4. **Como o usuário verá a mudança na página?**

Esse raciocínio é exatamente o mesmo utilizado em sistemas reais como redes sociais, lojas virtuais, sistemas bancários e plataformas de ensino.
