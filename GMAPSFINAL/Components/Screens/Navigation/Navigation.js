import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';


import LoginFlow from '../LogIn/LogIn';
import HomeScreen from '../Home/Home';
import ScanCode from '../Home/ScanCode';
import Emergency from '../Emergency/Emergency';
import MapScreen from '../AddingAddress/MapScreen';



export const MenuStack = createSwitchNavigator({
    Home: {screen: HomeScreen},
    Scan: {screen: ScanCode},
    Emergency: {screen: Emergency},
    LogIn:{screen: LoginFlow},
    Map: {screen: MapScreen},
});


export const LogInStack = createSwitchNavigator({
    LogIn: { screen: LoginFlow },
});



