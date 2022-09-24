const container = document.getElementById("container");
const scrollbar = document.getElementById("scrollbar");
const handle = scrollbar.firstElementChild;
let scrollbarHeight = scrollbar.offsetHeight;
let handleHeight = handle.offsetHeight;
let lastPos = 0;

function mMove(e) {
    container.removeEventListener('scroll', cOnScroll);
    let cursorShift = e.clientY - lastPos;
    let hadleShift = handle.offsetTop + cursorShift;
    let handleWidth = handle.offsetWidth;
    let scrollbarPosition = scrollbar.offsetLeft;

    if (e.clientX > scrollbarPosition + handleWidth - 1 || e.clientX < scrollbarPosition + 2 || e.clientY < scrollbar.offsetTop + scrollbar.clientTop * 3) {
        console.log(123, e.clientX, scrollbarPosition)
        mUp(e);
    }

    if (hadleShift > 0 && hadleShift < (scrollbarHeight - handleHeight)) {
        handle.style.top = `${hadleShift}px`;
        handle.style.transition = '';
        let containerShift = (container.scrollHeight - container.clientHeight + handleHeight) * hadleShift / scrollbarHeight;
        container.scrollTop = containerShift;
        container.style.scrollBehavior = 'unset';
        lastPos = e.clientY;
    }
}

function mUp(e) {
    handle.removeEventListener('mousemove', mMove);
    handle.removeEventListener('mouseup', mUp);
}

handle.addEventListener('mousedown', function (e) {
    e.preventDefault();

    lastPos = e.clientY;
    handle.addEventListener('mousemove', mMove);
    handle.addEventListener('mouseup', mUp);
    handle.ondragstart = function () {
        return false;
    };
})

scrollbar.addEventListener('click', hMoveOnClick);

function hMoveOnClick(e) {
    e.preventDefault();
    container.removeEventListener('scroll', cOnScroll);
    if (e.target != this) return;
    let handlePos = 0;
    let ePos = e.clientY - scrollbar.offsetTop + scrollbar.clientTop;

    if (ePos > 0 && ePos < (scrollbarHeight)) {
        handle.style.top = `${ePos}px`;
        handle.style.transition = 'top 0.2s linear';

        if (ePos < handlePos) {
            handlePos -= ePos;
        }
        else {
            handlePos += ePos;
        }

        if (ePos < scrollbarHeight && ePos > scrollbarHeight - handleHeight) {
            handle.style.top = `${scrollbarHeight - handleHeight}px`;
            handlePos = scrollbarHeight - handleHeight
        }
        else if (ePos > 0 && ePos < handleHeight) {
            handle.style.top = `0px`;
            handlePos = 0;
        }
        let containerShift = (container.scrollHeight - container.clientHeight + handleHeight) * handlePos / scrollbarHeight;
        container.scrollTop = containerShift;
        container.style.scrollBehavior = 'smooth';
    }
}

container.addEventListener('scroll', cOnScroll);

function cOnScroll(e) {
    console.log(123)
    containerScroll = container.scrollTop;
    if (containerScroll > scrollbarHeight - handleHeight) {
        handle.style.top = `${scrollbarHeight - handleHeight}px`
    } else {
        handle.style.top = `${containerScroll}px`;
    }
}

container.addEventListener('mouseover', (e) => {
    mUp(e);
    container.addEventListener('scroll', cOnScroll);

})

