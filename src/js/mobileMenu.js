function menuOpen(){
    console.log('test')
    const mobileMenu = document.getElementById('mobile-menu')
    mobileMenu.classList.toggle('closed')
    const menuHeader = document.getElementById('nav-list-items-header')
    menuHeader.classList.toggle('closed') 
}