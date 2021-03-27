import { call, put, takeLatest, all } from 'typed-redux-saga';
import api from '~/services/api';
import { ICategory, actions, types } from '~/store/ducks/category';
import SnackBar from '~/utils/useSnackBar';

const getCategories = () => api.get<ICategory[]>('/categories');

function* fetchCategories() {
  try {
    const response = yield* call(getCategories);
    yield put(
      actions.fetchCategoriesSuccess({
        categories: response.data,
      }),
    );
  } catch (e) {
    yield put(
      actions.fetchCategoriesFailure({
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
  takeLatest(types.FETCH_CATEGORIES_REQUEST, fetchCategories),
]);
