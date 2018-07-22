import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyPlaces extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.google.com/maps/dir/47.5951518,-122.3316393/3321+Ninann+Court,+Cincinnati,+OH/@43.5716607,-112.4309145,5'}}
        style={{marginTop: 20}}
      />
    );
  }
}