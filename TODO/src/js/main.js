import '../index.html';
import '../scss/main.scss';

import { Todo } from './components/Todo-app.js';

let app = new Todo(document.getElementById('app'));

document.addEventListener("DOMContentLoaded", app.initPage());