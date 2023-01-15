import { getListOfArticles } from "./request.js";
import { createElem } from "../../assets/create-elem.js";
import { spinner } from "../../assets/spiner.js";

const url = 'https://gorest.co.in/public/v2/posts';
const spinnerWrapper = document.querySelector('.spinner__wrapper');

export async function renderListOfArticles() {
    spinnerWrapper.append(spinner);
    let data = await getListOfArticles(url);
    const titleList = createElem('h2', '<h2 class="title">Список статей</h2>');

    if (document.querySelector('.container__article')) {
        document.querySelector('.container__article').remove();
    }

    const list = document.createElement('div');
    list.classList.add('container');
    document.body.append(list);


    const ol = createElem('ol', '<ol class="article__list"></ol>');
    data.forEach(item => {
        const el = createElem('li', `
                <li class='article__item'>
                    <a class='article__link' href='index.html?id=${item.id}'>${item.title}</a>        
                </li>
            `
        );
        ol.append(el);
    });
    window.history.pushState({ page: 'index.html' }, '', 'index.html');

    list.append(titleList);
    list.append(ol);
    spinnerWrapper.remove();
    window.history.pushState({ page: 'index.html' }, '', 'index.html');
    return ol.children;
}
