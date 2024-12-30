const socialsBtn = document.querySelectorAll('.main__btn');

function toggle(btn) {

    const userInfo = document.querySelector('.main__user-info');
    const shareContainer = document.querySelector('.main__share');

    if (btn.parentElement === userInfo) {
        userInfo.style.display = 'none';
        shareContainer.style.display = 'flex';
        shareContainer.lastElementChild.focus();
    } else {
        userInfo.style.display = 'flex';
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

// instead of adding inline styles change to class?
// add role = "button" to svg icons
// change class names (bem?)
// add desktop styles
// add tab / enter event listeners for buttons