import { Dropdown } from './components/Dropdown.js';
import { OptionsList } from './components/OptionsList.js';
import { dropdownList } from './lib/dropdown-list.js';


const root = document.querySelector('#dropdown');

const dropdown = new Dropdown(root, dropdownList);
dropdown.render();
