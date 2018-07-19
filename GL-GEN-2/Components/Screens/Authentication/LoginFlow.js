import React from "react";

import Login from './Login';
import Signup from './SignupForm';
import Loading from '../../Screens/Loading and Splash/Loading';
import ForgotPassword from './ForgotPassword';



import { createSwitchNavigator } from 'react-navigation';


const LoginFlow = createSwitchNavigator(
  {
    Loading,
    Signup,
    Login,
    ForgotPassword,
  },
  {
    initialRouteName: 'Login'
  }
)


export default LoginFlow;