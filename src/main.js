import { nanoid } from 'nanoid';
import { getFromLocalStorage, setToLocalStorage } from './js/ls-helpers';
import refs from './js/refs';
import { taskKey } from './js/constants';
import { immediateMarkup } from './js/immediateMarkup';
import { delElement } from './js/delElement';
//TODO-1
// Напишіть логіку обробнику подій по сабміту
// При сабміті треба у змінну записувати значення поля інпута
// Повинна бути перевірка на порожнє поле.
delElement({ elemOfList: refs.taskList, taskKey });
immediateMarkup(refs.taskList, taskKey);
refs.taskForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const value = evt.target.elements.taskName.value.trim();
  if (!value) return;
  const id = nanoid();
  addItem(value, id);
  addLocalStorage(value, id);
  evt.target.reset();
});

function addItem(item, id) {
  refs.taskList.insertAdjacentHTML(
    'beforeend',
    `<li id="${id}">${item} <button class="close-btn" type="button">X</button></li>`
  );
}

//TODO-3
// Написати функцію, яка при сабміті буде зберігати данні в сховище по ключу task_key, в сховище повинні додаватись таски,
// а не перезаписуватись існуюча

function addLocalStorage(value, id) {
  const allValue = getFromLocalStorage(taskKey) ?? [];
  allValue.push({ id, text: value });
  setToLocalStorage(allValue, taskKey);
}

//TODO-4
//Відформатуйте код таким чином, щоб данні в сховищі зберігались у вигляді об'єкта { id: value, text: value}, розмітка додавалась з айдішніком на елемент списку li, айдішнік генерувати з допомогою бібліотеки nanoid, її треба встановити

//TODO-5
// Написати функцію, яка буде при завантаженні сторінки відмальовувати розмітку беручи данні з ЛС
