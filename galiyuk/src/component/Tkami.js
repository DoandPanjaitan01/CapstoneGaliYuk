// Extend the HTMLElement class to create the web component
class Tkami extends HTMLElement {
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
    <div id="app" class="tkami mb-5">
      <n-header image=".././assets/image/logo2.png" link1="../../../index.html#landing" link2="../../../index.html#layanan" link3="../../../index.html#mitra" link4="#" btn1=".././view/template.html?daftar" btn2=".././view/template.html?login"></n-header>
      <div class="pt-5 px-5">
        <div class="mt-5" id="tentang">
          <div style="display: flex; align-items: center">
            <img src=".././assets/image/logo.svg" alt="deskripsi gambar" />
            <p>
              GaliYuk Adalah Proyek Untuk Membuat Website yang menyediakan
              platform Bagi pengguna untuk berbagi informasi tentang kegiatan
              penggunaan jasa berupa jasa penggalian. Website ini akan menjadi
              sumber daya yang komprehensif bagi pengguna untuk mencari jasa
              yang ingin dibutuhkan.
            </p>
          </div>
          <div class="row justify-content-center">
            <p-card
              title="Doand Panjaitan"
              icon="bi bi-github h3"
              icon2="bi bi-instagram h3"
              icon3="bi bi-linkedin h3"
              link="https://github.com/"
              link2="https://www.instagram.com/"
              link3="https://id.linkedin.com/"
              image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
            ></p-card>
            <p-card
              title="Jose Rafael"
              icon="bi bi-github h3"
              icon2="bi bi-instagram h3"
              icon3="bi bi-linkedin h3"
              link="https://github.com/"
              link2="https://www.instagram.com/"
              link3="https://id.linkedin.com/"
              image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
            ></p-card>
            <p-card
              title="M. Sulhan Habibi"
              icon="bi bi-github h3"
              icon2="bi bi-instagram h3"
              icon3="bi bi-linkedin h3"
              link="https://github.com/"
              link2="https://www.instagram.com/"
              link3="https://id.linkedin.com/"
              image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
            ></p-card>
            <p-card
              title="Ilham Maulana Akbar"
              icon="bi bi-github h3"
              icon2="bi bi-instagram h3"
              icon3="bi bi-linkedin h3"
              link="https://github.com/"
              link2="https://www.instagram.com/"
              link3="https://id.linkedin.com/"
              image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
            ></p-card>
            <p-card
              title="Sri Wahyuni Putri"
              icon="bi bi-github h3"
              icon2="bi bi-instagram h3"
              icon3="bi bi-linkedin h3"
              link="https://github.com/"
              link2="https://www.instagram.com/"
              link3="https://id.linkedin.com/"
              image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
            ></p-card>
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
  customElements.define("p-tkami", Tkami);
}
