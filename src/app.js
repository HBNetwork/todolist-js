window.addEventListener('load', (event) => {
  const btnAddTodo = document.querySelector('#btnAddTodo');

  const todoList = [];

  function handleCheckbox(e) {
    console.log(e.target.checked);
  }

  function addTodoToList(title) {
    const todo = {
      title: title,
      done: false,
    };

    todoList.push(todo);

    console.log(todoList);
  }

  function reloadTodoList() {
    // todoList.map((todo) => {
    //   console.log(todo);
    // });

    // todoList.map(function (title) {
    //   console.log(title);
    // });

    const todoContainer = document.querySelector('#todoContainer');
    todoContainer.innerHTML = '';

    const todos = todoList.map((todo) => {
      const div = document.createElement('div');
      div.setAttribute('class', 'form-check mt-3');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('class', 'form-check-input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('onclick', () => handleCheckbox(this));
      checkbox.setAttribute('value', todo.title);

      const label = document.createElement('label');
      label.setAttribute('class', 'form-check-label');
      label.innerHTML = todo.title;

      div.appendChild(checkbox);
      div.appendChild(label);

      todoContainer.appendChild(div);
    });
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
