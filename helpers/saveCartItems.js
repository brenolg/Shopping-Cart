const saveCartItems = async (param) => {
  const cart = await getInner(param)
  return localStorage.setItem('cartItems', cart);
   
  };
  
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

