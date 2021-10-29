
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

function criaTarefa(textoInput) { 
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
    
}

function criaLi () {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar'); poderia ter criado assim criando uma classe mas vamos ver de outra forma com atributo, por que o botao foi criando diretamente pelo javascript
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();

    }
})