import { all } from 'typed-redux-saga';

import products from './modules/products/sagas';

export default function* rootSaga() {
  return yield* all([products]);
}
