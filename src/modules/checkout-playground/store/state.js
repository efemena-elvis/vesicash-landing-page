import categories from "../../../utilities/product-categories";
import { getPlaygroundCart } from "../../../utilities/product-categories";

export default () => ({
  categories,

  cart: getPlaygroundCart(),
});
