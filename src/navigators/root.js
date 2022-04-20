import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from '../navigators/AuthStack';
import AppStack from '../navigators/AppStack';

const Stack = createNativeStackNavigator();

const NavigationRoot = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'App' : 'Auth'}
        screenOptions={{
          headerShown: false,
        }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="App" component={AppStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;
