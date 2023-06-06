// @ts-check

import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js";

import { singleActiveBook } from "./helper.js";

const preview = document.createElement('template')
preview.innerHTML = `
<dialog class="overlay" data-list-active>
      <div class="overlay__preview"><img class="overlay__blur" data-list-blur src=" "/><img class="overlay__image" data-list-image src=" "/></div>
      <div class="overlay__content">
        <h3 class="overlay__title" data-list-title></h3>
        <div class="overlay__data" data-list-subtitle></div>
        <p class="overlay__data overlay__data_secondary" data-list-description></p>
      </div>

      <div class="overlay__row">
        <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
      </div>
    </dialog>
<style> 
.preview {
  border-width: 0;
  width: 100%;
  font-family: Roboto, sans-serif;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: left;
  border-radius: 8px;
  border: 1px solid rgba(var(--color-dark), 0.15);
  background: rgba(var(--color-light), 1);
}

@media (min-width: 60rem) {
  .preview {
    padding: 1rem;
  }
}

.preview_hidden {
  display: none;
}

.preview:hover {
  background: rgba(var(--color-blue), 0.05);
}

.preview__image {
  width: 48px;
  height: 70px;
  object-fit: cover;
  background: grey;
  border-radius: 2px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
}

.preview__info {
  padding: 1rem;
}

.preview__title {
  margin: 0 0 0.5rem;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  color: rgba(var(--color-dark), 0.8)
}

.preview__author {
  color: rgba(var(--color-dark), 0.4);
} 


</style>


<img src=""  class="preview__image" ></img>
<div class="preview__info">
  <h3 class="preview__title"></h3>
  <div class="preview__author"></div>
  </div>`;
  
  export class PreviewList extends HTMLElement {
    inner = this.attachShadow({mode: "closed"})
    constructor() {
      super();
      const {content} = preview
      this.inner.appendChild(content.cloneNode(true));

      this.addEventListener("click", (event) => {
         singleActiveBook(event, authors, books);
      });

    }
  
    connectedCallback() {
      if (this.hasAttribute('prop') && this.hasAttribute('index')){
      const imgElement = this.inner.querySelector('.preview__image');
      const titleElement = this.inner.querySelector('.preview__title');
      const authorElement =this.inner.querySelector('.preview__author');
  
      const prop = JSON.parse(this.getAttribute('prop'));
      const index = this.getAttribute('index');
        
      imgElement.src = prop.image;
      authorElement.textContent = authors[prop.author];
      titleElement.textContent = prop.title;
      
  
      this.dataset.index = index;
      this.id = prop.id;
      this.className = "preview";
      
      }
    }
  }
  
  customElements.define('preview-list', PreviewList);
  

  