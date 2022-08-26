import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {COLORS} from './src/consts/Colors';
import OnBoardScreen from '../screens/OnBoardScreen';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <>
  <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
    <Stack.Screen name='Home' component={Home} />
  </Stack.Navigator>
    </>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})