document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();
  if (!taskText) {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement('li');
  li.className = 'task-item';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '✔';
  completeBtn.title = 'Mark as complete';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑';
  deleteBtn.title = 'Delete task';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskContent);
  li.appendChild(actions);

  document.getElementById('task-list').appendChild(li);
  input.value = '';
}
