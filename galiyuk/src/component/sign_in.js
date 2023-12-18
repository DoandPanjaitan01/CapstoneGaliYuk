// Extend the HTMLElement class to create the web component
class Sign_in extends HTMLElement {
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
    <div class="col col-12" id="login-success">
    <div id="wrapper" class="container p-5 col-6">
      <!-- Pills content -->
      <form>
        <div class="text-center mb-3">
          <h1 class="text-dark"><b>Selamat Datang Kembali</b></h1>
        </div>

        <p class="text-center">
          Belum terdaftar? Ayo daftar dengan tekan tombol dibawah ini
        </p>

        <!-- Submit button -->
        <a
          href="../../../index.html"
          type="submit"
          style="background-color: #ffffff; font-weight: bold"
          class="btn border border-dark btn-block mb-4 col-5 mx-auto"
        >
          Sign In
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
  customElements.define("p-signin", Sign_in);
}
