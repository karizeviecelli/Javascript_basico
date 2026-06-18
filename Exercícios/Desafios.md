# Aula 2 — Variáveis e Constantes

## 🟢 Nível Baixo

1. Declare uma variável chamada `nome` contendo seu nome e exiba-a no console.
2. Crie uma constante chamada `PI` com o valor `3.14159` e tente exibir o valor.
3. Declare três variáveis com `let` na mesma linha: `idade`, `altura` e `cidade`.
4. Use o operador `typeof` para descobrir e exibir o tipo do dado `true`.
5. Crie uma variável `let` sem atribuir valor inicial e exiba-a para ver o resultado `undefined`.

## 🟡 Nível Médio

6. Calcule a área de um círculo de raio `5` utilizando a fórmula `PI * raio * raio`.
7. Converta a string `"150"` em um número real utilizando `Number()` e some com `50`.
8. Troque os valores de duas variáveis `a` e `b` entre si utilizando uma terceira variável auxiliar.
9. Crie uma variável que monte a frase: `"Meu nome é [nome] e tenho [idade] anos"` usando Template Strings.
10. Crie um bloco de código com `{}` e declare uma variável `let` dentro dele. Tente exibi-la fora do bloco para observar o erro de escopo.

## 🔴 Nível Alto

11. Declare uma constante `CPF` com um valor numérico. Tente alterar o valor na linha seguinte e analise a mensagem de erro gerada.
12. Crie um modelo de dados para um produto de robótica contendo: nome (string), versão (número), ativo (booleano) e preço (número).
13. Crie um programa que receba uma string qualquer e exiba no console o número total de caracteres que ela possui.
14. Capture dois valores do usuário (simulados), converta-os para números inteiros e exiba a soma exata deles.
15. Declare seu nome completo em uma variável e exiba o total de letras, desconsiderando os espaços em branco na contagem.

*Atividades desenvolvidas para o Projeto @arizeviecelli*

---

# Aula 3 — Operadores

## 🟢 Nível Baixo

1. Calcule o resultado de `15 + 5 * 2` e compare com `(15 + 5) * 2`.
2. Verifique se o valor `25` é maior que `18` e exiba o resultado booleano.
3. Use o operador de igualdade estrita (`===`) para comparar o número `10` com a string `"10"`.
4. Crie duas variáveis booleanas e use o operador lógico `&&` para verificar se ambas são verdadeiras.
5. Use o operador lógico `||` para atribuir um nome padrão "Visitante" caso a variável `nome` esteja vazia.

## 🟡 Nível Médio

6. Calcule a média aritmética de três notas e determine se o resultado é maior ou igual a `7.0`.
7. Crie uma lógica usando o operador `%` para verificar se um número qualquer é par (resto igual a `0`).
8. Utilize o operador ternário para verificar se a temperatura é maior que `25`. Se sim, retorne `"Quente"`, senão `"Frio"`.
9. Use o operador de incremento (`++`) dentro de um ciclo para somar `1` a uma variável de controle de `0` a `5`.
10. Acumule valores em uma variável de saldo utilizando o operador de atribuição combinada (`+=`).

## 🔴 Nível Alto

11. Crie um algoritmo para calcular o Índice de Massa Corporal (IMC) usando a fórmula `peso / (altura * altura)` e exiba a classificação usando operadores relacionais.
12. Escreva uma expressão lógica para determinar se um ano é bissexto: divisível por `400` OU (divisível por `4` E não por `100`).
13. Utilize operadores ternários aninhados para classificar uma nota de desempenho: `>= 90` retorna `"A"`, `>= 80` retorna `"B"`, senão retorna `"C"`.
14. Crie uma expressão matemática complexa que use parênteses para forçar a precedência da adição sobre a multiplicação e da divisão sobre a subtração.
15. Analise e resolva manualmente o resultado da seguinte expressão lógica, justificando a ordem de execução: `!((10 > 5) && (3 < 1)) || (20 === 20)`.

*Atividades desenvolvidas para o Projeto @arizeviecelli*

---

# Aula 4 — Estruturas de Decisão

## 🟢 Nível Baixo

1. Crie uma estrutura `if/else` simples para verificar se uma idade é maior ou igual a `18` anos.
2. Escreva um switch para receber um número de `1` a `7` e exibir o dia da semana correspondente.
3. Classifique um número em positivo, negativo ou zero utilizando uma estrutura `if/else if/else`.
4. Reescreva uma decisão simples de maioridade usando apenas o operador ternário.
5. Crie um filtro de acesso onde o usuário só entra se tiver idade `>= 18` E possuir um convite válido (ambos verdadeiros).

## 🟡 Nível Médio

6. Crie um sistema de notas escolares que retorne conceitos: `A` para notas `>= 90`, `B` para `>= 80`, `C` para `>= 70` e `D` para menores.
7. Use uma estrutura `switch` para identificar a categoria de um produto com base no código digitado.
8. Verifique se um número sorteado está contido estritamente dentro do intervalo de `10` a `20`.
9. Teste o conceito de valores truthy e falsy inserindo valores como `0`, `""`, `null` e `"texto"` direto na condição do `if`.
10. Converta uma árvore complexa de decisões `if/else` aninhadas em uma estrutura plana utilizando operadores lógicos.

## 🔴 Nível Alto

11. Crie um controle de permissões de usuário (admin, editor, visitante) usando `switch` e direcione cada perfil para uma área diferente.
12. Use a técnica de fall-through em um `switch` (sem usar a palavra-chave `break`) para agrupar múltiplos casos de dias úteis da semana.
13. Construa um validador de senha que exija que ela tenha tamanho `>= 8` caracteres E contenha pelo menos um número.
14. Crie uma calculadora que receba dois números e uma string representando a operação matemática (`"+"`, `"-"`, `"*"` ou `"/"`) e retorne o resultado usando `switch`.
15. Desenvolva um sistema de aprovação de crédito que avalie idade do solicitante, renda mensal e pontuação de score de forma aninhada.

*Atividades desenvolvidas para o Projeto @arizeviecelli*

---

# Aula 5 — Laços de Repetição

## 🟢 Nível Baixo

1. Use um laço `for` para exibir os números de `1` a `10` no console.
2. Crie uma contagem regressiva de `10` até `1` utilizando um laço `while`.
3. Utilize um laço `do...while` que execute pelo menos uma vez, exibindo uma mensagem de inicialização.
4. Some todos os números inteiros de `1` a `100` acumulando o valor em uma variável externa com o laço `for`.
5. Exiba no console apenas os números pares compreendidos no intervalo de `0` a `20`.

## 🟡 Nível Médio

6. Interrompa a execução de um loop de `1` a `20` usando a instrução `break` assim que encontrar o número `7`.
7. Utilize a instrução `continue` para pular a exibição de números ímpares dentro de um contador de `1` a `10`.
8. Escreva a tabuada de multiplicação de um número qualquer de `1` a `10` utilizando o laço `for`.
9. Percorra um array de nomes conhecidos exibindo cada um deles individualmente no console com um laço.
10. Crie laços de repetição aninhados (um dentro do outro) para gerar as coordenadas de uma grade `3x3`.

## 🔴 Nível Alto

11. Desenvolva um algoritmo que varra um array de números desordenados e descubra qual é o maior valor contido nele.
12. Escreva o código necessário para gerar os dez primeiros números da sequência de Fibonacci utilizando repetições.
13. Simule um validador de login que mantenha o usuário preso em um laço `while` até que a senha correta seja digitada.
14. Use laços aninhados para desenhar um triângulo de asteriscos no console, adicionando uma linha a cada iteração.
15. Crie um programa para calcular o fatorial de um número inteiro fornecido pelo usuário utilizando laço de repetição.

*Atividades desenvolvidas para o Projeto @arizeviecelli*

---

# Aula 6 — Arrays

## 🟢 Nível Baixo

1. Crie um array com três marcas de carros e exiba o primeiro e o último elemento.
2. Adicione um novo elemento ao final do seu array de carros com `push()` e depois remova-o usando `pop()`.
3. Verifique a quantidade total de elementos presentes em um array de compras utilizando a propriedade `.length`.
4. Acesse o último elemento de um array de tamanho dinâmico usando o índice baseado no comprimento do próprio array.
5. Insira um elemento no início de um array com `unshift()` e remova o primeiro com `shift()`.

## 🟡 Nível Médio

6. Utilize o método `filter()` para extrair apenas os números pares contidos em uma lista de inteiros de `1` a `10`.
7. Use o método `map()` para gerar um novo array contendo o dobro de cada valor de um array numérico original.
8. Calcule a soma total dos valores de uma lista de despesas utilizando o método de acumulação `reduce()`.
9. Varra uma lista de convidados usando `forEach()` e envie uma mensagem personalizada de boas-vindas para cada um.
10. Recorte uma porção intermediária de um array de nomes sem modificar a lista original utilizando o método `slice()`.

## 🔴 Nível Alto

11. Remova elementos de uma posição específica no meio de um array e insira novos valores no mesmo lugar usando `splice()`.
12. Use o método `includes()` para verificar se um determinado item existe em uma lista e altere o comportamento com base no retorno.
13. Crie um array bidimensional representando uma matriz matemática e acesse um elemento específico localizado no centro dela.
14. Junte dois arrays de dados diferentes em um único array consolidado com `concat()` e ordene-o em ordem alfabética.
15. Implemente manualmente uma função similar ao método `map()` utilizando apenas estruturas de laço tradicionais.

*Atividades desenvolvidas para o Projeto @arizeviecelli*

---

# Aula 7 — Objetos

## 🟢 Nível Baixo

1. Crie um objeto representando um `livro` com propriedades de título, autor e ano de publicação.
2. Acesse e exiba as propriedades do seu objeto usando a notação de ponto padrão.
3. Acesse uma propriedade do objeto `livro` usando a notação de colchetes com uma variável de texto como chave.
4. Adicione uma nova propriedade de gênero literário ao seu objeto de forma dinâmica após sua criação.
5. Remova a propriedade de ano de publicação do seu objeto usando o operador `delete`.

## 🟡 Nível Médio

6. Adicione uma função interna (método) ao seu objeto que exiba uma mensagem contendo o título e o autor dele.
7. Crie um objeto estruturado contendo outro objeto aninhado como propriedade, representando o endereço de uma pessoa.
8. Use a estrutura de repetição `for...in` para listar e exibir todas as chaves e valores presentes em um objeto.
9. Extraia e exiba todas as chaves de um objeto em formato de array utilizando a ferramenta `Object.keys()`.
10. Converta um objeto de dados completo em uma string formatada utilizando a ferramenta de serialização `JSON.stringify()`.

## 🔴 Nível Alto

11. Receba uma string em formato JSON válido e converta-a de volta para um objeto JavaScript funcional usando `JSON.parse()`.
12. Crie uma lista contendo múltiplos objetos representando produtos e filtre apenas os itens que possuem valor acima de um limite.
13. Mapeie e exiba os pares de chave e valor de um objeto estruturado utilizando o método `Object.entries()`.
14. Crie um método dentro de um objeto que faça referência a outras propriedades dele mesmo utilizando a palavra-chave `this`.
15. Realize uma cópia profunda de um objeto (clonagem) utilizando a sintaxe do operador de espalhamento (spread operator).

*Atividades desenvolvidas para o Projeto @arizeviecelli*

---

# Aula 8 — Funções

## 🟢 Nível Baixo

1. Crie uma função declarativa tradicional para somar dois números e retornar o resultado obtido.
2. Escreva uma função que receba um nome de usuário e exiba uma mensagem de boas-vindas personalizada no console.
3. Converta uma função simples de cálculo de dobro em uma versão moderna de arrow function simplificada.
4. Crie uma função lógica que retorne `true` ou `false` ao avaliar se um número enviado é divisível por dois.
5. Escreva duas funções simples e faça com que a primeira chame a segunda internamente para realizar parte do seu trabalho.

## 🟡 Nível Médio

6. Defina uma função que possua valores padrão para seus parâmetros caso nenhum dado seja enviado na chamada.
7. Escreva uma função que filtre valores de um array passando uma lógica de validação como argumento de retorno.
8. Crie uma função que receba um array de tamanho dinâmico e calcule a soma de todos os itens com redução de dados.
9. Desenvolva uma função que consiga receber um número infinito de argumentos numéricos usando parâmetros rest (`...`).
10. Crie uma função geradora que retorne uma nova função interna, retendo o acesso ao escopo de variáveis original (closure).

## 🔴 Nível Alto

11. Crie uma função centralizadora de operações matemáticas que receba a operação desejada e dois valores, decidindo a ação por `switch`.
12. Combine o uso de `map()` com uma arrow function inline para transformar um array de objetos em uma lista de strings simples.
13. Crie uma função matemática recursiva para calcular a sequência de fatoriais de um número de forma elegante.
14. Implemente uma função que receba um array e uma lógica de processamento em formato de retorno, aplicando a lógica em cada item.
15. Desenvolva um mecanismo simples de atraso de execução (debounce) que só dispare a ação após um tempo mínimo determinado.

*Atividades desenvolvidas para o Projeto @arizeviecelli*

---

# Aula 9 — Manipulação do DOM

## 🟢 Nível Baixo

1. Selecione um elemento de texto na página pelo seu identificador `id` e altere a mensagem contida nele.
2. Adicione uma classe de estilização CSS a um elemento da página utilizando a propriedade `classList.add()`.
3. Adicione uma escuta de evento para monitorar cliques em um botão e disparar um alerta visual na tela.
4. Altere de forma direta a cor de fundo do corpo do documento HTML usando comandos de estilo em tempo de execução.
5. Crie um novo parágrafo de texto de forma dinâmica e insira-o no final do corpo da página utilizando ferramentas do DOM.

## 🟡 Nível Médio

6. Desenvolva uma lista de tarefas onde o usuário digita algo em um campo, clica em um botão e um novo item é adicionado ao final.
7. Capture e identifique no console do navegador quais teclas estão sendo pressionadas usando o monitoramento de eventos de tecla.
8. Crie uma lógica que adicione ou remova alternadamente uma classe visual de destaque em um bloco de texto ao receber cliques (toggle).
9. Localize e remova de forma definitiva um determinado elemento visual da estrutura da sua página HTML.
10. Atualize o conteúdo interno de um container de layout inserindo novas tags HTML de forma direta em uma única instrução com `innerHTML`.

## 🔴 Nível Alto

11. Implemente a técnica de delegação de eventos para monitorar cliques em itens de lista que são criados dinamicamente na página.
12. Construa um painel numérico de contagem contendo botões de somar e subtrair que atualizam o número exibido em tempo real.
13. Crie uma janela flutuante estilo modal que se abra ao clicar em um botão e se feche ao clicar no ícone de fechar ou fora dela.
14. Desenvolva uma galeria de imagens interativa onde clicar em uma foto miniatura altera a exibição da imagem principal em destaque.
15. Crie uma grade interativa de posições vazias que registre as jogadas de dois usuários alternadamente para simular um jogo estruturado.

*Atividades desenvolvidas para o Projeto @arizeviecelli*
