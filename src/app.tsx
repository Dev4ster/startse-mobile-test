import React from 'react';
import { View, Text } from 'react-native';
import ThemeProviderApp from '~/styles/ThemeProviderApp';
import Main from './components/Main/Main';

// import { Container } from './styles';

const src: React.FC = () => (
  <ThemeProviderApp>
    <Main>
      <Text>oi</Text>
    </Main>
  </ThemeProviderApp>
);

export default src;
