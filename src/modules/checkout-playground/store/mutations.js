import { updatePlaygroundCart } from "../../../utilities/product-categories";

export default {
  ADD_PRODUCT_TO_CART: (state, product) => {
    const productIndex = state.cart?.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex === -1) state.cart.push({ ...product, quantity: 1 });
    else {
      state.cart = state.cart?.map((item) => {
        if (item.id !== product.id) return item;
        else return { ...item, quantity: item.quantity + 1 };
      });
    }
    updatePlaygroundCart(state.cart);
  },

  REMOVE_CART_ITEM: (state, product) => {
    state.cart = state.cart?.filter((item) => item.id !== product.id);
    updatePlaygroundCart(state.cart);
  },

  UPDATE_CART_ITEM: (state, { product, quantity }) => {
    state.cart = state.cart?.map((item) => {
      if (item.id !== product.id) return item;
      else return { ...item, quantity };
    });

    updatePlaygroundCart(state.cart);
  },

  CLEAR_CART: (state) => {
    state.cart = [];
    updatePlaygroundCart([]);
  },
};
