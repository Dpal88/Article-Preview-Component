const socialsBtn = document.querySelectorAll('.main__btn');

function toggle(btn) {

    const userInfo = document.querySelector('.main__user-info');
    const shareContainer = document.querySelector('.main__share');

    if (window.screen.width < 768) {
        if (btn.parentElement === userInfo) {
            // userInfo.style.display = 'none';
            // shareContainer.style.display = 'flex';
            userInfo.classList.toggle('hide');
            shareContainer.classList.toggle('main__flex--row');
            shareContainer.lastElementChild.focus();
        } else {
            // userInfo.style.display = 'flex';
            // shareContainer.style.display = 'none';
            userInfo.classList.toggle('hide');
            shareContainer.classList.toggle('main__flex--row');
            userInfo.lastElementChild.focus();
        }
    } else if (btn.parentElement === userInfo) {
        // shareContainer.style.display = 'flex';
        shareContainer.classList.toggle('main__flex--row');
        userInfo.lastElementChild.focus();
    } else {
        shareContainer.style.display = 'none';
        userInfo.lastElementChild.focus();
    }
    

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

    if (window.screen.width < 768) {
        if (shareContainer.classList.contains('main__flex--row')) {
            userInfo.classList.add('hide');
        }
    } else {
        userInfo.classList.remove('hide');
    }
})

// instead of adding inline styles change to class?
// add role = "button" to svg icons
// change class names (bem?)
// add desktop styles
// add tab / enter event listeners for buttons