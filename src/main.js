import { nanoid } from 'nanoid';

const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');
const taskKey = 'task_key';

//TODO-1
// Напишіть логіку обробнику подій по сабміту
// При сабміті треба у змінну записувати значення поля інпута
// Повинна бути перевірка на порожнє поле.

taskForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const value = evt.target.elements.taskName.value.trim();
  if (!value) return;
  const id = nanoid();
  taskList.insertAdjacentHTML('beforeend', addItem({ id, text: value }));
  addLocalStorage(value, id);
  evt.target.reset();
});

function addItem({ id, text }) {
  return `<li id="${id}">${text} <button class="close-btn" type="button">X</button></li>`;
}

//TODO-3
// Написати функцію, яка при сабміті буде зберігати данні в сховище по ключу task_key, в сховище повинні додаватись таски,
// а не перезаписуватись існуюча

function addLocalStorage(value, id) {
  const allValue = getFromLocalStorage(taskKey) ?? [];
  allValue.push({ id, text: value });
  setToLocalStorage(taskKey, allValue);
}

//TODO-4
//Відформатуйте код таким чином, щоб данні в сховищі зберігались у вигляді об'єкта { id: value, text: value}, розмітка додавалась з айдішніком на елемент списку li, айдішнік генерувати з допомогою бібліотеки nanoid, її треба встановити

//TODO-5
// Написати функцію, яка буде при завантаженні сторінки відмальовувати розмітку беручи данні з ЛС

(() => {
  const items = getFromLocalStorage(taskKey);
  if (!items) return;
  const markup = items.map(addItem).join('');
  taskList.insertAdjacentHTML('beforeend', markup);
})();

taskList.addEventListener('click', evt => {
  if (!evt.target.classList.contains('close-btn')) return;
  const id = evt.target.parentNode.id;
  const items = getFromLocalStorage(taskKey);
  const filteredItems = items.filter(item => item.id !== id);
  setToLocalStorage(taskKey, filteredItems);
  evt.target.parentNode.remove();
});

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
