import {
  FETCH_ALL_PRODUCTS,
  FETCH_BEST_PRODUCTS,
  FETCH_TOP_PRODUCTS
} from "./product.types";
import ProductService from "../services/products.service";
import { Product } from "../model/product";

export const fetchAllProducts = () => async (
  dispatch: (arg0: { type: string; payload: Product[] }) => void
) => {
  const products = ProductService.getAllProducts();
  dispatch({ type: FETCH_ALL_PRODUCTS, payload: products });
};

export const fetchTopProducts = () => async (
  dispatch: (arg: { type: string; payload: Product[] }) => void
) => {
  const products = ProductService.getTopProducts();
  dispatch({ type: FETCH_TOP_PRODUCTS, payload: products });
};

export const fetchBestProducts = () => async (
  dispatch: (arg: { type: string; payload: Product[] }) => void
) => {
  const products = ProductService.getBestProducts();
  dispatch({ type: FETCH_BEST_PRODUCTS, payload: products });
};
