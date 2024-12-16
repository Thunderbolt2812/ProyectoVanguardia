import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ChatScreen from './chat';

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen 
          name="SignIn" 
          component={SignIn} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Chat" 
          component={ChatScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
