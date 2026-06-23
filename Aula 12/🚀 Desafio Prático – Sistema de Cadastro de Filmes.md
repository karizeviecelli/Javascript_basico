# 🚀 Desafio Prático – Sistema de Cadastro de Filmes

## Objetivo

Você foi contratado para desenvolver uma página web que permita cadastrar filmes favoritos dos usuários.

Utilize **HTML, CSS e JavaScript**, aplicando os conceitos aprendidos até agora:

* DOM
* Eventos
* Inputs
* Botões
* `getElementById()`
* `addEventListener()`
* `createElement()`
* `appendChild()`
* `remove()`
* `classList()`
* Manipulação de texto e estilos

---

# 🎬 Situação-Problema

Uma locadora deseja criar uma página onde os clientes possam cadastrar seus filmes favoritos.

Cada filme cadastrado deverá exibir:

* Nome do filme
* Gênero
* Ano de lançamento

Além disso, o usuário poderá remover qualquer filme da lista.

---

# 📋 Requisitos

## Parte 1 – Formulário

Crie os seguintes campos:

```text
Nome do Filme
Gênero
Ano de Lançamento
```

E um botão:

```text
Cadastrar Filme
```

---

## Parte 2 – Cadastro

Ao clicar em **Cadastrar Filme**:

* Capturar os valores digitados.
* Criar dinamicamente um card utilizando JavaScript.
* Exibir os dados na tela.

Exemplo:

```text
-----------------------
🎬 Vingadores
🎭 Ação
📅 2019

[Excluir]
-----------------------
```

---

## Parte 3 – Exclusão

Cada card deve possuir um botão:

```text
Excluir
```

Ao clicar:

* O card deve ser removido da página.

---

## Parte 4 – Validação

Se algum campo estiver vazio:

Exibir:

```text
Preencha todos os campos!
```

---

# ⭐ Desafio Extra 1

Adicionar uma classe CSS quando o filme for cadastrado.

Exemplo:

```css
.filme {
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
}
```

Aplicar usando:

```javascript
classList.add()
```

---

# ⭐⭐ Desafio Extra 2

Criar um botão:

```text
Modo Escuro
```

Ao clicar:

* Fundo preto
* Texto branco

Utilize:

```javascript
classList.toggle()
```

---

# ⭐⭐⭐ Desafio Extra 3

Adicionar um contador:

```text
Filmes cadastrados: 3
```

O contador deve:

* Aumentar ao cadastrar.
* Diminuir ao excluir.

---

# 🏆 Desafio Master

Transforme o cadastro em um sistema de séries.

Adicione:

```text
Nome
Gênero
Temporadas
Status
```

Status:

```text
Assistindo
Concluída
Pausada
```

Utilize um:

```html
<select>
```

para escolher o status.

---

# 💡 Dicas

### Criar elementos

```javascript
let div = document.createElement("div");
```

---

### Adicionar conteúdo

```javascript
div.innerHTML = "<h3>Filme</h3>";
```

---

### Adicionar à página

```javascript
container.appendChild(div);
```

---

### Remover elemento

```javascript
div.remove();
```

---

### Capturar valor

```javascript
let nome =
document.getElementById("nome").value;
```

---

# 📌 Critérios de Avaliação

| Critério                   | Pontos |
| -------------------------- | ------ |
| Estrutura HTML correta     | 2      |
| Captura dos dados          | 2      |
| Uso do DOM                 | 2      |
| Criação dinâmica dos cards | 2      |
| Exclusão dos cards         | 1      |
| Organização do código      | 1      |

**Total: 10 pontos**

---

# 🎯 Missão Final

Ao concluir o desafio, seu sistema deve permitir:

✅ Cadastrar filmes

✅ Exibir filmes na tela

✅ Remover filmes

✅ Validar campos

✅ Utilizar DOM para manipular a página

✅ Utilizar eventos para interação do usuário

Este desafio reúne praticamente tudo o que foi aprendido até agora em HTML, CSS, JavaScript e DOM. Ele é muito parecido com a lógica utilizada em sistemas reais de cadastro.
