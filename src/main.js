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
  console.log(value);
  addItem(value, id);
  addLocalStorage(value, id);
  evt.target.reset();
});

function addItem(item, id) {
  taskList.insertAdjacentHTML(
    'beforeend',
    `<li id="${id}">${item} <button type="button">X</button></li>`
  );
}

//TODO-3
// Написати функцію, яка при сабміті буде зберігати данні в сховище по ключу task_key, в сховище повинні додаватись таски,
// а не перезаписуватись існуюча

function addLocalStorage(value, id) {
  const allValue = JSON.parse(localStorage.getItem(taskKey)) ?? [];
  allValue.push({ id, text: value });
  localStorage.setItem(taskKey, JSON.stringify(allValue));
}

//TODO-4
//Відформатуйте код таким чином, щоб данні в сховищі зберігались у вигляді об'єкта { id: value, text: value}, розмітка додавалась з айдішніком на елемент списку li, айдішнік генерувати з допомогою бібліотеки nanoid, її треба встановити


//TODO-5
// Написати функцію, яка буде при завантаженні сторінки відмальовувати розмітку беручи данні з ЛС

(() => {
  const items = JSON.parse(localStorage.getItem(taskKey));
  const markup = items.map((item) => {
    return `<li id="${item.id}">${item.text} <button type="button">X</button></li>`;
  }).join('')
  taskList.insertAdjacentHTML('beforeend', markup);
})();
