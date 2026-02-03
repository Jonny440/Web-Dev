const input = document.querySelector('input');
const addButton = document.querySelector('.input-row button');
const taskList = document.querySelector('.task-list');

addButton.addEventListener('click', addTask);

function addTask() {
  const text = input.value.trim();
  if (text === '') return;

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  const li = document.createElement('li');
  li.className = 'task';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';

  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed', checkbox.checked);
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.append(checkbox, span, deleteBtn);
  taskList.appendChild(li);

  input.value = '';
}