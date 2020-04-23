import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import PaymentScreen from '../screens/PaymentScreen';
import InteractionScreen from '../screens/InteractionScreen';
import NotifsScreen from '../screens/NotifsScreen';
import QRScanScreen from '../screens/QRScanScreen';
import SearchScreen from '../screens/SearchScreen';

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
    },
    Payment: {
      screen: PaymentScreen,
    },
    Notifications: {
      screen: NotifsScreen,
    },
  },
  {initialRouteName: 'Payment'},
);

export default AppNav = createAppContainer(BottomNavigator);
