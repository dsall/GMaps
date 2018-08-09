import React from "react";

import Login from './Login';
import Signup from './SignupForm';
import Loading from '../../Screens/Loading and Splash/Loading';
import ForgotPassword from './ForgotPassword';
import Welcome from '../Loading and Splash/Welcome';




import { createSwitchNavigator } from 'react-navigation';


const LoginFlow = createSwitchNavigator(
  {
    Welcome,
    Loading,
    Signup,
    Login,
    ForgotPassword,
  },
  {
    initialRouteName: 'Welcome'
  }
)


export default LoginFlow;