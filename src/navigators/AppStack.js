import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  drawerScreenOptions,
  appStackHeaderOptions,
  appStackScreenOptions,
} from '../config/navigationConfig';

import Home from '../components/Home/Home';
import About from '../components/About/About';
import SideMenu from '../components/SideMenu/SideMenu';

const AppStack = createNativeStackNavigator();
const Screens = props => {
  return (
    <AppStack.Navigator
      initialRouteName={'Home'}
      screenOptions={appStackScreenOptions}>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={appStackHeaderOptions}
      />
      <AppStack.Screen
        name="About"
        component={About}
        options={appStackHeaderOptions}
      />
    </AppStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
export default function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <SideMenu navigation={props.navigation} {...props} />
      )}
      defaultStatus={'closed'}
      screenOptions={drawerScreenOptions}
      drawerPosition={'left'}
      initialRouteName={'Screens'}>
      <Drawer.Screen name="Screens" component={Screens} />
    </Drawer.Navigator>
  );
}
