import React from 'react';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft';

export const navigationScreenOptions = {
  drawerStyle: {
    backgroundColor: 'white',
    width: '80%',
  },
  drawerType: 'slide',
  headerShown: false,
};

export const screenHeaderOptions = props => ({
  headerLeft: hederProps => <HeaderLeft {...props} {...hederProps} />,
  headerTitleAlign: 'center',
  animation: 'slide_from_right',
});
