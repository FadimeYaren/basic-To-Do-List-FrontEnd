document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(taskItem);

    document.getElementById('new-task').value = '';

    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
});
