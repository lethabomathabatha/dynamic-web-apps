/**
 * Generates a document fragment containing a list of buttons, each representing a starting book.
 *
 * @param {Array} matches - The list of books.
 * @param {number} BOOKS_PER_PAGE - The number of books to display per page.
 * @param {object} authors - An object containing the authors of the books.
 * @return {DocumentFragment} A document fragment containing a list of buttons representing the starting books.
 */
export function getStartingBooks(matches, BOOKS_PER_PAGE, authors) {
  const starting = document.createDocumentFragment();

  for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

    starting.appendChild(element);
  }

  return starting;
}


/**
 * Creates a document fragment of genre options for a select element based on
 * the received genres object.
 * @param {Object} genres - An object containing genre id and name pairs.
 * @return {DocumentFragment} A document fragment containing the genre options.
 */
export function createGenreOptionsFragment(options) {
  const genreHtml = document.createDocumentFragment();

  for (const { value, text } of options) {
    const element = createGenreOptionsElement(value, text);
    genreHtml.appendChild(element);
  }

  return genreHtml;
}

function createGenreOptionsElement(value, text) {
  const element = document.createElement("option");
  element.value = value;
  element.innerText = text;
  return element;
}



/**
 * Creates a document fragment of author option elements based on the received options array.
 * @param {Array} options - An array of option objects.
 * @return {DocumentFragment} A document fragment containing the option elements.
 */
export function createAuthorOptionsFragment(options) {
  const fragment = document.createDocumentFragment();

  for (const { value, text } of options) {
    const element = document.createElement("option");
    element.value = value;
    element.innerText = text;
    fragment.appendChild(element);
  }

  return fragment;
}
 

/**
 * Sets the theme of the page to either "night" or "day" by changing the background colors
 * and updating the value of a data attribute.
 *
 * @param {string} theme - The theme to set the page to, either "night" or "day".
 * @return {void} This function does not return anything.
 */
export function setTheme(theme) {
  {
    const colorDark = theme === "night" ? "255, 255, 255" : "10, 10, 20";
    const colorLight = theme === "night" ? "10, 10, 20" : "255, 255, 255";

    document.querySelector("[data-settings-theme]").value = theme;
    document.documentElement.style.setProperty("--color-dark", colorDark);
    document.documentElement.style.setProperty("--color-light", colorLight);
  }
}


/**
 * Handles the settings form submission and updates the theme of the document.
 *
 * @param {Event} event - The submit event triggered by the form.
 * @return {void} This function does not return anything.
 */
export function handleSettingsFormSubmit(event) {

    event.preventDefault();
    const formData = new FormData(event.target);
    const { theme } = Object.fromEntries(formData);

    if (theme === "night") {
      document.documentElement.style.setProperty(
        "--color-dark",
        "255, 255, 255"
      );
      document.documentElement.style.setProperty("--color-light", "10, 10, 20");
    } else {
      document.documentElement.style.setProperty("--color-dark", "10, 10, 20");
      document.documentElement.style.setProperty(
        "--color-light",
        "255, 255, 255"
      );
    }

    document.querySelector("[data-settings-overlay]").open = false;
  };



/**
 * Processes the search form given the authors, books, BOOKS_PER_PAGE, page, and matches.
 *
 * @param {Array} authors - an array of author names
 * @param {Array} books - an array of book objects
 * @param {number} BOOKS_PER_PAGE - the number of books to display per page
 * @param {number} page - the current page number
 * @param {Array} matches - an array of book objects that match the search criteria
 * @return {void} This function does not return anything.
 */


export function processSearchForm(authors, books, BOOKS_PER_PAGE, page, matches) {
  document
  .querySelector("[data-search-form]")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];

    for (const book of books) {
      let genreMatch = filters.genre === "any";

      for (const singleGenre of book.genres) {
        if (genreMatch) break;
        if (singleGenre === filters.genre) {
          genreMatch = true;
        }
      }

      if (
        (filters.title.trim() === "" ||
          book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
        (filters.author === "any" || book.author === filters.author) &&
        genreMatch
      ) {
        result.push(book);
      }
    }

    page = 1;
    matches = result;

    if (result.length < 1) {
      document
        .querySelector("[data-list-message]")
        .classList.add("list__message_show");
    } else {
      document
        .querySelector("[data-list-message]")
        .classList.remove("list__message_show");
    }

    document.querySelector("[data-list-items]").innerHTML = "";
    const newItems = document.createDocumentFragment();

    for (const { author, id, image, title } of result.slice(
      0,
      BOOKS_PER_PAGE
    )) {
      const element = document.createElement("button");
      element.classList = "preview";
      element.setAttribute("data-preview", id);

      element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;

      newItems.appendChild(element);
    }

    document.querySelector("[data-list-items]").appendChild(newItems);
    document.querySelector("[data-list-button]").disabled =
      matches.length - page * BOOKS_PER_PAGE < 1;

    document.querySelector("[data-list-button]").innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${
          matches.length - page * BOOKS_PER_PAGE > 0
            ? matches.length - page * BOOKS_PER_PAGE
            : 0
        })</span>
    `;

    window.scrollTo({ top: 0, behavior: "smooth" });
    document.querySelector("[data-search-overlay]").open = false;
  });
}


export function handlePreviews(authors, books, BOOKS_PER_PAGE, page, matches) {
  document.querySelector("[data-list-button]").addEventListener("click", () => {
    const fragment = document.createDocumentFragment();
  
    for (const { author, id, image, title } of matches.slice(
      page * BOOKS_PER_PAGE,
      (page + 1) * BOOKS_PER_PAGE
    )) {
      const element = document.createElement("button");
      element.classList = "preview";
      element.setAttribute("data-preview", id);
  
      element.innerHTML = `
              <img
                  class="preview__image"
                  src="${image}"
              />
              
              <div class="preview__info">
                  <h3 class="preview__title">${title}</h3>
                  <div class="preview__author">${authors[author]}</div>
              </div>
          `;
  
      fragment.appendChild(element);
    }
  
    document.querySelector("[data-list-items]").appendChild(fragment);
    page += 1;
  });
}


// data list items
export function singleActiveBook(event, authors, books) {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  for (const node of pathArray) {
    if (active) break;

    if (node?.dataset?.preview) {
      let result = null;

      for (const singleBook of books) {
        if (result) break;
        if (singleBook.id === node?.dataset?.preview) result = singleBook;
      }

      active = result;
    }
  }


  if (active) {
      document.querySelector("[data-list-active]").open = true;
      document.querySelector("[data-list-blur]").src = active.image;
      document.querySelector("[data-list-image]").src = active.image;
      document.querySelector("[data-list-title]").innerText = active.title;
      document.querySelector("[data-list-subtitle]").innerText = `${
        authors[active.author]
      } (${new Date(active.published).getFullYear()})`;
      document.querySelector("[data-list-description]").innerText =
        active.description;
    }
  };



