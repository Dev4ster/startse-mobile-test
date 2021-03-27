import { call, put, takeLatest, all } from 'typed-redux-saga';
import api from '~/services/api';
import {
  IProduct,
  actions,
  types,
  DeleteProductRequest,
  SubmitProductRequest,
} from '~/store/ducks/product';
import SnackBar from '~/utils/useSnackBar';

const getProducts = () => api.get<IProduct[]>('/products');
const createProduct = (data: Omit<IProduct, 'id'>) =>
  api.post<IProduct>('/products', data);
const deleteProduct = (productId: number) =>
  api.delete(`/products/${productId}`);

function* createProductRequest(action: SubmitProductRequest) {
  try {
    const response = yield* call(createProduct, action.payload.data);
    yield put(
      actions.submitProductSuccess({
        product: response.data,
      }),
    );
  } catch (e) {
    SnackBar({
      text: 'Erro com nossos servidores',
      type: 'error',
    });
    yield put(
      actions.submitProductFailure({
        error: e.message,
      }),
    );
  }
}

function* deleteProductRequest(action: DeleteProductRequest) {
  try {
    yield* call(deleteProduct, action.payload.productId);
    yield put(
      actions.deleteProductSuccess({
        productId: action.payload.productId,
      }),
    );
  } catch (e) {
    SnackBar({
      text: 'Erro com nossos servidores',
      type: 'error',
    });
    yield put(
      actions.deleteProductFailure({
        error: e.message,
      }),
    );
  }
}

function* fetchProducts() {
  try {
    const response = yield* call(getProducts);
    yield put(
      actions.fetchProductsSuccess({
        products: response.data,
      }),
    );
  } catch (e) {
    yield put(
      actions.fetchProductsFailure({
        error: e.message,
      }),
    );

    SnackBar({
      text: 'Erro com nossos servidores',
      type: 'error',
    });
  }
}

export default all([
  takeLatest(types.FETCH_PRODUCTS_REQUEST, fetchProducts),
  takeLatest(types.DELETE_PRODUCT_REQUEST, deleteProductRequest),
  takeLatest(types.SUBMIT_PRODUCT_REQUEST, createProductRequest),
]);
