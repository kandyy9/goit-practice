import { getFromLocalStorage, setToLocalStorage } from './ls-helpers';

export function delElement(elemOfList, taskKey) {
  elemOfList.addEventListener('click', evt => {
    if (!evt.target.classList.contains('close-btn')) return;
    const id = evt.target.parentNode.id;
    const items = getFromLocalStorage(taskKey);
    const filteredItems = items.filter(item => item.id !== id);
    setToLocalStorage(filteredItems, taskKey);
    evt.target.parentNode.remove();
  });
}
