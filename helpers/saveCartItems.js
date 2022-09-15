const saveCartItems = (param) => {
  let cart = param.innerHTML;
  return localStorage.setItem('cartItems', cart);
   
  };
  
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
