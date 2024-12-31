const socialsBtn = document.querySelectorAll('.main__btn');

function toggle(btn) {

    const userInfo = document.querySelector('.main__user-info');
    let ariaExpandedValue = userInfo.lastElementChild.getAttribute("aria-expanded");
    const shareContainer = document.querySelector('.main__share');

    if (window.screen.width < 890) {
        if (btn.parentElement === userInfo) {

            userInfo.classList.toggle('hide');
            shareContainer.classList.toggle('main__flex--row');
            ariaExpandedValue = "true";
            shareContainer.lastElementChild.focus();
        } else {

            userInfo.classList.toggle('hide');
            shareContainer.classList.toggle('main__flex--row');
            ariaExpandedValue = "false";
            userInfo.lastElementChild.focus();
        }
    } else if (shareContainer.classList.contains('main__flex--row')) {

        btn.firstElementChild.classList.toggle('color-dk');
        btn.lastElementChild.classList.toggle('color-lt');

        shareContainer.classList.toggle('main__flex--row');
        ariaExpandedValue = "false";
        userInfo.lastElementChild.focus();
    } else {

        btn.firstElementChild.classList.toggle('color-dk');
        btn.lastElementChild.classList.toggle('color-lt');

        shareContainer.classList.toggle('main__flex--row');
        ariaExpandedValue = "true";
        userInfo.lastElementChild.focus();
    }

    userInfo.lastElementChild.setAttribute("aria-expanded", ariaExpandedValue);

}

socialsBtn.forEach(btn => {
    btn.addEventListener('click', e => {

        toggle(btn);
    })
})

socialsBtn.forEach(btn => {
    btn.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            toggle(btn);
        }
    })
})

window.addEventListener('resize', () => {

    const userInfo = document.querySelector('.main__user-info');
    const shareContainer = document.querySelector('.main__share');

    if (window.screen.width < 890) {
        if (shareContainer.classList.contains('main__flex--row')) {
            userInfo.classList.add('hide');
        }
    } else {
        userInfo.classList.remove('hide');
    }

})
