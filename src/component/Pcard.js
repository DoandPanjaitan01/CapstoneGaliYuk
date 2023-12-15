// Extend the HTMLElement class to create the web component
class PCard extends HTMLElement {
  /**
   * The class constructor object
   */
  constructor() {
    // Always call super first in constructor
    super();
    this.titleCard = "";
    this.contentCard = "";
    this.icon = "";
    this.icon2 = "";
    this.icon3 = "";
    this.link = "";
    this.link2 = "";
    this.link3 = "";
    this.image = "";
  }

  /**
   * Runs each time the element is appended to or moved in the DOM
   */
  connectedCallback() {
    this.titleCard = this.getAttribute("title");
    this.contentCard = this.getAttribute("content");
    console.log(this.titleCard, this.contentCard);
    this.icon = this.getAttribute("icon");
    this.icon2 = this.getAttribute("icon2");
    this.icon3 = this.getAttribute("icon3");
    this.image = this.getAttribute("image");
    this.link = this.getAttribute("link");
    this.link2 = this.getAttribute("link2");
    this.link3 = this.getAttribute("link3");
    this.render();
  }

  render() {
    this.innerHTML = `
		  <div class="card-container mt-5 mx-2">
			 <div class="upper-container mb-5">
				<div class="image-container">
				   <img src="${this.image}" />
				</div>
			 </div>
             <div class="pt-5 text-center h-100"><b class="card-title">${this.titleCard}</b>
             <div class="align-content-end mt-4">
             <a href="${this.link}" ><i class="${this.icon}"></i></a>
             <a href="${this.link2}"><i class="${this.icon2} mx-4"></i></a>
             <a href="${this.link3}"><i class="${this.icon3}"></i></a>
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
  customElements.define("p-card", PCard);
}
