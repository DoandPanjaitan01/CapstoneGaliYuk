// Extend the HTMLElement class to create the web component
class Lcard extends HTMLElement {
  /**
   * The class constructor object
   */
  constructor() {
    // Always call super first in constructor
    super();

    this.titleCard = "";
    this.contentCard = "";
    this.image = "";
  }

  /**
   * Runs each time the element is appended to or moved in the DOM
   */
  connectedCallback() {
    this.titleCard = this.getAttribute("title");
    this.contentCard = this.getAttribute("content");
    this.image = this.getAttribute("image");
    console.log(this.titleCard, this.contentCard);
    this.render();
  }

  render() {
    this.innerHTML = `<div class="row row-cols-1 row-cols-md-3 g-4 mr-1 mt-5">
    <div class="col">
     <div class="card shadow" id="img" style="width: 18rem;" >
        <img id="img" src="${this.image}" class="card-img-top p-2 "  id="#rcorners1 " alt="">
        <div class="card-body text-center">
            <b class="card-title">${this.titleCard}</b>
            <p class="card-text">${this.contentCard}</p>
            <button class="button">Detail</button>
        </div>
    </div>
    </div>
    </div>
   `;
  }
  /**
   * Runs when the element is removed from the DOM
   */
  disconnectedCallback() {
    console.log("disconnected", this);
  }
}

// Define the new web component
if ("customElements" in window) {
  customElements.define("l-card", Lcard);
}
