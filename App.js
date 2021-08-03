import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import RootNavigator from '@navigation/Navigation'


const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <RootNavigator />
    </>
  );
};

export default App;