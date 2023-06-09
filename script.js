// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */

const cart = document.querySelector('.cart__items');
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const innerHTML = (elemento) => elemento.innerHTML;

const createProducts = async () => {
  const productsHtml = document.querySelector('.items');
  const getJson = await fetchProducts('computador');
  return getJson.results.forEach((e) => {
    const { id, title, thumbnail } = e;
    productsHtml.appendChild(createProductItemElement({ id, title, thumbnail }));
  });
};

const loadLocal = () => {
  const liLocal = getSavedCartItems();
  cart.innerHTML = liLocal;
};

const load = () => {
  const elementoPai = document.querySelector('.items');
  const loadP = document.createElement('p');
  loadP.className = 'loading';
  loadP.innerHTML = 'carregando...';
  elementoPai.appendChild(loadP);
};

const removeLoad = () => {
  const loadOnScreen = document.querySelector('.loading');
  loadOnScreen.remove();
};

window.onload = async () => {
  load();
  await createProducts();
  loadLocal();
  removeLoad();
 };

 const btnDeleteCart = document.querySelector('.empty-cart');
 btnDeleteCart.addEventListener('click', () => {
  const lis = document.querySelectorAll('.cart__item');
  lis.forEach((element) => {
    element.remove();
    saveCartItems(innerHTML(cart));
  });
});

const cartItemClickListener = (e) => {
  const li = e.target;
  li.remove();
  saveCartItems(innerHTML(cart));
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  saveCartItems(innerHTML(cart));
  return li;
};

window.addEventListener('click', async (e) => {
  if (e.target.classList.contains('item__add')) { 
    const itemIdFetch = e.target.parentNode.firstElementChild.innerHTML;
    const dados = await fetchItem(itemIdFetch);
    const id = await dados.id;
    const title = await dados.title;
    const price = await dados.price;
    cart.appendChild(createCartItemElement({ id, title, price }));
    saveCartItems(innerHTML(cart));
  } 
});
