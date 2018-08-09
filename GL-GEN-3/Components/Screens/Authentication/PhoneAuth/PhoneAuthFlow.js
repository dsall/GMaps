import React from "react";

import LoginScreen from './LoginScreen';
import PinScreen from './PinScreen';
import Home from './Home';
import MaterialBottomTabNavigator from '../../../Screens/MainApp/BottomBar';

import { createSwitchNavigator } from 'react-navigation';


const PhoneAuthFlow = createSwitchNavigator(
  {
    LoginScreen,
    PinScreen,
    Home,
    MaterialBottomTabNavigator,
  },
  {
    initialRouteName: 'LoginScreen'
  }
)


export default PhoneAuthFlow;