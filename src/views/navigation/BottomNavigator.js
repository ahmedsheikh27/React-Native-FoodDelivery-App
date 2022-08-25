import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import OnBoardScreen from '../screens/OnBoardScreen';
import { COLORS } from '../../consts/Colors';
import { Icon } from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return ( <Tab.Navigator
    tabBarOptions={{
      style: {
        height: 55,
        borderTopWidth: 0,
        elevation: 0,
      },
      showLabel: false,
      activeTintColor: COLORS.primary,
    }}>
    <Tab.Screen
      name="HomeScreen"
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="home-filled" color={color} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="LocalMall"
      component={OnBoardScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="local-mall" color={color} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="shopping-cart" color={color} size={28} />
        ),
      }}
    />
  </Tab.Navigator>
);
};
export default BottomNavigator