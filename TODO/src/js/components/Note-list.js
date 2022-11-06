import { Note } from "./Note.js";

export class NoteList {
    _notes = [];

    constructor(container, key = 'Все задачи') {
        this.container = container;
        this.list = document.createElement('div');
        this.list.classList.add('list-group');

        this.container.innerHTML = '';
        this.container.append(this.list);
        this.checkEmpty();
        this.key = key;
    }

    async initList() {
        const storageList = await this.getTodos();
        if (!storageList) {
            return;
        }

        for (let note of storageList) {
            let savedListItem = new Note(this, note.name, note.done);
            savedListItem.id = note.id;
            this._notes.push(savedListItem);
            this.checkEmpty();
        }
    }

    add(name, done = false) {
        let newNote = new Note(this, name, done);
        this._notes.push(newNote);
        console.log(this._notes)
        this.checkEmpty();
        let newItem = {
            name: newNote._name,
            done: newNote._done
        }
        this.postTodos(newItem);
    }

    checkEmpty() {
        if (this._notes.length == 0) {
            this.empty = document.createElement('div');
            this.empty.classList.add(
                'd-flex',
                'list-group-item',
                'justify-content-center',
                'align-item-center',
                'text-secondary',
                'bg-light',
                'p-5'
            )
            this.empty.textContent = 'Список пуст';
            this.container.append(this.empty);
        } else {
            this.empty.remove();
        }
    }

    //Запросы к серверу
    async getTodos() {
        const response = await fetch('http://localhost:3000/todos');
        const todos = await response.json();

        console.log(todos)

        return todos;
    }

    async postTodos(todos) {
        const response = await fetch('http://localhost:3000/todos',
            {
                method: 'POST',
                body: JSON.stringify(todos),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        );
        // const data = await response.json();
        // console.log(data)

    }

    async changeTodos(id, done) {
        const response = await fetch(`http://localhost:3000/todos/${id}`,
            {
                method: 'PATCH',
                body: JSON.stringify({ done }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        );

    }

    async deletTodos(id) {
        const response = await fetch(`http://localhost:3000/todos/${id}`,
            {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        );

    }
}


// setId() {
    //     let max = 0;
    //     for (let note of this._notes) {
    //         if (note.id > max) {
    //             max = note.id;
    //         }
    //     }
    //     return max + 1;
    // }

    // setStorage(todoItem) {
    //     //let listOfDones = [];
    //     //let todoItem = null;

    //     // for (let note of this._notes) {
    //     //     todoItem = {
    //     //         name: note._name,
    //     //         done: note._done,
    //     //         //id: note.id
    //     //     }
    //     //     //listOfDones.push(todoItem)

    //     // }
    //     //localStorage.setItem(this.key, JSON.stringify(listOfDones));
    //     this.postTodos(todoItem);
    // }

    // removeNote(id) {
    //     for (let i = 0; i < this._notes.length; i++) {
    //         if (this._notes[i].id == id) {
    //             this._notes.splice(i, 1)
    //             console.log(this._notes)
    //         }
    //     }
    // }