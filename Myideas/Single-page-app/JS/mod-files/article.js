import { getListOfArticles } from "./request.js";
import { createElem } from "../../assets/create-elem.js";
import { spinner } from "../../assets/spiner.js";
import { renderListOfArticles } from "./render.js";

const url = 'https://gorest.co.in/public/v2/posts';
const spinnerWrapper = document.querySelector('.spinner__wrapper');

export async function renderArticle() {
    document.addEventListener('click', async (e) => {
        e.preventDefault();
        let target = e.target;
        if (target.matches('.article__link')) {
            let histUrl = target.href;
            let search = new URL(histUrl);
            let data = await getListOfArticles(url + `${search.search}`);
            history.pushState({ page: histUrl }, '', `${histUrl}`);

            document.querySelector('.container').remove();

            const el = createElem('div',
                `
                    <div>
                        <h2 class="article__title">${data[0].title}</h2 >
                        <p class="article__content">${data[0].body}</p>        
                    </div>           
                `
            );

            let newList = document.createElement('div');
            newList.classList.add('container__article');
            document.body.append(newList);
            newList.append(el);
            spinnerWrapper.remove();
        }
    })

    window.addEventListener('popstate', async (e) => {
        window.history.pushState({ page: 'index.html' }, '', 'index.html');
        await renderListOfArticles();
        console.log(history.state)

    })
}

