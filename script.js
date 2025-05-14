function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;
  
    const taskList = document.getElementById('taskList');
  
    const li = document.createElement('li');
  
    const span = document.createElement('span');
    span.textContent = taskText;
    span.onclick = () => span.classList.toggle('completed');
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = () => li.remove();
  
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    input.value = '';
  }
  
