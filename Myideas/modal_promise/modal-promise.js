let cssPromise = null;

function loadModalCss() {
  if (cssPromise) return cssPromise;

  cssPromise = new Promise((resolve) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./modal.css";
    link.addEventListener("load", () => {
      resolve();
    });
    document.head.append(link);
  });

  return cssPromise;
}

async function askConfirmation(text = "Закрыть модальное окно?") {
  await loadModalCss();

  let root = document.createElement("div");
  let win = document.createElement("div");
  let paragraph = document.createElement("p");
  let btnYes = document.createElement("button");
  let btnNo = document.createElement("button");

  root.classList.add("modal__root");
  win.classList.add("modal__win");

  root.append(win);
  win.append(paragraph, btnYes, btnNo);

  paragraph.textContent = text;
  btnYes.textContent = "ДА";
  btnNo.textContent = "НЕТ";

  document.body.append(root);

  btnYes.addEventListener("click", () => {
    root.remove();
    console.log(true);
  });
}

document.getElementById("modal__open").addEventListener("click", () => {
  askConfirmation();
});
