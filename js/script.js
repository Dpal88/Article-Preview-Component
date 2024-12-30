const socialsBtn = document.querySelectorAll('.main__btn');
console.log(socialsBtn);

socialsBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        // const container = btn.parentElement;
        // container.classList.toggle("flex");

        const userInfo = document.querySelector('.main__user-info');
        const shareContainer = document.querySelector('.main__share');

        if (btn.parentElement === userInfo) {
            userInfo.style.display = 'none';
            shareContainer.style.display = 'flex';
        } else {
            userInfo.style.display = 'flex';
            shareContainer.style.display = 'none';
        }
    })
})

// instead of adding inline styles change to class?
// add role = "button" to svg icons
// change class names (bem?)
// add desktop styles
// add tab / enter event listeners for buttons