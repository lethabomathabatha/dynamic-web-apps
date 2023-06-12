import { books, authors, genres, BOOKS_PER_PAGE } from "./modules/data.js";
import { 
  createGenreOptionsFragment,
  createAuthorOptionsFragment, 
  setTheme, 
  handleSettingsFormSubmit, 
  processSearchForm, 
  handlePreviews, 
  singleActiveBook,
} from "./modules/helper.js";

import { handleSearchOverlays, handleSettingsOverlays, handleHeaderSearchOverlays, handleHeaderSettingsOverlays, handleListOverlays } from "./modules/handlers.js";

import { PreviewList } from "./modules/preview-list.js";


// Generate document fragment
let page = 1;
let matches = books;
/**
 * Generates a document fragment containing a list of buttons, each representing a starting book.
 *
 * @param {Array} matches - The list of books.
 * @param {number} BOOKS_PER_PAGE - The number of books to display per page.
 * @param {object} authors - An object containing the authors of the books.
 * @return {DocumentFragment} A document fragment containing a list of buttons representing the starting books.
 */
function createBookGenerator() {
  const getStartingBooks = (matches, BOOKS_PER_PAGE, authors) => {
    const starting = document.createDocumentFragment();

    for (let i = 0; i < Math.min(matches.length, BOOKS_PER_PAGE); i++) {
      const book = matches[i];
      const { author, id, image, title } = book;

      const element = document.createElement('preview-list');
      element.setAttribute('prop', JSON.stringify({ author, id, image, title }));
      element.setAttribute('index', i.toString());
      starting.appendChild(element);
    }

    return starting;
  };

  return {
    getStartingBooks,
  };
}
PreviewList;


const bookGenerator = createBookGenerator();
const startingBooks = bookGenerator.getStartingBooks(matches, BOOKS_PER_PAGE, authors);
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

/**
 * Creates an array of genre options based on the given genres object.
 *
 * @param {Object} genres - An object containing genre IDs as keys and genre names as values.
 * @return {Array} An array of genre options, each containing a value and text property.
 */
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
const authorOptions = generateAuthorOptions(authors);
const authorOptionsFragment = createAuthorOptionsFragment(authorOptions);
document.querySelector("[data-search-authors]").appendChild(authorOptionsFragment);

/**
 * Creates author options based on an array of authors and returns an array of option objects.
 * @param {Object} authors - An object with author information.
 * @return {Array} An array of option objects.
 */
function generateAuthorOptions(authors) {
  const options = [];

  options.push({
    value: "any",
    text: "All Authors",
  });

  for (const [id, name] of Object.entries(authors)) {
    options.push({
      value: id,
      text: name,
    });
  }
  return options;
}


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
function handleActiveBooks(authors, books, genres) {
  document
  .querySelector("[data-list-items]")
  .addEventListener("click", (event) => {
    singleActiveBook(event, authors, books, genres);
  });
  
}
handleActiveBooks(authors, books, genres);


