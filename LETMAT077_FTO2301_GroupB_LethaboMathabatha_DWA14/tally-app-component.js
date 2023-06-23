// @ts-check

import { LitElement, html, css } from './libs/lit.js';


const States = {
  MIN: 'Minimum Reached',
  MAX: 'Maximum Reached',
  DEFAULT: 'Default State',
};

Object.freeze(States);



const MIN_NUMBER = -25;
const MAX_NUMBER = 50;
const STEP_AMOUNT = 1; 
const DEFAULT = 0; 



class TallyCounter extends LitElement {
 
 static styles = css`
  
    :root {
      --color-green: #31c48d;
      --color-white: white;
      --color-dark-grey: #33333d;
      --color-medium-grey: #424250;
      --color-light-grey: #d2d6dc;
    }
    
    * {
      box-sizing: border-box;
    }
    
    html {
      height: 100vh;
    }
    
    body {
      margin: 0;
      background-color: var(--color-medium-grey);
      color: white;
      font-family:Roboto, Arial, Helvetica, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      text-align: center;
    }
    
    /* Header */
    
    .header {
      text-align: center;
    }
    
    .header__title {
      font-size: 4rem;
      font-weight: 500;
      letter-spacing: 5px;
      color: var(--color-light-grey);
      font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  
    }
    
    /* Controls */

    .controls {
      align-self: center;
      margin-bottom: 2rem;
      
    }

    /* Counter */

    .counter {
      background-color: var(--color-dark-grey);
    }
    
    .counter__value {
      width: 100%;
      height: 15rem;
      text-align: center;
      font-size: 6rem;
      font-weight: 900;
      background: none;
      color: var(--color-white);
      border-width: 0;
      border-bottom: 1px solid var(--color-light-grey);
    }


    .counter {
      font-weight: bold;
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

    .counter__button:disabled {
        opacity: 0.2;
      }
      
    .counter__button_first {
      border-right: 2px solid var(--color-light-grey);
    }
      
    .counter__actions {
      display: flex;
    } 
      
    .reset-alert {
      display: flex
      align-self: center;
      width: 10rem;
      height: 12rem
    }

    /* footer */
  
    .footer {
      background-color: var(--color-dark-grey);
      color: var(--color-light-grey);
      padding: 2rem;
      font-size: 0.9rem;
      text-align: center;
    }
    
    .footer__link {
      color: var(--color-white);
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
    `;

    static properties = {
      value: { type: String },
      showModal: { type: "boolean", state: true },
      max: { type: Number },
      min: { type: Number },
      state: { type: String },
    };
  
    constructor() {
      super();
      this.value = DEFAULT;
      this.showModal = false;      
      this.max = 50;
      this.min = -25;
      this.state = States.DEFAULT;
    }
  
    /**
     * Toggles the value of the "showModal" property between true and false.
     */
    toggleOpen() {
      this.showModal = !this.showModal;
    }
  
    subtractHandler = () => {
      let count = parseInt(this.value);
      count -= STEP_AMOUNT;
      count === this.min ? (this.state = States.MIN) : (this.state = States.DEFAULT);
      this.value = count.toString();
      this.requestUpdate('value');
      console.log('Subtraction')
    };
  
    addHandler = () => {
      let count = parseInt(this.value);
      count += STEP_AMOUNT;
      count === this.max ? (this.state = States.MAX) : (this.state = States.DEFAULT);
      this.value = count.toString();
      console.log('Addition')
    };
  
    resetHandler = () => {
      this.state = States.DEFAULT;
      this.value = DEFAULT;
      this.toggleOpen();
      setTimeout(() => {
        this.toggleOpen();
      }, 3000);
    };


    /**
     * This function renders the HTML template for the counter app.
     *
     * @return {Object} The HTML template as a string.
     */
    render() {
        return html`
    <section>
      <header class="header">
          <h1 class="header__title">TALLY COUNT DWA14</h1>
      </header>

      <aside class="controls" >
          <label class="display"> 
              <sl-dropdown distance="10">
                  <sl-button slot="trigger" caret variant="success">Display</sl-button>
                  <sl-menu>
                  <sl-menu-item>Single</sl-menu-item>
                  <sl-menu-item>Multiple</sl-menu-item>          
                  </sl-menu>
              </sl-dropdown>
          </label>
        
      
          <label class="counter-options">
              <sl-dropdown distance="10">
                  <sl-button slot="trigger" caret variant="success">Counter</sl-button>
                  <sl-menu>
                      <sl-menu-item>Counter 1</sl-menu-item>
                      <sl-menu-item>Counter 2</sl-menu-item>          
                  </sl-menu>
              </sl-dropdown>
          </label>

          <label class="settings">
              <sl-dropdown distance="10">
                  <sl-button slot="trigger" caret variant="success">Settings</sl-button>
                  <sl-menu>
                      <sl-menu-item>Increment By</sl-menu-item>
                      <sl-menu-item>Button Preferences</sl-menu-item>          
                  </sl-menu>
              </sl-dropdown>
          </label>

          <sl-button variant="success" outline class="reset" data-key="reset" @click=${this.resetHandler}> 
              <sl-icon slot="suffix" name="arrow-counterclockwise"></sl-icon>
              Reset
          </sl-button>
      </aside>


      <main class="counter">
        <input class="counter__value" data-key="number" readonly value="0">

          <sl-alert variant="success" class="reset-alert" duration="3000" closable @click=${this.resetHandler}>
              <sl-icon slot="icon" name="check2-circle"></sl-icon>
              <strong>The counter has been reset to 0.</strong>
              <br/>
                  Use the counter buttons to start tracking again.
          </sl-alert>

        <div class="counter__actions">
          <sl-button variant="success" outline data-key="subtract" class="counter__button counter__button_first"
            ?disabled=${this.state === States.MIN} @click=${this.subtractHandler}>-</sl-button>
          <sl-button variant="success" outline data-key="add" class="counter__button"
          ?disabled=${this.state === States.MAX} @click=${this.addHandler}>+</sl-button>
        </div> 
      </main>

      <footer class="footer">
        Inspired by <a class="footer__link" href="https://tallycount.app/">Tally Count.</a>
        This is merely a student practice project for learning JavaScript.
      </footer>  
    </section>
    `};
  }

  
customElements.define('tally-counter', TallyCounter);


 

