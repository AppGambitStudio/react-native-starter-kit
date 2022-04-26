import React from 'react';
import {Text, SafeAreaView, Pressable, View} from 'react-native';
import styles from './style';
import commonStyles from '../../theme/commonStyles';

const Home = props => {
  const navigation = props.navigation;

  return (
    <SafeAreaView style={commonStyles.flex}>
      <View style={[commonStyles.containerPadding, styles.container]}>
        <Text style={styles.screenText}>Home</Text>
        <Pressable
          onPress={() => navigation.navigate('About')}
          style={styles.aboutBtn}>
          <Text style={styles.aboutBtnText}>About</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
