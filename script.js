// Adicionando itens na lista ao clicar no botão "Criar Tarefa"//
const listaToDo = document.getElementById('lista-tarefas');
const botaoCriarTarefa = document.getElementById('criar-tarefa');
let tarefas = [];
function criaLi() {
  const novoItemLista = document.createElement('li');
  novoItemLista.innerText = tarefas;
  listaToDo.appendChild(novoItemLista);
}
function adicionaTarefa() {
  const inputTarefa = document.getElementById('texto-tarefa');
  tarefas = inputTarefa.value;
  criaLi();
  localStorage.setItem(tarefas, JSON.stringify(tarefas));
  inputTarefa.value = '';
}
botaoCriarTarefa.addEventListener('click', adicionaTarefa);

// se eu chegar no requisito 12, eu uso o localstorage e a funcao criaLI.

// Deixar com a cor de fundo cinza o item da lista que for clicado:
function removeClassGray() {
  const itensDaLista = document.getElementsByTagName('li');
  for (let i = 0; i < listaToDo.childElementCount; i += 1) {
    itensDaLista[i].classList.remove('classGray');
  }
}

// });
listaToDo.addEventListener('click', function bkgdGray(event){
 removeClassGray();
  let itemClicado = event.target;
  itemClicado.classList.add('classGray');
  // if (itemClicado.classList.contains('classGray') === false) {
  //   itemClicado.classList.add('classGray');
  // } else if (itemClicado.classList.contains('classGray') === true) {
  //   itemClicado.classList.remove('classGray')
  // }
  });

  // Deixar item da lista que for clicado riscado:
listaToDo.addEventListener('dblclick', function riscarPalavra(event){
let itemClicado = event.target;
if (itemClicado.classList.contains('completed') === false) {
  itemClicado.classList.add('completed')
} else if (itemClicado.classList.contains('completed') === true) {
  itemClicado.classList.remove('completed')
}
});

// Limpar lista:
// Ref: https://cursos.alura.com.br/forum/topico-excluir-todos-os-elementos-com-uma-classe-159597
function apagar() {
  const lista = document.getElementsByTagName('li');
  for (let i = lista.length - 1; i >= 0; i -= 1) {
    lista[i].remove();
  }
}

const botaoLimparLista = document.getElementById('apaga-tudo');

botaoLimparLista.addEventListener('click', apagar);

// Limpar itens completos da lista:
function removeRiscados() {
  const lista = document.getElementsByTagName('li');
  for (let i = lista.length - 1; i >= 0; i -= 1) {
    if (lista[i].classList.contains('completed') === true) {
      lista[i].remove();
    }
  }
}

const botaoLimparItensCompletos = document.getElementById('remover-finalizados');
botaoLimparItensCompletos.addEventListener('click', removeRiscados);

// Adicionando o botão salvar tarefas:
function resgatarSalvos() {
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i += 1) {
      const chave = localStorage.key(i);
      tarefas = JSON.parse(localStorage[chave]);
      criaLi();
    }
  }
}
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');
botaoSalvarTarefas.addEventListener('click', resgatarSalvos);
