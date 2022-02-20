const mainMenu = document.querySelector(".main-menu");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const openFilterMenu = document.querySelector(".add-filter-btn");
const filterSection = document.querySelector(".prod-filters");
const closeFilter = document.querySelector(".close-filter");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
openFilterMenu.addEventListener("click", showFilter);
closeFilter.addEventListener("click", closeFilter);

/**
 * Shows hamburger menu with options for small screens
 * @param none
 * @return none
 */
function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
}

/**
 * Hides hamburger menu with options on close icon click
 * @param none
 * @return none
 */
function close() {
    mainMenu.style.top = "-100%";
}

/**
 * Shows hamburger menu with options for small screens
 * @param none
 * @return none
 */
function showFilter() {
    filterSection.style.display = "block";
    filterSection.style.left = "0";
    // filterSection.style.top = "0";
}

/**
 * Hides hamburger menu with options on close icon click
 * @param none
 * @return none
 */
function closeFilter() {
    filterSection.style.left = "-100%";
}