import { combineReducers } from 'redux';

import { reducer as product } from './ducks/product';
import { reducer as category } from './ducks/category';

export default combineReducers({
  product,
  category,
});
