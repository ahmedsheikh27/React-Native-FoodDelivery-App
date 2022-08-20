import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from '../screens/SplashScreen';
import Welcome from '../screens/Welcome';


const AppNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Welcome" component={Welcome} />
                {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
