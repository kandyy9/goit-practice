const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');

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
  evt.target.reset();
});

function addItem(item) {
  taskList.insertAdjacentHTML(
    'beforeend',
    `<li>${item} <button type="button">X</button></li>`
  );
}
