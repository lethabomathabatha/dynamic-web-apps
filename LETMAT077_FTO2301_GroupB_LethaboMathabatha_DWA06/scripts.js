import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js";
import { 
  getStartingBooks, 
  createGenreOptions, 
  createAuthorOptions, 
  loadMoreBooks, 
  setTheme, 

  handleSettingsFormSubmit, 
  processSearchForm, 
  handlePreviews, 
  handleActiveBooks,
  
  handleSearchOverlays,
  handleSettingsOverlays,
  handleHeaderSearchOverlays,
  handleHeaderSettingsOverlays,
  handleListOverlays
} from "./helper.js";

let page = 1;
let matches = books;

// previewHelper for generating starting books
const startingBooks = getStartingBooks(matches, BOOKS_PER_PAGE, authors);
document.querySelector('[data-list-items]').appendChild(startingBooks);

// generate genre options
const genreHtml = createGenreOptions(genres);
document.querySelector("[data-search-genres]").appendChild(genreHtml);

// generate author options
const authorsHtml = createAuthorOptions(authors);
document.querySelector("[data-search-authors]").appendChild(authorsHtml);


/**
 * Sets the theme of the user's interface based on their preferred color scheme. 
 *
 * @return {void} This function does not return a value.
 */

function setThemeUsingColourScheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
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
handleActiveBooks(authors, books, BOOKS_PER_PAGE, page, matches);

// displayBookDetails(authors, books, BOOKS_PER_PAGE, page, matches);
