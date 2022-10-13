const email = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenuIcon = document.querySelector('.mobile-menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')

email.addEventListener('click', () => {triggerMenu("desktop")})
mobileMenuIcon.addEventListener('click', () => {triggerMenu("mobile")})

function triggerMenu(menuType) {
    if(menuType === "desktop") desktopMenu.classList.toggle('inactive')
    if(menuType === "mobile") mobileMenu.classList.toggle('inactive')
}