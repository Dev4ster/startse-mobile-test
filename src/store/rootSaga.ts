import { all } from 'typed-redux-saga';

import product from './sagas/product';
import category from './sagas/category';

export default function* rootSaga() {
  return yield* all([product, category]);
}
