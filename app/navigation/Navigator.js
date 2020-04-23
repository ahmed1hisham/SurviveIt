import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PaymentScreen from '../screens/PaymentScreen';
import InteractionScreen from '../screens/InteractionScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import QRScanScreen from '../screens/QRScanScreen';
import SignUp from '../screens/auth/SignUp';
import Login from '../screens/auth/Login';
import AuthLoading from '../screens/auth/AuthLoading';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
})
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

const AppController = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoading,
    navigationOptions: {
      screen: AuthLoading
    }
  },
  Auth: {
    screen: AuthStack
  },
  App: {
    screen: BottomNavigator
  }
}, {
  initialRouteName: 'AuthLoading'
})

export default AppNav = createAppContainer(AppController);
