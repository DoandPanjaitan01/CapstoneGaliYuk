// Extend the HTMLElement class to create the web component
class Homepage extends HTMLElement {
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
    <div id="app">
    <n-header image="./src/assets/image/logo2.png" link1="#landing" link2="#layanan" link3="#mitra" link4="./src/view/template.html?tentang" btn1="./src/view/template.html?daftar" btn2="./src/view/template.html?login"></n-header>
    <div class="landing-page mb-5" id="landing">
      <div class="row pl-5 d-flex">
        <div class="col-6 align-self-center">
          <h1><b>Galiyuk Hadir Membantu Anda</b></h1>
          <h4 class="lh-base">
            GaliYuk hadir menjadi solusi untuk 
          </h4><h4>Menghubungkan kita semua dalam
            satu </h4> <h4> lingkungan yang harmoni.
          </h4></h4>
        </div>
        <img src="./src/assets/image/landing.png" alt="" width="45%" />
      </div>
    </div>
    <div class="p-5">
      <div class="my-5 section" id="layanan">
        <h1 class="text-center" id="titleLogin">
          <b>Layanan Terbaik Kami</b>
        </h1>
        <h5 class="mx-auto text-center w-75">
          Kami Selalu Mengedepankan Kualitas, Keamanan, Profesionalitas Dan
          Keahlian Dalam Setiap Jasa Yang Kami Kerjakan
        </h5>
        <div class="row d-flex justify-content-center">
          <l-card
            title="Judul"
            content="Deskripsi Singkat"
            image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
          ></l-card>
          <l-card
            title="Judul"
            content="Deskripsi Singkat"
            image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
          ></l-card>
          <l-card
            title="Judul"
            content="Deskripsi Singkat"
            image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
          ></l-card>
        </div>
      </div>
      <div class="my-5 section" id="layanan">
        <h1 class="text-center" id="titleLogin">
          <b>Mengapa Kami Berbeda</b>
        </h1>
        <h5 class="mx-auto text-center d-flex justify-content-center">
          Layanan kami
        </h5>
        <div class="row d-flex justify-content-center">
          <div class="col-sm-10 row d-flex justify-content-center">
            <m-card
              id="m-card"
              title="Legalitas Lengkap & Resmi"
              content="Lorem Ipsum is the printing and typesetting industry. Lorem Ipsum has been the"
              image="./src/assets/image/1.png"
              class="col-6"
            ></m-card>
            <m-card
              id="m-card"
              title="Tersedia Kontrak Kerja"
              content="Lorem Ipsum is the printing and typesetting industry. Lorem Ipsum has been the"
              image="./src/assets/image/2.png"
              class="col-6"
            ></m-card>
          </div>
          <div class="col-sm-10 row d-flex justify-content-center">
            <m-card
              id="m-card"
              title="Tim Ahli Berpengalaman"
              content="Lorem Ipsum is the printing and typesetting industry. Lorem Ipsum has been the"
              image="./src/assets/image/3.png"
              class="col-6"
            ></m-card>
            <m-card
              id="m-card"
              title="Manajemen Pekerjaan Terbaik"
              content="Lorem Ipsum is the printing and typesetting industry. Lorem Ipsum has been the"
              image="./src/assets/image/4.png"
              class="col-6"
            ></m-card>
          </div>
        </div>
      </div>
      <div class="my-5 section" id="mitra">
        <h3 class="mx-auto text-center w-50">WE ARE HERE FOR YOU</h3>
        <h1 class="text-center" id="titleLogin">
          <b>Mitra Kami</b>
        </h1>
        <div class="row d-flex justify-content-center">
          <l-card
            title="Judul"
            content="Deskripsi Singkat"
            image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
          ></l-card>
          <l-card
            title="Judul"
            content="Deskripsi Singkat"
            image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
          ></l-card>
          <l-card
            title="Judul"
            content="Deskripsi Singkat"
            image="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg"
          ></l-card>
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
  customElements.define("p-homepage", Homepage);
}
