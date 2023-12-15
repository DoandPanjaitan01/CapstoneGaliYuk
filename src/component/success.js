// Extend the HTMLElement class to create the web component
class Success extends HTMLElement {
  /**
   * The class constructor object
   */
  constructor() {
    // Always call super first in constructor
    super();
  }

  /**
   * Runs each time the element is appended to or moved in the DOM
   */
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="login-success">
      <div id="wrapper" class="container p-5 col-5">
        <!-- Pills content -->
        <form>
          <div class="text-center mb-3">
            <h1 class="text-dark"><b>Selamat Bergabung</b></h1>
          </div>

          <p class="text-center">Silahkan masuk melalui halaman dibawah ini</p>

          <!-- Submit button -->
          <a
            type="submit"
            style="background-color: #ffffff; font-weight: bold"
            class="btn border border-dark btn-block mb-4 col-5 mx-auto"
            href="../../index.html"
          >
            Masuk
          </a>
        </form>
      </div>
    </div> `;
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
  customElements.define("p-success", Success);
}
