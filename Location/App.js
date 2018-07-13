import Expo from 'expo';
import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet , SafeAreaView} from 'react-native';
import { Constants, Location, Permissions } from 'expo';


import LocationGPS from './Components/Location';
import Map from './Components/map';

export default class App extends Component {

  render() {
    return (
      <View style= {{flex:1}}>
        <Map />
      </View>
    
    );
  }
}
