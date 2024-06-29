const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');
const taskKey = "task_key";
  
  
//TODO-1
// Напишіть логіку обробнику подій по сабміту
// При сабміті треба у змінну записувати значення поля інпута
// Повинна бути перевірка на порожнє поле.

taskForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const value = evt.target.elements.taskName.value.trim();
  if (!value) return;
  console.log(value);
  addItem(value);
  addLocalStorage(value);
  evt.target.reset();
});

function addItem(item) {
  taskList.insertAdjacentHTML(
    'beforeend',
    `<li>${item} <button type="button">X</button></li>`
  );
}

//TODO-3
// Написати функцію, яка при сабміті буде зберігати данні в сховище по ключу task_key, в сховище повинні додаватись таски,
// а не перезаписуватись існуюча


function addLocalStorage(value) {
  const allValue = JSON.parse(localStorage.getItem(taskKey)) ?? [];
  
  allValue.push(value);
  localStorage.setItem(taskKey, JSON.stringify(allValue));
}
