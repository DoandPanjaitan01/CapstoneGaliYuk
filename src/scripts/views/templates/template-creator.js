import CONFIG from '../../globals/config';

const createProductDetailTemplate = (resto) => `
      <h2 tabindex="0" class="resto__title" id="${resto.id}">${resto.name}</h2>
      <picture>
        <source media="(max-width: 600px)" data-srcset="${CONFIG.SMALL_IMAGE_URL + resto.pictureId}" class="lazyload">
        <img class="resto__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
      </picture>
      <div class="resto__info">
        <h3>Detail Restauran</h3>
        <h4>Deskripsi</h4>
        <p>${resto.description}</p>

        <h4>Alamat</h4>
        <p>${resto.address}</p>

        <h4>Kota</h4>
        <p>${resto.city}</p>

        <h4>Menu Makanan</h4>
        ${resto.menus.foods.map((foods) => `
        <div class="food-item">
        <p>🍽 ${foods.name}</p>
        </div>
        `).join('')}
        
        <h4>Menu Minuman</h4>
        ${resto.menus.drinks.map((drinks) => `
        <div class="food-item">
        <p>🥂 ${drinks.name}</p>
        </div>
        `).join('')}
        </div>
      
        <div class="resto__overview">
          <h3>Customer Reviews</h3>
        ${resto.customerReviews.map((customerReviews) => `
        <div class="review-item">
          <p>Tanggal: ${customerReviews.date}</p>
          <p>Nama: ${customerReviews.name}</p>
          <p>Review: ${customerReviews.review}</p><br>
        </div>
        `).join('')}
        </div>

    `;

const createProductsItemTemplate = (resto) => `
      <div class="resto-item">
        <div class="resto-item__header">
        <picture>
        <source media="(max-width: 600px)" data-srcset="${CONFIG.SMALL_IMAGE_URL + resto.pictureId}" class="lazyload">
        <img class="resto__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
      </picture>
          <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating || '-'}</span></p>
          </div>
        </div>
        <div class="resto-item__content">
          <h3 class="resto__title"><a href="/#/detail/${resto.id}">${resto.name || '-'}</a></h3>
          <p>${resto.description || '-'}</p>
          <a class="button to-detail" href="${`/#/detail/${resto.id}`}">Selengkapnya</a>
        </div>
      </div>
    `;
const createLikeProductButtonTemplate = () => `
    <button aria-label="sukai produk ini" id="likeButton" class="like">🖤
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createUnlikeProductButtonTemplate = () => `
    <button aria-label="batal sukai produk ini" id="likeButton" class="like">❤️
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createProductsItemTemplate, createProductDetailTemplate, createLikeProductButtonTemplate,
  createUnlikeProductButtonTemplate,
};
