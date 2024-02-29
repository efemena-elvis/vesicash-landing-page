export default {
  getCart: (state) => state.cart,

  getCategories: (state) => state.categories,

  getCartCount: (state) => {
    return state.cart?.reduce((sum, item) => {
      sum += item.quantity;
      return sum;
    }, 0);
  },

  getOrderSummary: (state) => {
    const cart = state.cart;
    if (!cart?.length)
      return {
        subtotal: 0.0,
        tax: 0.0,
        total: 0.0,
      };
    const subtotal = cart?.reduce((total, item) => {
      total += item.price * item.quantity;
      return total;
    }, 0);

    const tax = cart?.reduce((total, item) => {
      total += item.tax;
      return total;
    }, 0);

    const total = subtotal + tax;
    return {
      subtotal,
      tax,
      total,
    };
  },
};
