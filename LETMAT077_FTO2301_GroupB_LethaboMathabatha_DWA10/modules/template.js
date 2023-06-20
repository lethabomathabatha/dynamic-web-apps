// @ts-check

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
    .controls {
      align-self: center;
      margin-bottom: 2rem;
      
    }

    .counter {
      font-weight: bold;
    }

    .counter-options sl-button {
      
    }

    .counter__actions {
      align-items: center;
      justify-content: center;
    }
    

    .counter__button::part(base) {
      height: 10rem;
      width: 45rem;
      display: flex;
      align-items: center;
      margin: 1rem;
      font-size: 4rem;
      transition: transform 0.3s;
      transform: translateY(0);
      border-radius: 0.6rem;
    }

  

    .reset-alert {
      display: flex
      align-self: center;
      width: 10rem;
      height: 12rem
    }

    /* mobile */
    @media (max-width: 424px) {
      .counter__button::part(base) {
        height: 4rem;
        width: 8rem;
        display: flex;
        align-items: center;
        margin: 1rem;
        font-size: 2.6rem;
        transition: transform 0.3s;
        transform: translateY(0);
        border-radius: 0.6rem;
      }

      .header__title {
        font-size: 2rem;
        font-weight: 100px;
        letter-spacing: 5px;
      }

      .counter__value {
        height: 12rem;
        font-size: 5rem;
      }

      .controls {
        display: grid;
        margin-bottom: 1rem;
        padding-top: 2.5rem;
        border-top: 0.1px solid white; 
        grid-template-columns: 1fr 1fr;
        grid-gap: 1.5rem;
      }

      .footer {
        font-size: 0.7rem;
      }
    }

    /* tablet */
    @media (max-width: 768px ) {
      .counter__button::part(base) {
        height: 6rem;
        width: 14.5rem;
        align-items: center;
        margin: 1rem;
        font-size: 2.5rem;
       
      }

      .header__title {
        font-size: 4rem;
        letter-spacing: 3px;
      }

      .counter__value {
        height: 15rem;
        font-size: 6rem;
      }

      .controls {
        display: grid;
        margin-bottom: 1rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1.2rem;
      }

      .footer {
        border-top: 0.1px solid var(--color-light-grey);
        font-size: 0.9rem;
      }
      
    }

    /* laptop */
    @media (max-width: 1024px ) {
      .counter__button::part(base) {
        height: 7rem;
        width: 27rem;
        align-items: center;
        margin: 1rem;
        font-size: 2.5rem;
       
      }

      .header__title {
        font-size: 4rem;
        letter-spacing: 3px;
        margin-top: 1rem;
      }

      .counter__value {
        height: 15rem;
        font-size: 9rem;
      }

      .controls {
        display: grid;
        margin-bottom: 1.3rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1.8rem;
      }

      .footer {
        border-top: 0.1px solid var(--color-light-grey);
        font-size: 0.9rem;
      }

      /* 4k */
    @media (max-width: 1440px ) {
      .counter__button::part(base) {
        height: 7rem;
        width: 7rem;
        align-items: center;
        margin: 1rem;
        font-size: 2.5rem;
       
      }

      .header__title {
        font-size: 4rem;
        letter-spacing: 3px;
        margin-top: 1rem;
      }

      .counter__value {
        height: 15rem;
        font-size: 9rem;
      }

      .controls {
        display: grid;
        margin-bottom: 1.3rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 2.5rem;
      }

      .footer {
        border-top: 0.1px solid var(--color-light-grey);
        font-size: 0.9rem;
      }
      
    }
  
  </style>
`;

// append the template to the document
document.body.appendChild(template.content);

