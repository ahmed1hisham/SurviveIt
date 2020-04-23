import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import PaymentScreen from '../screens/PaymentScreen';
import InteractionScreen from '../screens/InteractionScreen';
import NotifsScreen from '../screens/NotifsScreen';
import QRScanScreen from '../screens/QRScanScreen';
import SearchScreen from '../screens/SearchScreen';
import {View, Image} from 'react-native';

const PaymentStack = createStackNavigator({
  Payment: {
    screen: PaymentScreen,
    navigationOptions: {
      header: null,
    },
  },
  Camera: {
    screen: QRScanScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const BottomNavigator = createBottomTabNavigator(
  {
    Interaction: {
      screen: InteractionScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <View
            style={{
              bottom: 0, // space from bottombar
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {focused ? (
              <Image
                source={require('../assets/CoronaYellow.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignContent: 'center',
                }}
              />
            ) : (
              <Image
                source={require('../assets/CoronaGrey.png')}
                style={{
                  width: 40,
                  height: 40,
                  alignContent: 'center',
                }}
              />
            )}
          </View>
        ),
      },
    },
    Payment: {
      screen: PaymentStack,
      navigationOptions: {
        tabBarIcon: () => (
          <View
            style={{
              position: 'absolute',
              bottom: 30, // space from bottombar
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/QRYellow.png')}
              style={{
                width: 60,
                height: 60,
                alignContent: 'center',
              }}
            />
          </View>
        ),
      },
    },
    Notifications: {
      screen: NotifsScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <View
            style={{
              bottom: 0, // space from bottombar
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {focused ? (
              <Image
                source={require('../assets/NotYellow.png')}
                style={{
                  width: 30,
                  height: 35,
                  alignContent: 'center',
                }}
              />
            ) : (
              <Image
                source={require('../assets/NotGrey.png')}
                style={{
                  width: 30,
                  height: 35,
                  alignContent: 'center',
                }}
              />
            )}
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Payment',
    tabBarOptions: {
      showLabel: false,
      style: {
        height: 75,
        paddingBottom: 10,
      },
    },
  },
);

export default AppNav = createAppContainer(BottomNavigator);
