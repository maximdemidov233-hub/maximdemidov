const player = document.getElementById('player');
const video = player.firstElementChild;
const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const position = document.querySelector('.position');
const posH = position.firstElementChild;
const mute = document.querySelector('.mute');
const value = document.querySelector('.value');
video.volume = 0.5;

video.addEventListener('canplay', () => {
    posH.style.width = '0%';
    play.style.backgroundImage = 'url(images/play.png';
    player.classList.add('active');
})

video.addEventListener('playing', () => {
    play.style.backgroundImage = 'url(images/pause.png';
    player.classList.remove('active');
})

video.addEventListener('pause', () => {
    play.style.backgroundImage = 'url(images/play.png';
    player.classList.add('active');

})

video.addEventListener('timeupdate', () => {
    posH.style.width = `${video.currentTime / video.duration * 100}%`;
})

play.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
})

stop.addEventListener('click', () => {
    video.load();
})

position.addEventListener('click', (e) => {
    video.currentTime = e.offsetX / position.clientWidth * video.duration;
    posH.style.width = `${video.currentTime / video.duration * 100}%`;
})
