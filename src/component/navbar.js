// Extend the HTMLElement class to create the web component
class Navbar extends HTMLElement {
  /**
   * The class constructor object
   */
  constructor() {
    // Always call super first in constructor
    super();
    this.image = "";
    this.link1 = "";
    this.link2 = "";
    this.link3 = "";
    this.link4 = "";
    this.btn1 = "";
    this.btn2 = "";

    // Render HTML
  }

  /**
   * Runs each time the element is appended to or moved in the DOM
   */
  connectedCallback() {
    this.image = this.getAttribute("image");
    this.link1 = this.getAttribute("link1");
    this.link2 = this.getAttribute("link2");
    this.link3 = this.getAttribute("link3");
    this.link4 = this.getAttribute("link4");
    this.btn1 = this.getAttribute("btn1");
    this.btn2 = this.getAttribute("btn2");
    console.log("connected!", this);
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg justify-content-between position-fixed w-100" id="nav">
    <a class="navbar-brand" >
    <img src="${this.image}" width="100" height="100"><span>GALIYUK</span>
    </a>
    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
    <div class="d-flex">
    <input class="form-control mx-5 border border-dark" id="search" type="search" placeholder="Search" aria-label="Search">
    </div>
    <form class="form-inline my-2 my-lg-0">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link text-dark" href="${this.link1}">Beranda <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link text-dark" href="${this.link2}">Layanan<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link text-dark" href="${this.link3}">Mitra <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link text-dark" href="${this.link4}">Tentang Kami <span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <a href="${this.btn1}" class="btn btn-outline-dark my-2 ml-5 my-sm-0 px-3 " type="submit">Daftar</a>
      <a href="${this.btn2}" class="btn btn-outline-dark my-2 ml-3 my-sm-0 px-3 " type="submit">Login</a>
    </form>
  </div>
  </nav>`;
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
  customElements.define("n-header", Navbar);
}
