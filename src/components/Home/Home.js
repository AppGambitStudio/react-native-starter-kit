import React from 'react';
import {Text, SafeAreaView, Pressable} from 'react-native';
import styles from './style';
import commonStyles from '../../theme/commonStyles';
import Animated, {FadeIn} from 'react-native-reanimated';

const Home = props => {
  const navigation = props.navigation;

  return (
    <SafeAreaView style={commonStyles.flex}>
      <Animated.View
        style={[commonStyles.containerPadding, styles.container]}
        entering={FadeIn.delay(200)}>
        <Text style={styles.screenText}>Home</Text>
        <Pressable
          onPress={() => navigation.navigate('About')}
          style={styles.aboutBtn}>
          <Text style={styles.aboutBtnText}>About</Text>
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Home;
