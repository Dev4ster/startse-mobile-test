import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meuprestador',
      storage: AsyncStorage,
      whitelist: ['products', 'categories'],
    },
    reducers,
  );

  return persistedReducer;
};
