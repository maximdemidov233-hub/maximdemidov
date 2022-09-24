// const options = {
//     rootMargins: '0px 0px -300px 0px',
//     //threshold: [0.5]
// }

// console.log(document.documentElement.clientHeight)

// const vd = new IntersectionObserver(vdHandler, options);

// function vdHandler(els, detector) {
//     //console.log(els)
//     els.forEach(e => {
//         if (e.isIntersecting) {
//             console.log(e)
//             e.target.src = e.target.getAttribute('dsrc')
//             //setTimeout(() => e.target.src = e.target.getAttribute('dsrc'), 1000);


//             // if (e.target.src) {
//             //     return
//             // } else {
//             //     setTimeout(() => e.target.src = e.target.getAttribute('dsrc'), 1000);
//             // }

//             vd.unobserve(e.target)
//         }
//     });

// }


// const imgs = document.querySelectorAll('img');

// imgs.forEach((img) => {
//     vd.observe(img)
// })

//------------------------------------------------------------------

const imgs = document.querySelectorAll('img');
let viewPort = document.documentElement.clientHeight;
console.log(window.innerHeight, viewPort)

function lazyload() {
    imgs.forEach((img) => {
        if (img.getBoundingClientRect().top <= viewPort - 200) {
            !img.src ? img.src = img.getAttribute('dsrc') : null;
        }
    })
}

document.addEventListener('scroll', lazyload);
document.addEventListener('resize', lazyload);