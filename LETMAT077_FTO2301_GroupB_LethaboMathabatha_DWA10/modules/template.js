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

    @media (min-width: 600px) {
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