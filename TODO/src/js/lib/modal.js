import { createElement } from './create-element.js'

export function modalForm() {
    const modal = createElement('div',
        `
            <div class="modal-dialog">
                <div class="modal-content p-3">
                <div class="modal-header">
                <h5 class="modal-title">Заполнить данные пользователя</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
                    
                </div>
            </div>

        ` ,
        { className: 'modal', tabindex: '-1' }
    )

    modal.style.display = 'block';

    const formAddUser = createElement('form',
        `
            <div class="col-md-4">
                <label for="validationDefault01" class="form-label">Имя</label>
                <input type="text" class="form-control" id="validationDefault01" name="firstName" required>
            </div>
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Фамилия</label>
                <input type="text" class="form-control" id="validationDefault02" name="lastName" required>
            </div>
            <div class="col-md-4">
                <label for="validationDefault03" class="form-label">Логин</label>
                <input type="text" class="form-control" id="validationDefault03" name="login" required>
            </div>
            <div class="col-md-4"
                <label for="validationDefault04" class="form-label">Отдел</label>
                <select class="form-select" id="validationDefault04" name="division" required>
                    <option selected disabled value="">Выбрать отдел</option>
                    <option value="Sale">Продажи</option>
                    <option value="Finance">Финансы</option>
                    <option value="Production">Производство</option>
                </select>
            </div>
            <div class="col-md-4">
                <label for="validationDefault05" class="form-label">Должность</label>
                <input type="text" class="form-control" id="validationDefault05" name="post" required>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Добавить</button>
            </div>       
        `,
        { className: `row g-3` }
    )

    modal.querySelector('.btn-close').addEventListener('click', function removeModal() {
        modal.remove();
        this.removeEventListener('click', removeModal);
    })

    modal.querySelector('.modal-content').append(formAddUser)
    return modal;
}
