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
// const itensDaLista = document.getElementsByTagName('li');

// listaToDo.addEventListener('click', function() {
//      // for (let i = 0; i < listaToDo.childElementCount; i += 1) {
//     // if (itensDaLista[i].classList.contains('classGray') === true) {
//     //     itensDaLista[i].classList.remove('classGray');
//     //   }}
//     let itemClicado = event.target;
//     console.log(itemClicado);
//     itemClicado.classList.add('classGrey');
// });
listaToDo.addEventListener('click', function bkgdGray(event){
  let itemClicado = event.target;
  if (itemClicado.classList.contains('classGray') === false) {
    itemClicado.classList.add('classGray')
  } else if (itemClicado.classList.contains('classGray') === true) {
    itemClicado.classList.remove('classGray')
  }
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
