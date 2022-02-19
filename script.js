const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

/**
 * Shows hamburger menu with options for small screens
 * @param none
 * @return none
 */
function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

/**
 * Hides hamburger menu with options on close icon click
 * @param none
 * @return none
 */
function close() {
    mainMenu.style.top = '-100%';
}