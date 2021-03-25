import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home/Home';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        mode="modal"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
