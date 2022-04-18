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
import commonStyles from '../../theme/commonStyles';
import {setLogin} from '../../redux/reducers/Auth/authReducer';
import {useDispatch} from 'react-redux';

const SideMenu = props => {
  const dispatch = useDispatch();

  const navigateToScreen = route => {
    props.navigation.navigate(route);
    props.navigation.closeDrawer();
  };

  const signOut = () => {
    dispatch(setLogin(false));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={commonStyles.flex}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.itemContainer}>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigateToScreen('Home')}>
            <AntDesign name="home" size={25} color="white" />
            <Text style={styles.drawerRouteText}>Home</Text>
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
    </View>
  );
};

export default SideMenu;
