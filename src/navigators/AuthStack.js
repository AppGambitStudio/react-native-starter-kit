import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../components/Login/Login';

const AuthFlow = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <AuthFlow.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerStyle: {backgroundColor: '#1A1924', borderBottomColor: 'white'},
        headerTitleStyle: {color: 'white'},
      }}>
      <AuthFlow.Screen name="Login" component={Login} />
    </AuthFlow.Navigator>
  );
}
