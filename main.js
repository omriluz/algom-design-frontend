import './style.css'

function closeMobileMenu(mobileMenu) {
    const closeMenuButton = document.querySelector('[data-menu-close-button]')
    closeMenuButton.addEventListener('click', () => {
        mobileMenu.dataset.menuOpen = 'false'
    })
}

function openMobileMenu(mobileMenu) {
    const openMenuButton = document.querySelector('[data-menu-open-button]')
    openMenuButton.addEventListener('click', () => {
        mobileMenu.dataset.menuOpen = 'true'
    })
}


function main() {
    const mobileMenu = document.querySelector('[data-menu-open]')
    closeMobileMenu(mobileMenu)
    openMobileMenu(mobileMenu)
}



window.addEventListener('DOMContentLoaded', main)