import React from 'react';
import ThemeProviderApp from '~/styles/ThemeProviderApp';
import Routes from './routes';

const src: React.FC = () => (
  <ThemeProviderApp>
    <Routes />
  </ThemeProviderApp>
);

export default src;
