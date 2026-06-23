# 🧠 Mapa Mental dos Principais Elementos HTML dentro do DOM

```text
Document
│
└── html
    │
    ├── head
    │   │
    │   ├── title
    │   ├── meta
    │   ├── link
    │   ├── style
    │   └── script
    │
    └── body
        │
        ├── Estrutura
        │   │
        │   ├── header
        │   ├── nav
        │   ├── main
        │   ├── section
        │   ├── article
        │   ├── aside
        │   └── footer
        │
        ├── Títulos
        │   │
        │   ├── h1
        │   ├── h2
        │   ├── h3
        │   ├── h4
        │   ├── h5
        │   └── h6
        │
        ├── Textos
        │   │
        │   ├── p
        │   ├── span
        │   ├── strong
        │   ├── em
        │   └── br
        │
        ├── Formulários
        │   │
        │   ├── form
        │   ├── input
        │   ├── textarea
        │   ├── select
        │   ├── option
        │   ├── label
        │   └── button
        │
        ├── Listas
        │   │
        │   ├── ul
        │   ├── ol
        │   └── li
        │
        ├── Mídias
        │   │
        │   ├── img
        │   ├── video
        │   ├── audio
        │   └── iframe
        │
        ├── Tabelas
        │   │
        │   ├── table
        │   ├── thead
        │   ├── tbody
        │   ├── tr
        │   ├── th
        │   └── td
        │
        └── Containers
            │
            ├── div
            └── span
```

---

# Exemplo Visual do DOM

HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Minha Página</title>
</head>
<body>

    <h1>Título Principal</h1>

    <p>Parágrafo de exemplo</p>

    <button>Clique Aqui</button>

</body>
</html>
```

Árvore DOM:

```text
Document
│
└── html
    │
    ├── head
    │   └── title
    │       └── "Minha Página"
    │
    └── body
        │
        ├── h1
        │   └── "Título Principal"
        │
        ├── p
        │   └── "Parágrafo de exemplo"
        │
        └── button
            └── "Clique Aqui"
```

---

# Os Elementos Mais Utilizados com JavaScript

| Elemento         | Função                |
| ---------------- | --------------------- |
| `div`            | Container genérico    |
| `span`           | Container para textos |
| `p`              | Parágrafo             |
| `h1-h6`          | Títulos               |
| `input`          | Entrada de dados      |
| `button`         | Botões                |
| `img`            | Imagens               |
| `a`              | Links                 |
| `ul`, `ol`, `li` | Listas                |
| `table`          | Tabelas               |
| `form`           | Formulários           |

---

# Exemplo de Manipulação no DOM

HTML:

```html
<h1 id="titulo">Bem-vindo</h1>

<button onclick="alterarTitulo()">
Alterar
</button>
```

JavaScript:

```javascript
function alterarTitulo() {

    document.getElementById("titulo")
            .innerText = "DOM em ação!";
}
```

Fluxo:

```text
Usuário clica no botão
         ↓
Evento onclick
         ↓
JavaScript executa função
         ↓
DOM localiza o H1
         ↓
Texto é alterado
         ↓
Página atualizada
```

---

# Analogia para os alunos

Imagine uma escola:

```text
Escola
│
├── Direção
├── Secretaria
├── Sala 1
├── Sala 2
├── Laboratório
└── Biblioteca
```

No DOM:

```text
Document
│
├── Header
├── Menu
├── Main
├── Formulário
└── Footer
```

O JavaScript funciona como um funcionário que consegue entrar em qualquer sala da escola e modificar o que estiver lá dentro.

Por isso o DOM é chamado de **modelo de objetos do documento**: ele transforma toda a página HTML em objetos que podem ser acessados e modificados pelo JavaScript.
