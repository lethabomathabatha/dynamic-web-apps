export class PreviewList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }
  
    connectedCallback() {
        if (this.hasAttribute('prop') && this.hasAttribute('index')){
        const prop = JSON.parse(this.getAttribute('prop'));
        const index = this.getAttribute('index');

        this.shadowRoot.innerHTML = `
        <button class="preview" data-preview="${prop.id}">
          <img class="preview__image" src="${prop.image}" />
          <div class="preview__info">
            <h3 class="preview__title">${prop.title}</h3>
            <div class="preview__author">${authors[prop.author]}</div>
          </div>
        </button>
      `;

        this.dataset.index = index;
        this.id = prop.id;
        }
    }
}
customElements.define('preview-list', PreviewList);