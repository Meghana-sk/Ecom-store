const openFilterMenu = document.querySelector(".add-filter-btn");
const filterSection = document.querySelector(".prod-filters");
const closeIcon = document.querySelector(".close-filter");

openFilterMenu.addEventListener("click", showFilter);
closeIcon.addEventListener("click", closeFilter);

/**
 * Shows filter side bar with options for small screens
 * @param none
 * @return none
 */
function showFilter() {
    filterSection.style.display = "block";
    filterSection.style.left = "0";
}

/**
 * Hides filter side bar with options on close icon click
 * @param none
 * @return none
 */
function closeFilter() {
    filterSection.style.left = "-100%";
}