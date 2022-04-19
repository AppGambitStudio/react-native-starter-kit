import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  navigationScreenOptions,
  screenHeaderOptions,
} from '../config/navigationConfig';

import Home from '../components/Home/Home';
import SideMenu from '../components/SideMenu/SideMenu';

const Drawer = createDrawerNavigator();
export default function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <SideMenu navigation={props.navigation} {...props} />
      )}
      screenOptions={navigationScreenOptions}
      drawerPosition={'left'}
      drawerType={'slide'}
      headerMode={'none'}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={screenHeaderOptions}
      />
    </Drawer.Navigator>
  );
}
