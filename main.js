const email = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

email.addEventListener('click', triggerShowMenu)

function triggerShowMenu() {
    desktopMenu.classList.toggle('inactive')
}