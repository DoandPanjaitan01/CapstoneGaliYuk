import TheGaliYukDbSource from '../../data/product-galiyuk-source';
import { createProductsItemTemplate } from '../templates/template-creator';

const Charts = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Pesanan Anda</h2>
        <div id="charts" class="charts">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    // const products = await TheGaliYukDbSource.productList();
    // const productsContainer = document.querySelector('#charts');
    // console.log(products);

    // products.forEach((products) => {
    //   productsContainer.innerHTML += createProductsItemTemplate(products);
    // });
  },
};

export default Charts;
