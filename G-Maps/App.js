import React from 'react';
import MaterialBottomTabNavigator from './Components/Nav_Bar/navbar'
import { MapView } from 'expo';
import GetPosition from './Components/Geolocalization/getposition'


export default class App extends React.Component {
  render() {
    return (
      <MaterialBottomTabNavigator />
      
    );
  }
}