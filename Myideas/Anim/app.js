let title = document.querySelector('.block__title');
let textLeft = document.querySelector('.block__text_left');
let textRight = document.querySelector('.block__text_right');
let block = document.querySelector('.block');

const timerId = setTimeout(() => {
    block.style.opacity = '0';
    block.style.transition = 'opacity 5s ease';

}, 20000)

window.onload = () => {
    title.style.transform = 'translateX(0)';
    title.style.opacity = '1';
    title.style.transition = 'transform 10s ease, opacity 10s ease';

    textLeft.classList.remove('block__text_left')
    textLeft.classList.add('block__text_left-transform')

    textRight.classList.remove('block__text_right')
    textRight.classList.add('block__text_right-transform')
}
