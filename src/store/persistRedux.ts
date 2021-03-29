import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reducer } from 'react';

import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'appStarSe',
      storage: AsyncStorage,
      whitelist: ['products', 'categories'],
    },
    reducers,
  );

  return persistedReducer;
};
