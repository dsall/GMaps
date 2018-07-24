import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyPlaces extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://www.google.com'}}
        style={{marginTop: 20}}
      />
    );
  }
}