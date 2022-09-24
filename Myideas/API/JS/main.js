const list = document.querySelector('.list');
const url = 'https://gorest.co.in/public/v2/posts';
//const url = 'https://gorest.co.in/public-api/posts?page=10'
const commentsUrl = 'https://gorest.co.in/public/v2/comments';

async function getListOfArticles() {
    let response = await fetch(url);
    let data = await response.json();

    //renderArticles(data);

    return data;
}

// async function getListOfComments() {
//     let response = await fetch(commentsUrl);
//     let dataComments = await response.json();
//     console.log(dataComments);
// }

getListOfArticles();
renderArticles();

async function renderArticles() {

    let data = await getListOfArticles();

    data.forEach(item => {
        let li = document.createElement('li');
        li.classList.add('article');
        let link = document.createElement('a');
        link.classList.add('article__link');
        link.setAttribute('href', `post.html?id=${item.id}`);
        link.textContent = `${item.title}`;
        li.append(link);
        list.append(li);

    });
}

