// Extend the HTMLElement class to create the web component
class Login extends HTMLElement {
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
      <div id="login" class="container p-5 col-5">
      <!-- Pills content -->
      <form>
        <div class="text-center mb-3">
          <h1 id="titleLogin"><b>Masuk</b></h1>
        </div>

        <p class="text-center">Masuk menggunakan username dan password Anda</p>

        <!-- Email input -->
        <div class="col-11 mx-auto">
          <div class="input-group mb-3 border border-dark rounded">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon2"
              required
            />
          </div>
          <div class="input-group mb-3 border border-dark rounded">
            <input
              type="text"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon2"
              required
            />
          </div>
        </div>

        <!-- Submit button -->
        <div class="row justify-content-center">
          <a
            type="submit"
            style="background-color: #f8de22; font-weight: bold"
            class="button text-center mb-4 col-5 mx-auto"
            href="./template.html?sign_in"
          >
            Masuk
          </a>
        </div>
      </form>
    </div>`;
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
  customElements.define("p-login", Login);
}
