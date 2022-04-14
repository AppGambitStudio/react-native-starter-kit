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
    <View style={commonStyles.flex}>
      <SafeAreaView style={commonStyles.flex}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <TouchableOpacity
            style={styles.drawerRoute}
            onPress={() => navigateToScreen('Home')}>
            <AntDesign name="home" size={25} />
            <Text style={styles.drawerRouteText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerRoute}
            onPress={() => {
              signOut();
            }}>
            <AntDesign name="logout" size={25} />
            <Text style={styles.drawerRouteText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SideMenu;
