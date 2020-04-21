import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import PaymentScreen from '../screens/PaymentScreen';
import InteractionScreen from '../screens/InteractionScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import QRScanScreen from '../screens/QRScanScreen';

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

const BottomNavigator = createBottomTabNavigator({
  Payment: {
    screen: PaymentStack,
  },
  Interaction: {
    screen: InteractionScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
});

export default AppNav = createAppContainer(BottomNavigator);
