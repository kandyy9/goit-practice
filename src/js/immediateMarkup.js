import { getFromLocalStorage } from './ls-helpers';
import { taskKey } from './constants';
import refs from './refs';
// import { getFromLocalStorage } from './ls-helpers';
export function immediateMarkup() {
  const items = getFromLocalStorage(taskKey);
  if (!items) return;
  const markup = items
    .map(item => {
      return `<li id="${item.id}">${item.text} <button class="close-btn" type="button">X</button></li>`;
    })
    .join('');
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}
