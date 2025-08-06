function addTask() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button onclick="removeTask(this)">Delete</button>
    `;

    document.getElementById('task-list').appendChild(li);
    input.value = '';
}

function toggleComplete(element) {
    element.parentElement.classList.toggle('completed');
}

function removeTask(button) {
    button.parentElement.remove();
}
