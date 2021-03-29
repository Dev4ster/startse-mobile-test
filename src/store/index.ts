import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import persistRedux from './persistRedux';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = CreateSagaMiddleware({
  sagaMonitor,
});

const enhancer =
  process.env.NODE_ENV === 'development'
    ? (compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMiddleware),
      ) as StoreEnhancer)
    : (applyMiddleware(sagaMiddleware) as StoreEnhancer);

const store = createStore(persistRedux(rootReducer), enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
