import 'jest-styled-components'

jest.mock('react-native-reanimated', () => {


  return {
    ...require('react-native-reanimated/mock'),
    Easing: {
      elastic: jest.fn()
    }
  }
});

