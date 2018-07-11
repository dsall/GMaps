import Expo from 'expo';
import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet , SafeAreaView} from 'react-native';
import { Constants, Location, Permissions } from 'expo';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

import LocationGPS from './Components/Location';


export default class App extends Component {

  render() {
    return (
      <View style= {{flex:1}}>
        <LocationGPS />
      </View>
    
    );
  }
}
