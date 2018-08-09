import React, { Component } from 'react';

import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';



import PhoneInputScreen from './Components/Screens/LogIn/PhoneInputScreen';

import PinInputScreen from './Components/Screens/LogIn/PinInputScreen';

import HomeScreen from './Components/Screens/Home/Home';

import MyPlacesScreen from './Components/Screens/MyPlaces/MyPlacesScreen';

import EmergencyScreen from './Components/Screens/Emergency/EmergencyScreen';

import SettingsScreen from './Components/Screens/Settings/SettingsScreen';

import DirectionsScreen from './Components/Screens/Directions/DirectionScreen';

import MapScreen from './Components/Screens/AddingAddress/MapScreen';

import SubmissionScreen from './Components/Screens/AddingAddress/SubmissionScreen';

export const LogInStack = createSwitchNavigator({
    LogIn: { screen: PhoneInputScreen, navigationOptions: { tabBarVisible: false }, },
    PIN: { screen: PinInputScreen,navigationOptions: { tabBarVisible: false },},
});


const AddingStack = createStackNavigator (
    {
        MapScreen: {screen: MapScreen},
        SubmitAddress: {screen: SubmissionScreen },
    }
)
export const BottomTab = createMaterialBottomTabNavigator({
    Home: { screen: HomeScreen,
        navigationOptions: {
            tabBarVisible: false,
            tabBarLabel: 'Home',
            tabBarIcon: ( <Icon name='home' color = '#42A5F5'
            size = {24} />)
        
            }
        },
    Directions: { screen: DirectionsScreen,
        navigationOptions: {
            tabBarLabel: 'Direction',
            tabBarIcon: ( <Icon name='directions' 
                        color = '#42A5F5'
                        size = {24} 
                        
                        />)
            
            }
        },
    MyPlaces: { screen: MyPlacesScreen,
        navigationOptions: {
            tabBarLabel: 'My Places',
            tabBarIcon: ( <Icon name='place' color = '#42A5F5'
            size = {24} />)
            }
        },
    Emergency: { screen: EmergencyScreen,
        navigationOptions: {
            tabBarLabel: 'Emergency',
            tabBarIcon: ( <Icon name='local-hospital' color = '#42A5F5'
            size = {24} />)
            }
        },
    Settings: { screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ( <Icon name='settings' color = '#42A5F5'
            size = {24} />)
            }
        },
  },
  {
    initialRouteName: 'Home',
    shifting: false,
    activeTintColor: '#42A5F5',
    pressColor: 'lightblue',
    barStyle: { backgroundColor: 'white', },
  
  }
);



export const MenuStack = createSwitchNavigator({
    MainApp: {screen: BottomTab},
    LogIn:{screen: LogInStack},
    Adding: {screen: AddingStack},
});









