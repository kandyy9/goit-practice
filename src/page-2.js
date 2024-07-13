import { immediateMarkup } from './js/immediateMarkup';
import { taskKey } from './js/constants';
import refs from './js/refs';
import { delElement } from './js/delElement';

immediateMarkup(refs.newList, taskKey);
delElement({ taskKey, list: refs.newList });
