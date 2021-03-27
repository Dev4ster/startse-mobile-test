import { ProductsReducerProps } from './reducer';

export const getAllProducts = () => ({
  type: '@products/GET_ALL_PRODUCTS',
});

export const setAllProducts = (data: ProductsReducerProps) => ({
  type: '@products/SET_ALL_PRODUCTS',
  payload: data,
});
