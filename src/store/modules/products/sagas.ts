import { call, put, takeLatest, all } from 'typed-redux-saga';
import api from '~/services/api';
import { setAllProducts } from './actions';
import { setAllProductsPayload } from './reducer';

import SnackBar from '~/utils/useSnackBar';

const getProducts = () =>
  api.get<setAllProductsPayload['payload']['data']>('/products');

function* getAllProducts() {
  yield put(
    setAllProducts({
      loading: true,
    }),
  );
  try {
    const response = yield* call(getProducts);
    yield put(
      setAllProducts({
        data: response.data,
        error: null,
      }),
    );
  } catch (e) {
    yield put(
      setAllProducts({
        error: e,
      }),
    );

    SnackBar({
      text: 'Erro com nossos servidores',
      type: 'error',
    });
  } finally {
    yield* put(
      setAllProducts({
        loading: false,
      }),
    );
  }
}

export default all([takeLatest('@products/GET_ALL_PRODUCTS', getAllProducts)]);
