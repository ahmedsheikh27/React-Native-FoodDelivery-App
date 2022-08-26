import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/views/navigation/StackNavigation';
import BottomNavigator from './src/views/navigation/BottomNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
      <BottomNavigator/>
    </NavigationContainer>
  );
};

export default App;
