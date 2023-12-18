// Extend the HTMLElement class to create the web component
class Daftar extends HTMLElement {
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
        <h1 id="titleLogin"><b>Daftar</b></h1>
      </div>

      <p class="text-center">
        Daftar dengan mengisi form dibawah ini dengan benar
      </p>

      <!-- Email input -->
      <div class="col-11 mx-auto">
        <div class="input-group mb-3 border border-dark rounded">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon2"
            required
          />
        </div>
        <div class="input-group mb-3 border border-dark rounded">
          <input
            type="text"
            class="form-control"
            placeholder="Nama Lengkap"
            aria-label="Nama Lengkap"
            aria-describedby="basic-addon2"
            required
          />
        </div>
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
      <div class="text-center">
        <a
          type="submit"
          class="button mb-4 col-5 mx-auto"
          href="./template.html?success"
        >
          Daftar
        </a>
      </div>
    </form>
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
  customElements.define("p-daftar", Daftar);
}
