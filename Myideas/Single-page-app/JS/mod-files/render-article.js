import { getListOfArticles } from "./request.js";
import { createElem } from "../../assets/create-elem.js";
import { spinner } from "../../assets/spiner.js";
const list = document.querySelector('.container');
const url = 'https://gorest.co.in/public/v2/posts';
const spinnerWrapper = document.querySelector('.spinner__wrapper');

async function renderArticle() {
    spinnerWrapper.append(spinner);
    let search = window.location.search;
    let URLSearch = new URLSearchParams(search);
    let id = URLSearch.get('id');

    if (id) {
        let data = await getListOfArticles(url + `?id=${id}`);
        //window.history.pushState({ data }, '', `url + ?id=${id}`)

        const el = createElem('div',
            `
                <div>
                    <h2 class="article__title">${data[0].title}</h2 >
                    <p class="article__content">${data[0].body}</p>        
                </div>           
            `
        );
        list.append(el);
        spinnerWrapper.remove();
    }
    else {
        let data = await getListOfArticles(url);
        const titleList = createElem('h2', '<h2 class="title">Список статей</h2>');

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
        list.append(titleList);
        list.append(ol);
        spinnerWrapper.remove();
    }
}



