import categories from "../../../utilities/product-categories";
import {
  getPlaygroundCart,
  getPlaygroundCountry,
} from "../../../utilities/product-categories";

export default () => ({
  categories,

  cart: getPlaygroundCart(),

  checkout_country: getPlaygroundCountry(),
});
