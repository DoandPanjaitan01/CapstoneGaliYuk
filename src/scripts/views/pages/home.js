import TheGaliYukDbSource from '../../data/product-galiyuk-source';
import { createProductsItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Temukan Jasa Penggalian</h2>
        <div id="products" class="products">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const products = await TheGaliYukDbSource.productList();
    const productsContainer = document.querySelector('#products');
    console.log(products);

    products.forEach((products) => {
      productsContainer.innerHTML += createProductsItemTemplate(products);
    });
  },
};

export default Home;
