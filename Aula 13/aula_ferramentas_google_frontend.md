# Aula: Ferramentas Google para Desenvolvedores Front-end

**Carga horária:** 4 horas  
**Público-alvo:** alunos iniciantes/intermediários em HTML, CSS e JavaScript  
**Formato:** aula prática com demonstração, laboratório e pesquisa orientada  

---

## 1. Contexto da aula

Você faz parte de uma equipe de desenvolvimento Front-end. A empresa recebeu a missão de criar uma landing page para divulgar um produto digital.

Antes de entregar a página ao cliente, a equipe precisa verificar se ela está:

- funcionando corretamente;
- visualmente organizada;
- responsiva;
- rápida;
- acessível;
- otimizada para mecanismos de busca;
- com código limpo e fácil de manter.

Para isso, utilizaremos ferramentas do ecossistema Google muito presentes no mercado de desenvolvimento Front-end.

---

## 2. Objetivos da aula

Ao final da aula, o aluno deverá ser capaz de:

- usar o Google Chrome como ferramenta de desenvolvimento;
- utilizar o Chrome DevTools para inspecionar HTML, CSS e JavaScript;
- identificar erros no Console;
- analisar carregamento de arquivos na aba Network;
- testar performance com Lighthouse;
- comparar Lighthouse e PageSpeed Insights;
- aplicar Google Fonts e Material Symbols em uma página;
- compreender o uso de Material Design no mercado;
- usar pesquisa técnica para resolver problemas;
- elaborar um roteiro de pesquisa profissional.

---

## 3. Ferramentas trabalhadas

| Ferramenta | Uso principal no Front-end | Quando usar |
|---|---|---|
| Google Chrome | Navegador e ambiente de teste | Durante todo o desenvolvimento |
| Chrome DevTools | Inspeção, debug e análise | Ao corrigir layout, erro ou performance |
| Lighthouse | Auditoria de qualidade da página | Antes da entrega/publicação |
| PageSpeed Insights | Teste de páginas publicadas | Após publicar ou comparar desempenho real |
| Google Fonts | Tipografia para web | Durante a criação visual da interface |
| Material Symbols | Ícones para interface | Em menus, botões, cards e ações |
| Material Design | Sistema de design | Ao padronizar componentes e experiência |
| Google Search | Pesquisa técnica | Ao resolver erros e buscar documentação |
| Google AI Studio/Gemini | Apoio à análise e prototipação | Para revisar código, explicar erros e gerar ideias |

---

## 4. Organização da aula 

---

# Parte 1 — Projeto base da aula

Crie uma pasta chamada:

```text
landing-page-google-tools
```

Dentro dela, crie três arquivos:

```text
index.html
|_ css
  |_style.css
|_ js
  |_script.js
```

---

## 1.1 Arquivo `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Título exibido na aba do navegador e usado em SEO -->
    <title>TechClass - Curso Front-end</title>

    <!-- Descrição usada por mecanismos de busca -->
    <meta name="description" content="Landing page de exemplo para estudar ferramentas Google no desenvolvimento Front-end.">

    <!-- Importação do arquivo CSS local -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- Cabeçalho principal da página -->
    <header class="cabecalho">
        <h1>TechClass Front-end</h1>
        <p>Aprenda a criar páginas rápidas, bonitas e profissionais.</p>
        <button id="btnMensagem">Quero aprender</button>
    </header>

    <!-- Conteúdo principal da página -->
    <main>
        <section class="cards">
            <article class="card">
                <h2>HTML</h2>
                <p>Estrutura da página.</p>
            </article>

            <article class="card">
                <h2>CSS</h2>
                <p>Estilo, cores, espaçamento e responsividade.</p>
            </article>

            <article class="card">
                <h2>JavaScript</h2>
                <p>Interatividade e comportamento.</p>
            </article>
        </section>

        <section class="formulario">
            <h2>Receba novidades</h2>

            <!-- O label melhora acessibilidade e usabilidade -->
            <label for="email">E-mail:</label>
            <input type="email" id="email" placeholder="Digite seu e-mail">

            <button id="btnCadastrar">Cadastrar</button>
            <p id="resultado"></p>
        </section>
    </main>

    <!-- Rodapé da página -->
    <footer>
        <p>Desenvolvido para aula de ferramentas Google para Front-end.</p>
    </footer>

    <!-- Importação do JavaScript no final para carregar após o HTML -->
    <script src="js/script.js"></script>
</body>
</html>
```

---

## 1.2 Arquivo `style.css`

```css
/* Remove espaçamentos padrão e melhora o cálculo de tamanho dos elementos */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Define fonte padrão e cor de fundo da página */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f6f8;
    color: #222;
    line-height: 1.6;
}

/* Área principal de destaque */
.cabecalho {
    background-color: #1a73e8;
    color: white;
    text-align: center;
    padding: 60px 20px;
}

.cabecalho h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.cabecalho p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

/* Botões da página */
button {
    background-color: #0f9d58;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
}

/* Efeito visual ao passar o mouse */
button:hover {
    background-color: #0b8043;
}

/* Organização dos cards usando Flexbox */
.cards {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 40px 20px;
}

.card {
    background-color: white;
    padding: 25px;
    width: 250px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card h2 {
    color: #1a73e8;
    margin-bottom: 10px;
}

.formulario {
    background-color: white;
    max-width: 500px;
    margin: 20px auto;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.formulario h2 {
    margin-bottom: 15px;
}

input {
    width: 100%;
    padding: 12px;
    margin: 8px 0 16px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
}

footer {
    text-align: center;
    padding: 20px;
    margin-top: 30px;
    background-color: #222;
    color: white;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
    .cards {
        flex-direction: column;
        align-items: center;
    }

    .card {
        width: 90%;
    }
}
```

---

## 1.3 Arquivo `script.js`

```javascript
// Captura o botão pelo ID definido no HTML
const btnMensagem = document.getElementById("btnMensagem");

// Captura o botão de cadastro
const btnCadastrar = document.getElementById("btnCadastrar");

// Captura o campo de e-mail
const inputEmail = document.getElementById("email");

// Captura o parágrafo onde a mensagem será exibida
const resultado = document.getElementById("resultado");

// Adiciona um evento de clique ao primeiro botão
btnMensagem.addEventListener("click", function () {
    alert("Bem-vindo à aula de ferramentas Google para Front-end!");
});

// Adiciona um evento de clique ao botão de cadastro
btnCadastrar.addEventListener("click", function () {
    // Guarda o valor digitado pelo usuário
    const email = inputEmail.value;

    // Verifica se o campo está vazio
    if (email === "") {
        resultado.textContent = "Por favor, informe seu e-mail.";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "Cadastro realizado com sucesso!";
        resultado.style.color = "green";
    }
});
```

---

# Parte 2 — Google Chrome

## O que é

O Google Chrome é um navegador muito utilizado no desenvolvimento Front-end porque permite testar páginas, simular dispositivos e acessar ferramentas de inspeção.

## Como é utilizado no mercado

Desenvolvedores usam o Chrome para:

- testar páginas web;
- verificar responsividade;
- depurar JavaScript;
- analisar performance;
- testar APIs;
- simular dispositivos móveis;
- validar acessibilidade e SEO.

## Passo a passo

1. Abra a pasta do projeto no Visual Studio Code.
2. Clique com o botão direito no arquivo `index.html`.
3. Escolha `Open with Live Server`, caso tenha a extensão instalada.
4. A página abrirá no navegador.
5. Verifique se o endereço ficou parecido com:

```text
http://127.0.0.1:5500/index.html
```

## Atividade rápida

Peça aos alunos para abrirem a página no Chrome e responderem:

- A página carregou corretamente?
- O botão exibe alerta?
- O formulário mostra mensagem?
- O layout se adapta quando reduzimos a tela?

---

# Parte 3 — Chrome DevTools

## O que é

O Chrome DevTools é um conjunto de ferramentas de desenvolvimento integrado ao Chrome. Ele permite editar páginas em tempo real, diagnosticar problemas e entender como HTML, CSS e JavaScript estão funcionando.

## Como abrir

### Opção 1

Clique com o botão direito na página e selecione:

```text
Inspecionar
```

### Opção 2

Use o atalho:

```text
F12
```

### Opção 3

Use:

```text
Ctrl + Shift + I
```

---

## 3.1 Aba Elements

### Para que serve

A aba Elements permite visualizar e editar o HTML e o CSS da página em tempo real.

### Quando usar

- quando o layout está quebrado;
- quando uma cor não aparece;
- quando um elemento está fora do lugar;
- quando é necessário testar rapidamente uma mudança visual.

### Passo a passo

1. Abra o DevTools.
2. Clique na aba `Elements`.
3. Clique no ícone de seleção de elemento.
4. Clique no título `TechClass Front-end`.
5. No painel de estilos, altere a cor do texto.
6. Observe que a alteração aparece na tela, mas não salva no arquivo.

### Experimento

No DevTools, altere:

```css
.cabecalho h1 {
    font-size: 4rem;
}
```

Explique aos alunos:

- essa alteração é temporária;
- serve para testar ideias rapidamente;
- depois precisa ser aplicada no arquivo `style.css`.

---

## 3.2 Aba Console

### Para que serve

A aba Console mostra mensagens, erros e permite executar JavaScript diretamente no navegador.

### Quando usar

- quando um botão não funciona;
- quando aparece erro em JavaScript;
- quando queremos testar comandos rapidamente;
- quando queremos imprimir valores com `console.log()`.

### Passo a passo

1. Abra o DevTools.
2. Clique na aba `Console`.
3. Digite:

```javascript
console.log("Teste no Console");
```

4. Pressione Enter.

### Código comentado para testar no Console

```javascript
// Mostra uma mensagem simples no Console
console.log("A página está funcionando");

// Mostra uma tabela no Console
console.table([
    { tecnologia: "HTML", funcao: "Estrutura" },
    { tecnologia: "CSS", funcao: "Estilo" },
    { tecnologia: "JavaScript", funcao: "Interatividade" }
]);

// Mostra um aviso
console.warn("Atenção: verifique a responsividade da página");

// Mostra uma mensagem de erro simulada
console.error("Erro simulado para fins didáticos");
```

### Atividade prática

No arquivo `script.js`, adicione:

```javascript
// Mostra no Console quando o arquivo JavaScript é carregado
console.log("Arquivo script.js carregado com sucesso");
```

Depois:

1. salve o arquivo;
2. atualize a página;
3. abra o Console;
4. verifique se a mensagem apareceu.

---

## 3.3 Simulando um erro no Console

Altere temporariamente esta linha:

```javascript
const btnMensagem = document.getElementById("btnMensagem");
```

Para:

```javascript
// ID escrito errado de propósito para gerar erro
const btnMensagem = document.getElementById("btnMensageeem");
```

Ao clicar no botão ou carregar a página, poderá aparecer erro parecido com:

```text
Cannot read properties of null
```

### Explicação

O JavaScript tentou encontrar um elemento com ID `btnMensageeem`, mas esse ID não existe no HTML.

### Correção

Volte para:

```javascript
const btnMensagem = document.getElementById("btnMensagem");
```

Moral da história: uma letra errada no ID e o JavaScript já começa a fazer drama digno de novela das nove.

---

## 3.4 Aba Network

### Para que serve

A aba Network mostra todos os arquivos carregados pela página:

- HTML;
- CSS;
- JavaScript;
- imagens;
- fontes;
- APIs;
- tempo de carregamento.

### Quando usar

- quando a página demora para carregar;
- quando uma imagem não aparece;
- quando um arquivo CSS não foi carregado;
- quando uma API está lenta;
- quando queremos verificar status HTTP.

### Passo a passo

1. Abra o DevTools.
2. Clique em `Network`.
3. Atualize a página.
4. Observe os arquivos carregados.
5. Clique em `style.css`.
6. Veja status, tamanho e tempo.

### Pontos para observar

| Item | O que significa |
|---|---|
| Status 200 | Arquivo carregado com sucesso |
| Status 404 | Arquivo não encontrado |
| Size | Tamanho do arquivo |
| Time | Tempo de carregamento |
| Waterfall | Linha do tempo do carregamento |

### Atividade prática

No `index.html`, altere:

```html
<link rel="stylesheet" href="style.css">
```

Para:

```html
<!-- Nome errado propositalmente para gerar erro 404 -->
<link rel="stylesheet" href="estilo.css">
```

Depois:

1. atualize a página;
2. abra a aba Network;
3. procure o arquivo `estilo.css`;
4. veja o erro 404;
5. corrija o nome para `style.css`.

---

## 3.5 Aba Application

### Para que serve

A aba Application permite visualizar dados armazenados no navegador.

Ela mostra:

- Local Storage;
- Session Storage;
- Cookies;
- Cache;
- Service Workers.

### Quando usar

- quando um sistema salva dados no navegador;
- quando precisamos limpar cache;
- quando trabalhamos com login;
- quando testamos carrinho de compras;
- quando usamos armazenamento local.

### Código para testar Local Storage

Adicione ao `script.js`:

```javascript
// Salva uma informação no navegador
localStorage.setItem("curso", "Front-end com ferramentas Google");

// Recupera a informação salva
const cursoSalvo = localStorage.getItem("curso");

// Mostra o valor recuperado no Console
console.log("Curso salvo no navegador:", cursoSalvo);
```

### Passo a passo para visualizar

1. Salve o arquivo.
2. Atualize a página.
3. Abra o DevTools.
4. Clique na aba `Application`.
5. Vá em `Local Storage`.
6. Clique no endereço da página.
7. Veja a chave `curso`.

---

## 3.6 Aba Sources

### Para que serve

A aba Sources permite visualizar arquivos carregados e depurar JavaScript com breakpoints.

### Quando usar

- quando queremos pausar o código;
- quando precisamos entender uma função;
- quando um valor está errado;
- quando o Console não é suficiente.

### Passo a passo

1. Abra DevTools.
2. Clique em `Sources`.
3. Abra o arquivo `script.js`.
4. Clique no número da linha dentro do evento do botão.
5. Clique no botão da página.
6. O código será pausado naquela linha.

### Conceitos

| Recurso | Função |
|---|---|
| Breakpoint | Pausa o código em uma linha |
| Step Over | Avança para a próxima linha |
| Step Into | Entra dentro de uma função |
| Resume | Continua a execução |
| Watch | Observa valores de variáveis |

---

# Parte 4 — Lighthouse

## O que é

O Lighthouse é uma ferramenta automatizada de auditoria que ajuda a melhorar a qualidade de páginas web. Ele avalia performance, acessibilidade, SEO e boas práticas.

## Como é usado no mercado

Empresas usam Lighthouse para:

- validar qualidade antes de publicar;
- encontrar gargalos de performance;
- melhorar acessibilidade;
- otimizar SEO técnico;
- comparar evolução antes/depois de melhorias.

## Passo a passo no Chrome

1. Abra a página no Chrome.
2. Abra o DevTools.
3. Clique na aba `Lighthouse`.
4. Escolha `Mobile` ou `Desktop`.
5. Marque as categorias:
   - Performance;
   - Accessibility;
   - Best Practices;
   - SEO.
6. Clique em `Analyze page load` ou `Generate report`.
7. Aguarde o relatório.

## Como interpretar

| Categoria | O que analisa |
|---|---|
| Performance | Velocidade e carregamento |
| Accessibility | Acessibilidade da interface |
| Best Practices | Segurança e boas práticas |
| SEO | Otimização para buscadores |

## Métricas importantes

| Métrica | Significado | Ideal |
|---|---|---|
| FCP | Primeiro conteúdo visível | Quanto menor, melhor |
| LCP | Maior conteúdo visível | Até 2,5 s |
| INP | Resposta à interação | Até 200 ms |
| CLS | Saltos visuais da página | Menor que 0,1 |
| TTFB | Tempo de resposta do servidor | Quanto menor, melhor |

## Atividade prática

Cada aluno deverá registrar:

```text
Performance: ____
Accessibility: ____
Best Practices: ____
SEO: ____
```

Depois deverá escolher uma recomendação do Lighthouse e responder:

```text
Qual problema foi apontado?
Por que isso prejudica a página?
Como posso corrigir?
```

---

# Parte 5 — PageSpeed Insights

## O que é

O PageSpeed Insights analisa uma página publicada na internet e mostra dados de desempenho. Ele pode apresentar dados reais de usuários e dados de laboratório.

## Diferença entre Lighthouse e PageSpeed Insights

| Ferramenta | Melhor uso |
|---|---|
| Lighthouse | Testar durante o desenvolvimento, inclusive localhost |
| PageSpeed Insights | Testar páginas publicadas na internet |

## Passo a passo

1. Acesse o PageSpeed Insights.
2. Cole a URL de um site publicado.
3. Clique em `Analisar`.
4. Compare os resultados de Mobile e Desktop.
5. Observe as recomendações.

## Atividade sugerida

Pesquisar três sites:

```text
Site 1: página de escola
Site 2: página de loja
Site 3: página de notícia
```

Para cada site, registre:

```text
URL:
Performance Mobile:
Performance Desktop:
Principal problema encontrado:
Uma sugestão de melhoria:
```

---

# Parte 6 — Google Fonts

## O que é

Google Fonts é uma biblioteca de fontes para uso em páginas web.

## Como é usado no mercado

É usado para:

- melhorar identidade visual;
- padronizar tipografia;
- deixar interfaces mais profissionais;
- criar páginas mais agradáveis.

## Passo a passo

1. Acesse Google Fonts.
2. Escolha uma fonte.
3. Selecione os pesos necessários.
4. Copie o link fornecido.
5. Cole no `<head>` do HTML.
6. Use a fonte no CSS.

## Exemplo no `index.html`

Adicione dentro da tag `<head>`:

```html
<!-- Melhora a conexão com o servidor de fontes -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Importa a fonte Roboto com pesos 400 e 700 -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

## Exemplo no `style.css`

Altere o `body`:

```css
body {
    /* Roboto será usada se carregar corretamente.
       Caso contrário, o navegador usará Arial ou outra fonte sem serifa. */
    font-family: 'Roboto', Arial, sans-serif;
    background-color: #f4f6f8;
    color: #222;
    line-height: 1.6;
}
```

## Boas práticas

- não usar muitas fontes na mesma página;
- importar apenas os pesos necessários;
- usar `display=swap`;
- testar impacto no Lighthouse;
- evitar exageros, porque fonte demais vira carnaval tipográfico.

---

# Parte 7 — Material Symbols

## O que é

Material Symbols é a biblioteca atual de ícones do Google, baseada em fonte variável, com milhares de ícones e variações de estilo.

## Como é usado no mercado

É usado em:

- botões;
- menus;
- cards;
- sistemas administrativos;
- aplicativos web;
- dashboards;
- interfaces responsivas.

## Passo a passo

1. Acesse Google Fonts Icons.
2. Escolha um ícone.
3. Copie o nome do ícone.
4. Importe a fonte de ícones no HTML.
5. Use a tag `<span>` no local desejado.

## Exemplo no `index.html`

Adicione no `<head>`:

```html
<!-- Importa Material Symbols para usar ícones como fonte -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
```

Agora altere os cards:

```html
<section class="cards">
    <article class="card">
        <!-- Ícone Material Symbols -->
        <span class="material-symbols-outlined icone">code</span>
        <h2>HTML</h2>
        <p>Estrutura da página.</p>
    </article>

    <article class="card">
        <span class="material-symbols-outlined icone">palette</span>
        <h2>CSS</h2>
        <p>Estilo, cores, espaçamento e responsividade.</p>
    </article>

    <article class="card">
        <span class="material-symbols-outlined icone">javascript</span>
        <h2>JavaScript</h2>
        <p>Interatividade e comportamento.</p>
    </article>
</section>
```

## Exemplo no `style.css`

```css
/* Estiliza os ícones dos cards */
.icone {
    font-size: 40px;
    color: #1a73e8;
    margin-bottom: 10px;
}
```

## Atividade prática

Troque os ícones dos cards por outros encontrados na biblioteca.

Sugestões:

```text
school
terminal
devices
rocket_launch
query_stats
```

---

# Parte 8 — Material Design

## O que é

Material Design é um sistema de design criado pelo Google para orientar a construção de interfaces consistentes, acessíveis e agradáveis.

## Como é usado no mercado

Empresas usam sistemas de design para:

- padronizar telas;
- acelerar desenvolvimento;
- melhorar experiência do usuário;
- reduzir retrabalho;
- manter identidade visual.

## Conceitos principais

| Conceito | Explicação |
|---|---|
| Cores | Criam identidade e hierarquia |
| Tipografia | Organiza leitura e destaque |
| Espaçamento | Evita poluição visual |
| Componentes | Botões, cards, menus e campos |
| Estados | Hover, foco, ativo e desabilitado |
| Acessibilidade | Interface utilizável por mais pessoas |

## Aplicação prática no nosso CSS

Vamos melhorar o botão com foco visível:

```css
button {
    background-color: #0f9d58;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
    background-color: #0b8043;
    transform: translateY(-2px);
}

/* Ajuda quem navega pelo teclado */
button:focus {
    outline: 3px solid #fbbc04;
    outline-offset: 3px;
}
```

## Melhorando os cards

```css
.card {
    background-color: white;
    padding: 25px;
    width: 250px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
```

---

# Parte 9 — Google Search para desenvolvedores

## O problema

Pesquisar bem é uma habilidade profissional. Quem pesquisa melhor resolve problemas mais rápido.

## Pesquisa ruim

```text
erro javascript
```

## Pesquisa melhor

```text
Cannot read properties of null addEventListener JavaScript
```

## Operadores úteis

### Buscar frase exata

```text
"Cannot read properties of null"
```

### Buscar em site específico

```text
site:developer.mozilla.org flexbox gap
```

### Buscar documentação do Google

```text
site:developer.chrome.com DevTools Network panel
```

### Excluir termo

```text
javascript form validation -jquery
```

### Buscar arquivos PDF

```text
CSS Grid filetype:pdf
```

### Buscar conteúdo recente

```text
CSS container queries after:2025
```

## Roteiro de pesquisa técnica

1. Copie a mensagem exata do erro.
2. Identifique a tecnologia envolvida.
3. Pesquise primeiro documentação oficial.
4. Compare pelo menos duas fontes.
5. Teste a solução em código pequeno.
6. Aplique no projeto real.
7. Registre a solução no caderno ou README.

---

# Parte 10 — Google AI Studio / Gemini

## O que é

Google AI Studio é uma ferramenta para testar prompts, criar protótipos com Gemini e explorar recursos de IA generativa.

## Como usar no Front-end

Pode ajudar em:

- revisão de código;
- explicação de erros;
- geração de ideias de interface;
- criação de textos para páginas;
- análise de acessibilidade;
- refatoração de CSS;
- criação de casos de teste.

## Forma ruim de pedir ajuda

```text
Faça meu site.
```

## Forma melhor

```text
Analise este código HTML, CSS e JavaScript. Aponte problemas de acessibilidade, performance e organização. Explique cada sugestão para um aluno iniciante.
```

## Prompt para usar em aula

```text
Você é um desenvolvedor Front-end sênior. Analise o código abaixo e diga:
1. O que está correto.
2. O que pode melhorar.
3. Se há problemas de acessibilidade.
4. Se há problemas de performance.
5. Como melhorar sem complicar o código.

Código:
[cole aqui o HTML/CSS/JS]
```

## Atenção

A IA ajuda, mas não substitui o raciocínio. O aluno deve testar, comparar e entender. Copiar sem entender é terceirizar o cérebro — e o cérebro ainda não tem botão de backup automático.

---

# Parte 11 — Desafio final da aula

## Situação-problema

A empresa TechClass criou uma landing page, mas antes de entregar ao cliente precisa realizar uma auditoria Front-end.

Seu grupo será responsável por analisar a página e propor melhorias.

## Tarefas do grupo

1. Abrir o projeto no Chrome.
2. Inspecionar HTML e CSS no DevTools.
3. Verificar erros no Console.
4. Analisar arquivos na aba Network.
5. Verificar Local Storage na aba Application.
6. Executar Lighthouse.
7. Registrar notas de Performance, Accessibility, Best Practices e SEO.
8. Aplicar Google Fonts.
9. Aplicar Material Symbols.
10. Melhorar pelo menos um componente com base em Material Design.
11. Pesquisar uma solução técnica usando operadores do Google.
12. Apresentar os resultados.

---

# Parte 12 — Roteiro de pesquisa para os alunos

Cada grupo deverá escolher uma ferramenta entre:

- Chrome DevTools;
- Lighthouse;
- PageSpeed Insights;
- Google Fonts;
- Material Symbols;
- Material Design;
- Google Search avançado;
- Google AI Studio/Gemini.

## Fase 1 — Identificação

Responder:

```text
Qual ferramenta foi escolhida?
Quem mantém essa ferramenta?
Qual problema ela resolve para o desenvolvedor Front-end?
```

## Fase 2 — Pesquisa inicial

Pesquisar:

```text
Documentação oficial da ferramenta
Exemplos de uso
Vídeos ou tutoriais recentes
Casos de uso no mercado
```

## Fase 3 — Análise técnica

Responder:

```text
Em qual etapa do desenvolvimento Front-end ela é usada?
Ela ajuda em HTML, CSS, JavaScript, performance, SEO ou acessibilidade?
Quais são os principais recursos?
```

## Fase 4 — Demonstração prática

O grupo deve demonstrar:

```text
Como abrir ou acessar a ferramenta
Como usar uma função principal
Como interpretar o resultado
Como aplicar no projeto da aula
```

## Fase 5 — Mercado de trabalho

Responder:

```text
Como uma empresa usa essa ferramenta?
Que tipo de profissional utiliza?
Em quais situações ela economiza tempo ou evita problemas?
```

## Fase 6 — Comparação

Pesquisar:

```text
Existe ferramenta concorrente?
Quais vantagens a ferramenta Google oferece?
Quais limitações ela possui?
```

## Fase 7 — Entrega

O grupo deverá entregar:

```text
1. Nome da ferramenta
2. Resumo do que ela faz
3. Passo a passo de uso
4. Exemplo prático
5. Aplicação no mercado
6. Vantagens
7. Limitações
8. Fontes pesquisadas
9. Conclusão do grupo
```

---

# Parte 13 — Modelo de relatório dos alunos

```markdown
# Relatório de Pesquisa - Ferramentas Google para Front-end

## Grupo

Nomes dos integrantes:

## Ferramenta escolhida

Nome da ferramenta:

## O que é

Explique com suas palavras.

## Para que serve

Explique qual problema ela resolve.

## Quando usar no desenvolvimento Front-end

Explique em qual momento ela é utilizada.

## Passo a passo de uso

1. 
2. 
3. 
4. 
5. 

## Exemplo prático

Mostre um exemplo aplicado ao projeto da aula.

## Uso no mercado

Explique como empresas ou desenvolvedores utilizam.

## Vantagens

- 
- 
- 

## Limitações

- 
- 
- 

## Ferramentas semelhantes

Liste concorrentes ou alternativas.

## Fontes pesquisadas

- 
- 
- 

## Conclusão

A ferramenta é útil para desenvolvedores Front-end? Por quê?
```

---

# Parte 14 — Critérios de avaliação

| Critério | Pontuação |
|---|---:|
| Uso correto das ferramentas | 20 |
| Participação no grupo | 15 |
| Análise técnica da página | 20 |
| Aplicação prática no código | 20 |
| Pesquisa e fontes utilizadas | 15 |
| Clareza na apresentação | 10 |
| **Total** | **100** |

---

# Parte 15 — Fechamento da aula

Um desenvolvedor Front-end não entrega apenas uma página bonita.

Ele precisa entregar uma página:

- funcional;
- rápida;
- responsiva;
- acessível;
- bem estruturada;
- validada com ferramentas profissionais;
- compreensível para outros desenvolvedores.

As ferramentas Google ajudam a enxergar o que está acontecendo por trás da tela. A página é o palco, mas o DevTools é a coxia onde a mágica — e os bugs — aparecem.

---

# Referências para aprofundamento

- Chrome DevTools: https://developer.chrome.com/docs/devtools
- Lighthouse: https://developer.chrome.com/docs/lighthouse/overview
- Lighthouse no DevTools: https://developer.chrome.com/docs/devtools/lighthouse
- PageSpeed Insights: https://pagespeed.web.dev/
- Documentação do PageSpeed Insights: https://developers.google.com/speed/docs/insights/v5/about
- Google Fonts API: https://developers.google.com/fonts/docs/getting_started
- Material Symbols: https://developers.google.com/fonts/docs/material_symbols
- Material Design 3: https://m3.material.io/
- Google AI Studio: https://ai.google.dev/aistudio
```
