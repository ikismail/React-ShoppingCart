import {
  FETCH_ALL_PRODUCTS,
  FETCH_BEST_PRODUCTS,
  FETCH_TOP_PRODUCTS
} from "../actions/product.types";
import { Product } from "../model/product";

const initialState = {
  products: [],
  bestProducts: [],
  topProducts: []
};
const ProductReducer = (
  state = initialState,
  action: { type: string; payload: Product[] }
) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_PRODUCTS:
      console.log(`*** ${type} ***`);
      return {
        ...state,
        products: payload
      };
    case FETCH_BEST_PRODUCTS:
      console.log(`*** ${type} ***`);
      return {
        ...state,
        bestProducts: payload
      };
    case FETCH_TOP_PRODUCTS:
      console.log(`*** ${type} ***`);
      return {
        ...state,
        topProducts: payload
      };
    default:
      return state;
  }
};

export default ProductReducer;
