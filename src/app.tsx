import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '~/config/reactotron';
import ThemeProviderApp from '~/styles/ThemeProviderApp';
import Routes from './routes';
import { persistor, store } from './store';

const src: React.FC = () => (
  <ThemeProviderApp>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PersistGate>
  </ThemeProviderApp>
);

export default src;
