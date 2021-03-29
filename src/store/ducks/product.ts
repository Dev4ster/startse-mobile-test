import produce from 'immer';
import { Action } from 'redux';

const FETCH_PRODUCT_REQUEST = '@product/FETCH_PRODUCT_REQUEST';
const FETCH_PRODUCT_SUCCESS = '@product/FETCH_PRODUCT_SUCCESS';
const FETCH_PRODUCT_FAILURE = '@product/FETCH_PRODUCT_FAILURE';
const FETCH_PRODUCTS_REQUEST = '@product/FETCH_PRODUCTS_REQUEST';
const FETCH_PRODUCTS_SUCCESS = '@product/FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAILURE = '@product/FETCH_PRODUCTS_FAILURE';
const SUBMIT_PRODUCT_REQUEST = '@product/SUBMIT_PRODUCT_REQUEST';
const SUBMIT_PRODUCT_SUCCESS = '@product/SUBMIT_PRODUCT_SUCCESS';
const SUBMIT_PRODUCT_FAILURE = '@product/SUBMIT_PRODUCT_FAILURE';
const UPDATE_PRODUCT_REQUEST = '@product/UPDATE_PRODUCT_REQUEST';
const UPDATE_PRODUCT_SUCCESS = '@product/UPDATE_PRODUCT_SUCCESS';
const UPDATE_PRODUCT_FAILURE = '@product/UPDATE_PRODUCT_FAILURE';
const DELETE_PRODUCT_REQUEST = '@product/DELETE_PRODUCT_REQUEST';
const DELETE_PRODUCT_SUCCESS = '@product/DELETE_PRODUCT_SUCCESS';
const DELETE_PRODUCT_FAILURE = '@product/DELETE_PRODUCT_FAILURE';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  photoUrl: string;
  tags: string[];
  animatedOnRender?: boolean;
}

export interface ProductState {
  loading: boolean;
  products?: IProduct[];
  error: string | null;
}

export interface FetchProductsSuccessPayload {
  products: IProduct[];
}

export interface FetchProductsFailurePayload {
  error: string;
}

export interface DeleteProductRequestPayload {
  productId: number;
}

export interface DeleteProductSuccessPayload {
  productId: number;
}

export interface DeleteProductFailurePayload {
  error: string;
}

export interface SubmitProductRequestPayload {
  data: Omit<IProduct, 'id'>;
}

export interface SubmitProductSuccessPayload {
  product: IProduct;
}

export interface SubmitProductFailurePayload {
  error: string;
}

export interface UpdateProductRequestPayload {
  data: Partial<IProduct>;
  productId: number;
  onSuccess?: () => void;
}

export interface UpdateProductSuccessPayload {
  product: IProduct;
}

export interface UpdateProductFailurePayload {
  error: string;
}

export interface DeleteProductRequest extends Action {
  type: typeof DELETE_PRODUCT_REQUEST;
  payload: DeleteProductRequestPayload;
}

export interface DeleteProductSuccess extends Action {
  type: typeof DELETE_PRODUCT_SUCCESS;
  payload: DeleteProductSuccessPayload;
}

export interface DeleteProductFailure extends Action {
  type: typeof DELETE_PRODUCT_FAILURE;
  payload: DeleteProductFailurePayload;
}

export interface FetchProductsRequest extends Action {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

export interface FetchProductsSuccess extends Action {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: FetchProductsSuccessPayload;
}

export interface FetchProductsFailure extends Action {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: FetchProductsFailurePayload;
}

export interface SubmitProductRequest extends Action {
  type: typeof SUBMIT_PRODUCT_REQUEST;
  payload: SubmitProductRequestPayload;
}

export interface SubmitProductSuccess extends Action {
  type: typeof SUBMIT_PRODUCT_SUCCESS;
  payload: SubmitProductSuccessPayload;
}

export interface SubmitProductFailure extends Action {
  type: typeof SUBMIT_PRODUCT_FAILURE;
  payload: SubmitProductFailurePayload;
}

export interface UpdateProductRequest extends Action {
  type: typeof UPDATE_PRODUCT_REQUEST;
  payload: UpdateProductRequestPayload;
}

export interface UpdateProductSuccess extends Action {
  type: typeof UPDATE_PRODUCT_SUCCESS;
  payload: UpdateProductSuccessPayload;
}

export interface UpdateProductFailure extends Action {
  type: typeof UPDATE_PRODUCT_FAILURE;
  payload: UpdateProductFailurePayload;
}

export type ProductsActions =
  | FetchProductsRequest
  | FetchProductsSuccess
  | FetchProductsFailure
  | DeleteProductRequest
  | DeleteProductSuccess
  | DeleteProductFailure
  | SubmitProductRequest
  | SubmitProductSuccess
  | SubmitProductFailure
  | UpdateProductRequest
  | UpdateProductSuccess
  | UpdateProductFailure;

const INITIAL_STATE = {
  error: null,
  loading: false,
  products: [],
} as ProductState;

export const reducer = (state = INITIAL_STATE, action: ProductsActions) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        draft.loading = true;
        return draft;
      case FETCH_PRODUCTS_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;
      case FETCH_PRODUCTS_SUCCESS:
        draft.loading = false;
        draft.products = action.payload.products;
        draft.error = null;
        return draft;
      case DELETE_PRODUCT_REQUEST:
        draft.loading = true;
        return draft;
      case DELETE_PRODUCT_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;
      case DELETE_PRODUCT_SUCCESS:
        draft.loading = false;
        draft.products = draft.products?.filter(
          product => product.id !== action.payload.productId,
        );
        draft.error = null;
        return draft;
      case SUBMIT_PRODUCT_REQUEST:
        draft.loading = true;
        return draft;
      case SUBMIT_PRODUCT_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;
      case SUBMIT_PRODUCT_SUCCESS:
        draft.loading = false;
        draft.products?.push(action.payload.product);
        draft.error = null;
        return draft;
      case UPDATE_PRODUCT_REQUEST:
        draft.loading = true;
        return draft;
      case UPDATE_PRODUCT_SUCCESS:
        draft.loading = false;
        draft.products = draft.products?.map(product => {
          if (product.id === action.payload.product.id) {
            return {
              ...action.payload.product,
            };
          }
          return product;
        });
        draft.error = null;
        return draft;
      case UPDATE_PRODUCT_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        return draft;
      default:
        return draft;
    }
  });

function fetchProductsRequest() {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
}

function fetchProductsFailure(data: FetchProductsFailurePayload) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: {
      error: data.error,
    },
  };
}

function fetchProductsSuccess(data: FetchProductsSuccessPayload) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
      products: data.products,
    },
  };
}

function deleteProductRequest(data: DeleteProductRequestPayload) {
  return {
    type: DELETE_PRODUCT_REQUEST,
    payload: data,
  };
}

function deleteProductSuccess(data: DeleteProductSuccessPayload) {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: data,
  };
}

function deleteProductFailure(data: DeleteProductFailurePayload) {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: data,
  };
}

function submitProductRequest(data: SubmitProductRequestPayload) {
  return {
    type: SUBMIT_PRODUCT_REQUEST,
    payload: data,
  };
}

function submitProductSuccess(data: SubmitProductSuccessPayload) {
  return {
    type: SUBMIT_PRODUCT_SUCCESS,
    payload: data,
  };
}

function submitProductFailure(data: SubmitProductFailurePayload) {
  return {
    type: SUBMIT_PRODUCT_FAILURE,
    payload: data,
  };
}

function updateProductRequest(data: UpdateProductRequestPayload) {
  return {
    type: UPDATE_PRODUCT_REQUEST,
    payload: data,
  };
}

function updateProductSuccess(data: UpdateProductSuccessPayload) {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: data,
  };
}

function updateProductFailure(data: UpdateProductFailurePayload) {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload: data,
  };
}

const actions = {
  fetchProductsRequest,
  fetchProductsFailure,
  fetchProductsSuccess,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
  submitProductRequest,
  submitProductSuccess,
  submitProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
};

const types = {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SUBMIT_PRODUCT_REQUEST,
  SUBMIT_PRODUCT_SUCCESS,
  SUBMIT_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
};

export { actions, types };
