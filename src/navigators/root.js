import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import AuthStack from '../navigators/AuthStack';
import AppStack from '../navigators/AppStack';

const Stack = createNativeStackNavigator();

const NavigationRoot = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
      {/* {!isLoggedIn ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="App" component={AppStack} />
        )} */}
    </NavigationContainer>
  );
};

export default NavigationRoot;
