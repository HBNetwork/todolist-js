window.addEventListener('load', (event) => {
  const btnAddTodo = document.querySelector('#btnAddTodo');

  const todoList = [];

  function addTodoToList(title) {
    todoList.push(title);
  }

  function imprimeTodo(title) {
    const todoContainer = document.querySelector('#todoContainer');
    todoContainer.innerHTML = title;
  }

  function reloadTodoList() {
    // todoList.map((todo) => {
    //   console.log(todo);
    // });

    // todoList.map(function (title) {
    //   console.log(title);
    // });
    let innerHTML = '';
    todoList.map((title) => {
      innerHTML += `<div class="form-check mt-3">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
      <label class="form-check-label" for="flexCheckDefault"> ${title} </label>
    </div>`;
    });

    imprimeTodo(innerHTML);
  }

  btnAddTodo.addEventListener('click', (e) => {
    const inputTitle = document.querySelector('#title');
    const title = inputTitle.value;

    if (!title || title.length === 0) {
      alert('O texto da tarefa não pode estar vazio');
      return false;
    }

    addTodoToList(title);
    inputTitle.value = '';

    reloadTodoList();
  });
});
