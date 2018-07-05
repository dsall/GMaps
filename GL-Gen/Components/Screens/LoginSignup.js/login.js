import React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, View, Image } from 'react-native';


import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Welcome from '../WelcomeScreen/welcome';
import Loading from './loading';
import ForgotPassword from './ForgotPassword';



import { createSwitchNavigator } from 'react-navigation';

const gmapslogo = require("../../Images/gmapslogo.png");



const LoginFlow = createSwitchNavigator(
  {
    Welcome,
    SignupForm,
    LoginForm,
    Loading,
    ForgotPassword,
  },
  {
    initialRouteName: 'Welcome'
  }
)


export default LoginFlow;