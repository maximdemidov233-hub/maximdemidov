let cssPromises = {};

function loadResurse(src) {
  if (src.endsWith(".js")) {
    return import(src);
  }

  if (src.endsWith(".css")) {
    if (!cssPromises[src]) {
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = src;

      cssPromises[src] = new Promise((resolve) => {
        link.addEventListener("load", () => resolve());
      });
      document.head.append(link);
    }
    return cssPromises[src];
  }

  return fetch(src).then((res) => res.json());
}

Promise.all(
  [
    "./product-list.js",
    "https://gorest.co.in/public-api/posts",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
  ].map((src) => loadResurse(src))
).then(([pageModule, data]) => {
  console.log(pageModule);
  pageModule.render(data);
});
