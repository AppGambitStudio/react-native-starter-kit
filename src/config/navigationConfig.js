import React from 'react';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft';

export const navigationScreenOptions = {
  drawerStyle: {
    backgroundColor: 'white',
    width: '80%',
  },
  headerStyle: {backgroundColor: '#1A1924', borderBottomColor: 'white'},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};

export const screenHeaderOptions = props => ({
  headerLeft: hederProps => <HeaderLeft {...props} {...hederProps} />,
  headerTitleAlign: 'center',
});
