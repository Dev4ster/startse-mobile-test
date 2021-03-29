import { call, put, takeLatest, all } from 'typed-redux-saga';

import i18n from '~/i18n';
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
      text: i18n.t('default.serverErrorMessage'),
      type: 'error',
    });
  }
}

export default all([
  takeLatest(types.FETCH_CATEGORIES_REQUEST, fetchCategories),
]);
