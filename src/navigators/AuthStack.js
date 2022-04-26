import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../components/Login/Login';
import {appStackScreenOptions} from '../config/navigationConfig';

const AuthFlow = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <AuthFlow.Navigator
      initialRouteName={'Login'}
      screenOptions={{...appStackScreenOptions, headerTitleAlign: 'center'}}>
      <AuthFlow.Screen name="Login" component={Login} />
    </AuthFlow.Navigator>
  );
}
