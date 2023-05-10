window.addEventListener('load', (event) => {
  const btnAddTodo = document.querySelector('#btnAddTodo');

  function addTodoToList() {}

  btnAddTodo.addEventListener('click', (e) => {
    const inputTitle = document.querySelector('#title');
    const title = inputTitle.value;

    if (!title || title.length === 0) {
      alert('O texto da tarefa não pode estar vazio');
      return false;
    }

    addTodoToList();
  });
});
