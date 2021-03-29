import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({
    name: 'MPDEBUG',
  })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga({}))
    .connect();
  if (tron.clear) {
    tron.clear();
  }

  Object.assign(console, {
    tron,
  });
}
