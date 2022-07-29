import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import ProfileScreen from '../screens/ProfileScreen'
import HomeScreen from '../screens/HomeScreen'
import InventoryScreen from '../screens/InventoryScreen'
import DonScreen from '../screens/DonScreen'
import { COLORS, icons } from '../constants';
import * as Animatable from 'react-native-animatable';

const TabArr = [
    { route: 'Home', label: 'Home', source: icons.home, component: HomeScreen },
    { route: 'Exchange', label: 'Exchange', source: icons.bag, component: InventoryScreen },
    { route: 'Don', label: 'Don', source: icons.don, component: DonScreen },
    { route: 'Profile', label: 'Profile', source: icons.user, component: ProfileScreen },
  ];
  
  const Tab = createBottomTabNavigator();
  
  const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
  const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }
  
  const circle1 = { 0: { scale: 0 }, 0.3: { scale: .3 }, 0.5: { scale: .5 }, 0.8: { scale: .9 }, 1: { scale: 1 } }
  const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }
  
  const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);
  
    useEffect(() => {
      if (focused) {
        viewRef.current.animate(animate1);
        circleRef.current.animate(circle1);
      } else {
        viewRef.current.animate(animate2);
        circleRef.current.animate(circle2);
      }
    }, [focused])
  
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={styles.container}>
        <Animatable.View
          ref={viewRef}
          duration={500}
          style={styles.container}>
          <View style={styles.btn}>
            <Animatable.View
              ref={circleRef}
              style={styles.circle} />
            <Image
                source={item.source}
                resizeMode='contain'
                style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : '#748c94',
                                }}
            />
          </View>
        </Animatable.View>
      </TouchableOpacity>
    )
  }


  export default function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.route} component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />
              }}
            />
          )
        })}
      </Tab.Navigator>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      top: -5
    },
    tabBar: {
      height: 70,
      position: 'absolute',
      bottom: 16,
      right: 16,
      left: 16,
      borderRadius: 16,
    },
    btn: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 4,
      borderColor: COLORS.white,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center'
    },
    circle: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.secondary,
      borderRadius: 25,
    },
    text: {
      fontSize: 10,
      textAlign: 'center',
      color: COLORS.primary,
    }
  })