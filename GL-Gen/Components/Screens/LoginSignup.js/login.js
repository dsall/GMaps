import React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, View, Image } from 'react-native';


import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Welcome from '../WelcomeScreen/welcome';
import MainPage from '../MainPage/mainpage'

import { createSwitchNavigator } from 'react-navigation';

const gmapslogo = require("../../Images/gmapslogo.png");



const Navigation = createSwitchNavigator(
  {
    Welcome,
    SignupForm,
    LoginForm,
    MainPage,
  },
  {
    initialRouteName: 'Welcome'
  }
)


export default Navigation;