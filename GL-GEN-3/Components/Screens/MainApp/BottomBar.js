import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Loading from '../Loading and Splash/Loading';
import Directions from '../Directions/Directions';
import Emergency from '../Emergency/Emergency';
import MyPlaces from '../MyPlaces/MyPalces';
import Settings from '../Settings/Settings';
import HomeFlow from '../Home/HomeFlow';
import PhoneAuthFlow from '../Authentication/PhoneAuth/PhoneAuthFlow';


import { createStackNavigator } from 'react-navigation';


const FeedStack = createStackNavigator(
    {
      HomeFlow,
      PhoneAuthFlow,
      Emergency,
      Directions,
      Settings,
    },

  )


export default createMaterialBottomTabNavigator({
Home: {
    screen: HomeFlow,
    
    navigationOptions: {
    tabBarVisible: false,
    tabBarLabel: 'Home',
    tabBarIcon: ( <Icon name='home' color = '#42A5F5'
    size = {24} />)

    }
},
Direction: {
    screen: Directions,
    navigationOptions: {
        tabBarLabel: 'Direction',
        tabBarIcon: ( <Icon name='directions' 
                    color = '#42A5F5'
                    size = {24} 
                    
                    />)
        
        }
    },

Address: {
    screen: PhoneAuthFlow,
    navigationOptions: {
        tabBarLabel: 'My Places',
        tabBarIcon: ( <Icon name='place' color = '#42A5F5'
        size = {24} />)
        }
    },

Emergency: {
      screen: Emergency,
      navigationOptions: {
          tabBarLabel: 'Emergency',
          tabBarIcon: ( <Icon name='local-hospital' color = '#42A5F5'
          size = {24} />)
          }
      },
Settings: {
    screen: Settings,
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

)

FeedStack.navigationOptions = ({navigation}) =>{
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };
  
  

const styles = StyleSheet.create({
  
});