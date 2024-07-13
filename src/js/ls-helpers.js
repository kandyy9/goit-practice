export function getFromLocalStorage(key){
  const allValue = JSON.parse(localStorage.getItem(key));
  return allValue;
}

export function setToLocalStorage(value, key) {
  localStorage.setItem(key, JSON.stringify(value));
}