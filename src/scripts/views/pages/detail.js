import UrlParser from '../../routes/url-parser';
import TheGaliYukDbSource from '../../data/product-galiyuk-source';
import { createProductDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="product" class="product"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const product = await TheGaliYukDbSource.detailProduct(url.id);
    console.log(product);
    const productContainer = document.querySelector('#product');
    productContainer.innerHTML = createProductDetailTemplate(resto);


  }
}


export default Detail;
