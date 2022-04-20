import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {setLogin} from '../../redux/reducers/Auth/authReducer';
import {useDispatch} from 'react-redux';
import {useNavigationState, CommonActions} from '@react-navigation/native';

const SideMenu = props => {
  const navigation = props.navigation;
  let index = 0;
  useNavigationState(state => {
    index =
      state && state.routes && state.routes[0].state
        ? state.routes[0].state.routes[0].state
          ? state.routes[0].state.routes[0].state.index
          : 0
        : 0;
  });

  const dispatch = useDispatch();

  const navigateToScreen = route => {
    navigation.navigate(route);
    navigation.closeDrawer();
  };

  const signOut = () => {
    navigation.closeDrawer();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
    dispatch(setLogin(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.drawerItem(index === 0)}
          onPress={() => {
            navigateToScreen('Home');
          }}>
          <AntDesign name="home" size={25} color="white" />
          <Text style={styles.drawerRouteText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem(index === 1)}
          onPress={() => {
            navigateToScreen('About');
          }}>
          <AntDesign name="infocirlceo" size={25} color="white" />
          <Text style={styles.drawerRouteText}>About</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.bottomSection}>
          <View style={styles.logoutContainer}>
            <TouchableOpacity
              style={[styles.logoutSection]}
              onPress={() => {
                signOut();
              }}>
              <AntDesign name="logout" size={25} color="white" />
              <Text style={styles.drawerRouteText}>Log Out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.versionInfo}>
            <Text style={styles.versionText}>Build : v1.1</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SideMenu;
