import React from 'react';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const drawerScreenOptions = {
  drawerStyle: {
    backgroundColor: 'transparent',
    width: width,
  },
  overlayColor: 'transparent',
  drawerType: 'front',
  headerShown: false,
};

export const appStackHeaderOptions = props => ({
  headerLeft: hederProps => <HeaderLeft {...props} {...hederProps} />,
  headerTitleAlign: 'center',
  animation: 'slide_from_right',
});
