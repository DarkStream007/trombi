class Card extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: 'open' });

    const data = [{
      photo: 'https://fr.web.img6.acsta.net/r_1280_720/medias/nmedia/18/68/54/71/19056539.jpg',
      name: 'Renaud',
      loc: "Nante",
      drapeau: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png",
      metier: "Dévloppeur",
      hobby: "JSP",
      favorite_food: "fish",
      email: "renaudderixx@gmail.com",

    }, {
      photo: 'https://fr.web.img6.acsta.net/r_1280_720/medias/nmedia/18/68/54/71/19056539.jpg',
      name: 'Coucou 2',
      loc: "Angers",
      drapeau: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png",
      metier: "a mettre",
      hobby: "a mettre",
      favorite_food: "a mettre",
      email: "a mettre",
    }, {
      photo: "https://fr.web.img6.acsta.net/r_1280_720/medias/nmedia/18/68/54/71/19056539.jpg",
      name: "renault",
      loc: "Angers",
      drapeau: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png",
      metier: "a mettre",
      hobby: "a mettre",
      favorite_food: "a mettre",
      email: "a mettre",
    }, {
      photo: "https://fr.web.img6.acsta.net/r_1280_720/medias/nmedia/18/68/54/71/19056539.jpg",
      name: "Gabriel",
      loc: "Paris",
      drapeau: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png",
      metier: "a mettre",
      hobby: "a mettre",
      favorite_food: "a mettre",
      email: "a mettre",
    }, {
      photo: "https://fr.web.img6.acsta.net/r_1280_720/medias/nmedia/18/68/54/71/19056539.jpg",
      name: "Hélio",
      loc: "Bordeau",
      drapeau: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ensign_of_France.svg/langfr-225px-Ensign_of_France.svg.png",
      metier: "a mettre",
      hobby: "a mettre",
      favorite_food: "a mettre",
      email: "a mettre",
    }];


    // Create the template using JavaScript
    var render = (person) => `
        <div class="boite3">
          <div class="article3">
            <div class="total_text">
              <article class="metier">${person.metier}</article>
              <h3>Hobby: </h3>
              <article class="result_hobby">${person.hobby}</article>
              <h3>Favorite Food: </h3>
              <article class="food_result">${person.favorite_food}</article>
              <h3>Email: </h3>
              <article class="result_email">${person.email}</article>
            </div>
            <article class="text_employer">${person.name}</article>
            <div class="origine">
              <p class="pays">Nante</p>
              <img class="drapeau" src="${person.drapeau}">
            </div>
          </div>
          <img src="${person.photo}">
        </div>
        `;

    const monContenu = data.map(person => render(person));

    const res = monContenu.join('');


    const search2 = () => {
       console.log("recherche");
    }

    // Define the content of the shadow DOM
    this.shadowRoot.innerHTML = `
    <style>  
      .container {    
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      div.boite1,div.boite2,div.boite3{
        height: 15rem;
        width: 32rem;
        background-color: white;
        display: inline-block;
        
      }
      div.article1, div.article2, div.article3{
          display: flex;
          justify-content: space-evenly;
          background-color: white;
          width: 50%;
          height: 100%;
          float: right;
          text-align: center;
          flex-direction: column;
          line-height: 0.01;
      }
      article, h3, p.pays{
          color: #67b3d1;
          font-family: "Rubik Burned", system-ui;
          font-weight: 400;
          font-style: normal;
      }
      div.origine{
          display: flex;
          justify-content: center;
          align-items: center;
      }

      img{
          width: 50%;
          height: 100%;
          filter: grayscale(1);
      }
      img:hover{
          filter: none;
          transition: 0.5s;
          cursor: pointer;
      }

      article{
          font-size: 16px;
      }
      article.text_employer{
          font-size: 21px;
          display: flex;
          flex-direction: column;
          order: -1;
          margin-bottom: 5px;
      }
      img.drapeau{
          height: 16px;
          width: 22px;
          filter: none;
          cursor: default;
      }
      p.pays{
          font-size: 12px;
      }
    </style>

    <input type="text" name="search" onkeypress="${search2}" />
    <br />
    <br />
    <main class="container">
     ${res}
    </main>
  `;
  }
}

customElements.define('orga-card', Card);
