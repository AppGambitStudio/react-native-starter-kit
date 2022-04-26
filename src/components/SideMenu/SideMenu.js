import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Animated,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Svg, {Polygon} from 'react-native-svg';
import MaskedView from '@react-native-masked-view/masked-view';
import styles from './style';
import {setLogin} from '../../redux/reducers/Auth/authReducer';
import {useDispatch} from 'react-redux';
import {useNavigationState, CommonActions} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import commonStyles from '../../theme/commonStyles';

const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);
const AnimatedMaskedView = Animated.createAnimatedComponent(MaskedView);

const {width, height} = Dimensions.get('window');
const fromCoords = {x: 0, y: height};
const toCoords = {x: width, y: 0};

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

  const isDrawerOpened = useDrawerStatus() === 'open';
  const polygonRef = React.useRef();
  const animatedWidth = React.useRef(new Animated.Value(0)).current;
  const animation = React.useRef(new Animated.ValueXY(fromCoords)).current;
  const animate = toValue => {
    const animations = [
      Animated.spring(animation, {
        toValue: toValue === 1 ? toCoords : fromCoords,
        useNativeDriver: true,
        bounciness: 2,
        speed: 10,
      }),
      Animated.timing(animatedWidth, {
        toValue: toValue === 1 ? width : 0,
        duration: 0,
        useNativeDriver: false,
      }),
    ];

    return Animated.sequence(toValue === 1 ? animations.reverse() : animations);
  };

  React.useEffect(() => {
    const listener = animation.addListener(v => {
      if (polygonRef?.current) {
        polygonRef.current.setNativeProps({
          points: `0,0 ${v.x}, ${v.y} ${width}, ${height} 0, ${height}`,
        });
      }
    });

    return () => {
      animation.removeListener(listener);
    };
  });

  React.useEffect(() => {
    animate(isDrawerOpened ? 1 : 0).start();
  }, [isDrawerOpened]);

  const opacity = animation.x.interpolate({
    inputRange: [0, width],
    outputRange: [0, 1],
  });

  const translateX = animation.x.interpolate({
    inputRange: [0, width],
    outputRange: [-50, 0],
  });

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

  const maskedStyle = {width: animatedWidth, flex: 1};
  const animatedViewStyle = {
    opacity,
    transform: [{translateX}],
    flex: 1,
    backgroundColor: '#1A1924',
  };

  return (
    <AnimatedMaskedView
      style={maskedStyle}
      maskElement={
        <Svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          style={commonStyles.transparent}>
          <AnimatedPolygon
            ref={polygonRef}
            points={`0,0 ${fromCoords.x}, ${fromCoords.y} ${width}, ${height} 0, ${height}`}
            // points={`0,0 ${toCoords.x}, ${toCoords.y} ${width}, ${height} 0, ${height}`}
            fill="blue"
          />
        </Svg>
      }>
      <Animated.View style={animatedViewStyle}>
        <SafeAreaView style={commonStyles.flex}>
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
      </Animated.View>
    </AnimatedMaskedView>
  );
};

export default SideMenu;
