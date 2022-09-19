const saveCartItems = (param) => {
  const cart = param.innerHTML;
  return localStorage.setItem('cartItems', cart);
  //  troquei let por const
};
  
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
