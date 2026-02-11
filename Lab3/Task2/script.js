document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    const createTaskElement = (taskText) => {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        checkbox.addEventListener('change', (event) => {
            const textSpan = event.target.nextElementSibling;
            if (event.target.checked) {
                textSpan.classList.add('completed');
            } else {
                textSpan.classList.remove('completed');
            }
        });

        const span = document.createElement('span');
        span.textContent = taskText;
        span.className = 'task-text';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '&#128465;';
        deleteBtn.className = 'btn-delete';
        deleteBtn.setAttribute('aria-label', 'Delete task');

        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        return li;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const taskValue = todoInput.value.trim();

        if (!taskValue) {
            alert('Please enter a task.');
            return;
        }

        const newTaskElement = createTaskElement(taskValue);
        todoList.appendChild(newTaskElement);

        todoInput.value = '';
        todoInput.focus();
    };

    todoForm.addEventListener('submit', handleFormSubmit);
});