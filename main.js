const hambergerIcon = document.querySelector(".hamberger-icon");
hambergerIcon.addEventListener('click', () => {
    hambergerIcon.classList.toggle('open')
    const toggleMenu = document.querySelector('header .navigation');
    toggleMenu.classList.toggle('show')
})