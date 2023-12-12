import { createWelcomeTemplate } from '../templates/template-creator';

const Welcome = {
  async render() {
    return `
      <div class="welcome"></div>
    `;
  },

  async afterRender() {
    const productsContainer = document.querySelector('#products');
    productsContainer.innerHTML += createWelcomeTemplate();
  },
};

export default Welcome;