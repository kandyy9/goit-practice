import { nanoid } from 'nanoid';
import { getFromLocalStorage, setToLocalStorage } from './js/ls-helpers'

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
  addItem(value, id);
  addLocalStorage(value, id);
  evt.target.reset();
});

function addItem(item, id) {
  taskList.insertAdjacentHTML(
    'beforeend',
    `<li id="${id}">${item} <button class="close-btn" type="button">X</button></li>`
  );
}

//TODO-3
// Написати функцію, яка при сабміті буде зберігати данні в сховище по ключу task_key, в сховище повинні додаватись таски,
// а не перезаписуватись існуюча

function addLocalStorage(value, id) {
  const allValue = getFromLocalStorage(taskKey)?? [];
  allValue.push({ id, text: value });
  setToLocalStorage(allValue, taskKey);
}

//TODO-4
//Відформатуйте код таким чином, щоб данні в сховищі зберігались у вигляді об'єкта { id: value, text: value}, розмітка додавалась з айдішніком на елемент списку li, айдішнік генерувати з допомогою бібліотеки nanoid, її треба встановити


//TODO-5
// Написати функцію, яка буде при завантаженні сторінки відмальовувати розмітку беручи данні з ЛС

(() => {
    const items = getFromLocalStorage(taskKey);
    if (!items) return;
  const markup = items.map((item) => {
    return `<li id="${item.id}">${item.text} <button class="close-btn" type="button">X</button></li>`;
  }).join('')
  taskList.insertAdjacentHTML('beforeend', markup);
})();


taskList.addEventListener("click", (evt) => {
    if (!(evt.target.classList.contains("close-btn"))) return;
    const id = evt.target.parentNode.id;
    const items = getFromLocalStorage(taskKey);
    const filteredItems = items.filter((item) => item.id !== id);
    setToLocalStorage(filteredItems, taskKey);
    evt.target.parentNode.remove();
})