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