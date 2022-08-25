import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import OnBoardScreen from '../screens/OnBoardScreen';
import { Icon } from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
      options={{tabBarIcon: ({color})=><Icon name='home-filled' />}}
      />
      <Tab.Screen name="Settings" component={OnBoardScreen} />
    </Tab.Navigator>
  );
}
export default BottomNavigator