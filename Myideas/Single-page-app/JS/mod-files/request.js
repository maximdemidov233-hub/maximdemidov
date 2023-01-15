export async function getListOfArticles(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}