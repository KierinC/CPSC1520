/*
    Todolist

    We're going to make a todolist that counts how many todos we've completed.
    We'll do this using objects in the todos array shown below.

    HTML FOR The todo

    <li class="list-group-item">
        <input class="form-check-input todo-status"
            todo-id="INDEX HERE"
            type="checkbox"
            value="TODO VALUE WITH INDEX HERE"
            TODO COMPLETE TERNARY HERE>
        DESCRIPTION HERE

    </li>

*/

(function () {
    let todos = [
        {
            description: 'Todo 1',
            complete: false,
    
        },
        {
            description: 'Todo 2',
            complete: true,
        }
    ];
    
    let todoListElement = document.querySelector('.todo-list');
    let todoFormElement = document.querySelector('#add-todo-form');
    let updateCountElement = document.querySelector('#todo-complete-count');

    todoListElement.addEventListener('change', (evt) => {
        let todoCheck = evt.target;
        let todoId = todoCheck.getAttribute('todo-id');

        // toggle the complete property for the todo
        todos[todoId].complete = !todos[todoId].complete;
        // TODO: update the count
        updateCount();
    });

    todoFormElement.addEventListener('submit', (evt) => {
        evt.preventDefault();

        let todoDescription = evt.target.elements['todo-description'].value;
        addTodo(todoDescription);
    });

    function updateCount() {
        let count = 0;

        // intro to reduce() function
        let finalCount = todos.reduce((previousValue, todo) => {
            if (todo.complete) {
                previousValue += 1;
            }
            return previousValue;
        }, count);

        updateCountElement.innerText = finalCount;

        // more simple for loop method
        // for (todo of todos) {
        //     if (todo.complete) {
        //         count += 1;
        //     }
        // }
        // updateCountElement.innerText = count;
    }
    
    function addTodo(todoDescription) {
        let newTodo = {
            description: todoDescription,
            complete: false,
        };
        todos.push(newTodo);
        renderTodos();
    }

    function renderTodos() {
        todoListElement.innerHTML = '';
    
        todos.forEach((todo, idx) => {
            todoListElement.innerHTML += `<li class="list-group-item">
                <input class="form-check-input todo-status"
                todo-id="${idx}"
                type="checkbox"
                value="todo-${idx}"
                ${todo.complete? 'checked' : ''}>
                ${todo.description}
            </li>`;
        });
    }
    
    renderTodos();
    updateCount();
})();