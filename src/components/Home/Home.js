import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import commonStyles from '../../theme/commonStyles';
import {setLogin} from '../../redux/reducers/Auth/authReducer';
import {useDispatch} from 'react-redux';

const Home = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(setLogin(false));
  };

  return (
    <View style={commonStyles.flex}>
      <TouchableOpacity
        style={styles.drawerRoute}
        onPress={() => {
          signOut();
        }}>
        <AntDesign name="logout" size={25} />
        <Text style={styles.drawerRouteText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
