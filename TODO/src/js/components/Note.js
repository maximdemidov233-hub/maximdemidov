import { NoteList } from "./Note-list.js";

export class Note {
    _name = '';
    _done = false;
    constructor(container, name = '', done = false) {

        this.item = document.createElement('div');
        this.buttonGroup = document.createElement("div");
        this.nameSpan = document.createElement("span");
        this.doneButton = document.createElement("button");
        this.deleteButton = document.createElement("button");
        this.name = name;
        this.done = done;
        this.container = container;

        this.item.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );

        this.buttonGroup.classList.add("btn-group", "btn-group-sm");
        this.doneButton.classList.add("btn", "btn-success");
        this.doneButton.textContent = "Готово";
        this.deleteButton.classList.add("btn", "btn-danger");
        this.deleteButton.textContent = "Удалить";

        this.doneButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.done = !this.done;
            this.container.changeTodos(this.id, this.done);
        })

        this.deleteButton.addEventListener('click', () => {
            confirm(' Вы уверены');
            console.log(this)
            this.item.remove();
            this.container.checkEmpty();
            this.container.deletTodos(this.id);
            //this.container.setStorage();
        })

        this.buttonGroup.append(this.doneButton);
        this.buttonGroup.append(this.deleteButton);
        this.item.append(this.nameSpan);
        this.item.append(this.buttonGroup);

        if (container instanceof NoteList) {
            container.list.prepend(this.item);
        } else {
            container.append(this.item);
        }
    }

    set name(value) {
        this._name = value;
        this.nameSpan.textContent = value;
    }

    get name() {
        return this._name;
    }

    set done(value) {
        this._done = value;
        if (value) {
            this.item.classList.add("list-group-item-success");
        }
        else {
            this.item.classList.remove("list-group-item-success");
        }
    }

    get done() {
        return this._done;
    }
}
