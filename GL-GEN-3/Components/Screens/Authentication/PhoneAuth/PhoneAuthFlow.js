import React from "react";

import LoginScreen from './LoginScreen';
import PinScreen from './PinScreen';
import Home from './Home';


import { createSwitchNavigator } from 'react-navigation';


const PhoneAuthFlow = createSwitchNavigator(
  {
    LoginScreen,
    PinScreen,
    Home,
  },
  {
    initialRouteName: 'LoginScreen'
  }
)


export default PhoneAuthFlow;