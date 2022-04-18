import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../components/Home/Home';
import SideMenu from '../components/SideMenu/SideMenu';

const AppFlow = createNativeStackNavigator();

function AppStack() {
  return (
    <AppFlow.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerStyle: {backgroundColor: '#1A1924', borderBottomColor: 'white'},
        headerTitleStyle: {color: 'white'},
      }}>
      <AppFlow.Screen name="Home" component={Home} />
      {/* App Multiple screens here */}
    </AppFlow.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export default function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <SideMenu navigation={props.navigation} {...props} />
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: '80%',
        },
        headerStyle: {backgroundColor: '#1A1924', borderBottomColor: 'white'},
        headerTitleStyle: {color: 'white'},
        headerTintColor: 'white',
      }}
      drawerPosition={'left'}
      drawerType={'slide'}
      headerMode={'none'}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
