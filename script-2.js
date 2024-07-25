function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value.trim();
    if (taskValue === "") return;
    
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.innerHTML = taskValue + ' <span onclick="removeTask(this)">&#10060;</span>';
    taskList.appendChild(newTask);
    
    taskInput.value = ""; // Clear the input field
}

function removeTask(element) {
    const task = element.parentElement;
    task.remove();
}
