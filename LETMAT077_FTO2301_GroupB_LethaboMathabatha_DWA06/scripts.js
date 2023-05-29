import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js";
import { 
  PreviewHelper, 
  createGenreOptions, 
  createAuthorOptions, 
  loadMoreBooks, 
  toggleTheme, 
  handleOverlays, 
  handleSettings, 
  processSearchForm, 
  handlePreviews, 
  handleActiveBooks 
} from "./helper.js";

let page = 1;
let matches = books;

// previewHelper for generating starting books
const previewHelper = new PreviewHelper(matches);
const startingBooks = previewHelper.getStartingBooks(BOOKS_PER_PAGE, authors);
document.querySelector("[data-list-items]").appendChild(startingBooks);

// generate genre options
const genreHtml = createGenreOptions(genres);
document.querySelector("[data-search-genres]").appendChild(genreHtml);

// generate author options
const authorsHtml = createAuthorOptions(authors);
document.querySelector("[data-search-authors]").appendChild(authorsHtml);

// theme toggle
toggleTheme();

// loading more books
loadMoreBooks(page, matches, books, BOOKS_PER_PAGE);


// overlay
handleOverlays();

// settings handler
handleSettings();

// search handler
processSearchForm(authors, books, BOOKS_PER_PAGE, page, matches);

// preview handler
handlePreviews(authors, books, BOOKS_PER_PAGE, page, matches);

// active book/list handler
handleActiveBooks(authors, books, BOOKS_PER_PAGE, page, matches);
