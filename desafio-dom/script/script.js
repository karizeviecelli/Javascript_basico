const form = document.getElementById('form-filme');
const inputTitulo = document.getElementById('titulo');
const inputGenero = document.getElementById('genero');
const inputAno = document.getElementById('ano');
const listaFilmes = document.getElementById('lista-filmes');


form.addEventListener('submit', function(event) {

    event.preventDefault();


    const titulo = inputTitulo.value.trim();
    const genero = inputGenero.value.trim();
    const ano = inputAno.value.trim();


    if (titulo === '' || genero === '' || ano === '') {
        alert('Preencha todos os campos!');
        return; 
    }


    const card = document.createElement('div');
    card.classList.add('card-filme'); 


    card.innerHTML = `
        <p>🎬 <strong>${titulo}</strong></p>
        <p>🎭 Gênero: ${genero}</p>
        <p>📅 Ano: ${ano}</p>
    `;

    
    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = 'Excluir';
    btnExcluir.classList.add('btn-excluir');


    btnExcluir.addEventListener('click', function() {
        card.remove(); 
    });


    card.appendChild(btnExcluir);


    listaFilmes.appendChild(card);

    form.reset();
    inputTitulo.focus();
});