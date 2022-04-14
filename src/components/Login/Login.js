import React from 'react';
import {SafeAreaView, Pressable, View, Text} from 'react-native';
import styles from './style';
import {setLogin} from '../../redux/reducers/Auth/authReducer';
import {useDispatch} from 'react-redux';

const Login = props => {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(setLogin(true));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable onPress={() => login()} style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
