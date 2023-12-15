// Extend the HTMLElement class to create the web component
class MCard extends HTMLElement {
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
    console.log(this.titleCard, this.contentCard);
    this.image = this.getAttribute("image");
    this.render();
  }

  render() {
    this.innerHTML = `
       <div class="card shadow m-3" id="img" style="width:100%">
          <div class="card-body text-center">
          <div>
          <img class="ml-4" src="${this.image}" width="70" height="60" alt="">
          </div><br>
              <b class="card-title mcard-title">${this.titleCard}</b>
              <p class="card-text">${this.contentCard}</p>
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
  customElements.define("m-card", MCard);
}
