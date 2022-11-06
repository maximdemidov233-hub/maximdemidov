import { NoteList } from "./Note-list.js";
//import { modalForm } from "../lib/modal.js";

export class Todo {
  _notes = null;
  _users = [];

  constructor(container) {
    this.container = container;

    this.nav = document.createElement("nav")
    this.title = document.createElement("h2");
    this.form = document.createElement("form");
    this.input = document.createElement("input");
    this.buttonWrapper = document.createElement("div");
    this.button = document.createElement("button");
    this.list = document.createElement("div");

    this.container.classList.add('pt-5', 'pb-5')
    this.nav.classList.add("btn-group");
    this.form.classList.add("input-group", "mb-3");
    this.input.classList.add("form-control");
    this.input.placeholder = "Введите название нового дела";
    this.buttonWrapper.classList.add("input-group-append");
    this.button.classList.add("btn", "btn-primary");
    this.button.textContent = "Добавить дело";
    this.button.disabled = true;

    this.buttonWrapper.append(this.button);
    this.form.append(this.input);
    this.form.append(this.buttonWrapper);
    this.container.append(this.nav);
    this.container.append(this.title);
    this.container.append(this.form);
    this.container.append(this.list);

    this.input.addEventListener('input', (e) => {
      this.button.disabled = false;
      if (this.input.value.length == 0) {
        this.button.disabled = true;
      }
    })

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log("111")
      if (!this.input.value) {
        return;
      }
      this._notes.add(this.input.value);
      this.button.disabled = true;
      this.input.value = '';
    })
    this.addUser();
  }

  async initPage() {
    this._notes = new NoteList(this.list);
    this.title.textContent = this._notes.key;
    this._notes.initList();
    this.getListUsers();
  }

  async getListUsers() {
    const usersList = await this.getUsers();
    console.log(usersList);
    this.select = document.createElement('select');
    this.select.classList.add('form-select');
    const optionSelected = document.createElement('option');
    // optionSelected.setAttribute('selected', true);
    // optionSelected.setAttribute('disabled', true);
    optionSelected.textContent = 'Выберите пользователя';
    this.select.append(optionSelected);
    usersList.forEach(item => {
      const option = document.createElement('option');
      option.value = item.userName;
      option.textContent = item.name;
      this.select.append(option);
    })
    this.nav.append(this.select)

  }

  setUserId() {
    let max = 0;
    for (let note of this._users) {
      if (note.id > max) {
        max = note.id;
      }
    }
    return max + 1;
  }

  addUser() {
    let addButton = document.getElementById('action');
    addButton.addEventListener('click', () => {
      const modal = modalForm();
      document.body.append(modal);

      const form = modal.querySelector('form')
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const user = {
          name: `${form.firstName.value} ${form.lastName.value}`,
          userName: form.login.value,
          division: form.division.value,
          post: form.post.value,
          //id: this.setUserId(),
        }

        console.log(user)

        this.postUsers(user);
        this._users.push(user);

        for (let input of form.elements) {
          input.value = ''
        }

        modal.remove();
      })
    })
  }

  //Запросы к серверу
  async postUsers(user) {
    const response = await fetch('http://localhost:3000/users',
      {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }),
      }
    );
    const data = await response.json();
  }

  async getUsers() {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    return users;
  }
}

