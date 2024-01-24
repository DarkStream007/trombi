class Header extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: 'open' });

    // Define the content of the shadow DOM
    this.shadowRoot.innerHTML = `
      <style>
        header{
            width: 100%;
            height: 10rem;
            background-color: #40d1f1;
        }
        p.maiia{
            font-size: 18px;
        }
        p.hall_of_fame{
            font-weight: bold;
            font-size: 32px;
            font-family: Georgia, "Times New Roman", Times, serif;;
        }
        p.def_header{
            font-size: 12px;
            /*font-family: ;*/
        }
        p.def_header, p.hall_of_fame, p.maiia{
            color: white;
            text-align: center;
        }
      </style>
      
      <header>
        <p class = "maiia">Maiia</p>
        <p class = "hall_of_fame">Hall of fame</p>
        <p class = "def_header">Check it out and find out who we are</p>
      </header>
    `;
  }
}

customElements.define('orga-header', Header);
