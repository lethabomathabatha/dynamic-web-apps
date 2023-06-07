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

      /* laptop large */
    @media (max-width: 1440px ) {
      .counter__button::part(base) {
        height: 7rem;
        width: 10rem;
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






 

// when max or min is reached, disable further + or -, change to neutral
// adjust component size to match original button
// when nearing min or max, display "you are near the min or max"
/*<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>You are nearing the maximum or minimum value</strong><br />
  Reset the counter.
</sl-alert>
*/
/*<sl-alert variant="primary" open closable class="alert-closable">
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  You can close this alert any time!
</sl-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('sl-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>*/

// drop down components
/*
<div class="dropdown-selection">
  <sl-dropdown>
    <sl-button slot="trigger" caret>Edit</sl-button>
    <sl-menu>
      <sl-menu-item value="cut">Cut</sl-menu-item>
      <sl-menu-item value="copy">Copy</sl-menu-item>
      <sl-menu-item value="paste">Paste</sl-menu-item>
    </sl-menu>
  </sl-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('sl-dropdown');

  dropdown.addEventListener('sl-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
*/

/* Options
<sl-select label="Counter">
        <sl-option value="counter-1">Counter 1</sl-option>
        <sl-option value="counter-2">Counter 2</sl-option>
        <sl-option value="counter-3">Counter 3</sl-option>
</sl-select>

*/
/* settings
      <sl-button variant="settings">Settings</sl-button>
*/