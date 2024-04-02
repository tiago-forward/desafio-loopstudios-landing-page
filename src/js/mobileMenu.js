const imageHamburger = document.getElementById('img-hamburger')
const imageClose = document.getElementById('img-close')
const mobileMenu = document.getElementById('mobile-menu')
const menuHeader = document.getElementById('nav-list-items-header')

function menuOpen(){
    mobileMenu.classList.toggle('closed')
    menuHeader.classList.toggle('closed')
    imageHamburger.classList.toggle('closed-img')
    imageClose.classList.toggle('closed-img')
}