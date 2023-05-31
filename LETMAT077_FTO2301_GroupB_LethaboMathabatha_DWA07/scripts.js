import { books, authors, genres, BOOKS_PER_PAGE } from "./modules/data.js";
import { 
  getStartingBooks, 
  createGenreOptionsFragment,
  createGenreOptionsElement, 
  createAuthorOptions, 
  setTheme, 

  handleSettingsFormSubmit, 
  processSearchForm, 
  handlePreviews, 
  singleActiveBook
} from "./modules/helper.js";

import { 
  handleSearchOverlays, handleSettingsOverlays, handleHeaderSearchOverlays, handleHeaderSettingsOverlays, handleListOverlays } from "./modules/handlers.js";

let page = 1;
let matches = books;

// Generates a document fragment containing a list of buttons, each representing a starting book.
const startingBooks = getStartingBooks(matches, BOOKS_PER_PAGE, authors);
document.querySelector('[data-list-items]').appendChild(startingBooks);


/**
 * Loads more books onto the page based on the given parameters.
 *
 * @param {number} page - The current page number.
 * @param {Array} matches - An array of book matches.
 * @param {Array} books - An array of all books.
 * @param {number} BOOKS_PER_PAGE - The maximum number of books per page.
 */
function loadMoreBooks(page, matches, books, BOOKS_PER_PAGE) {
  document.querySelector("[data-list-button]").innerText = `Show more (${
    books.length - BOOKS_PER_PAGE 
  })`;
  document.querySelector("[data-list-button]").disabled =
    matches.length - page * BOOKS_PER_PAGE > 0;
  
  document.querySelector("[data-list-button]").innerHTML = `
      <span>Show more</span>
      <span class="list__remaining"> (${
        matches.length - page * BOOKS_PER_PAGE > 0
          ? matches.length - page * BOOKS_PER_PAGE
          : 0
      })</span>
  `;
}


// generate genre options
const genreOptions = createGenreOptions(genres);

const genreOptionsFragment = createGenreOptionsFragment(genreOptions);

const selectElement = document.querySelector("[data-search-genres]");
selectElement.appendChild(genreOptionsFragment);
function createGenreOptions(genres) {
  const options = [];

  options.push({
    value: "any",
    text: "All Genres",
  })

  for (const [id, name] of Object.entries(genres)) {
    options.push({
      value: id,
      text: name,
    });
  }
  return options;
  
} 


// generate author options
const authorsHtml = createAuthorOptions(authors);
document.querySelector("[data-search-authors]").appendChild(authorsHtml);


/**
 * Sets the theme of the user's interface based on their preferred color scheme. 
 *
 * @return {void} This function does not return a value.
 */

function setThemeUsingColourScheme() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("night");
  } else {
    setTheme("day");
  }
}
setThemeUsingColourScheme();

// loading more books
loadMoreBooks(page, matches, books, BOOKS_PER_PAGE);


// overlay handlers
document.querySelector("[data-search-cancel]").addEventListener("click", handleSearchOverlays);
document.querySelector("[data-settings-cancel]").addEventListener("click", handleSettingsOverlays);
document.querySelector("[data-header-search]").addEventListener("click", handleHeaderSearchOverlays);
document.querySelector("[data-header-settings]").addEventListener("click", handleHeaderSettingsOverlays);
document.querySelector("[data-list-close]").addEventListener("click", handleListOverlays);

// settings handler
document
  .querySelector("[data-settings-form]")
  .addEventListener("submit", handleSettingsFormSubmit);


// search handler
processSearchForm(authors, books, BOOKS_PER_PAGE, page, matches);

// preview handler
handlePreviews(authors, books, BOOKS_PER_PAGE, page, matches);

// active book/list handler
function handleActiveBooks(authors, books) {
  document
  .querySelector("[data-list-items]")
  .addEventListener("click", (event) => {
    singleActiveBook(event, authors, books);
  });
}
handleActiveBooks(authors, books);

