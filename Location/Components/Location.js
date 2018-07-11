import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

var olc = require('../openlocationcode');


export default class LocationGPS extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let text = 'Waiting..';
    let rlatitude = '0';
    let rlongitude = '0';
    let raccuracy = '0';
    let pluscode = '0';
    let shortcode = '0';

    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      rlatitude = JSON.stringify(this.state.location.coords.latitude);
      rlongitude = JSON.stringify(this.state.location.coords.longitude);
      raccuracy = JSON.stringify(this.state.location.coords.accuracy);
      pluscode = JSON.stringify(olc.encode(this.state.latitude, this.state.longitude));
      
      console.log(this.state.location.coords);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Latitude: {rlatitude}</Text>
        <Text style={styles.paragraph}>Longitude: {rlongitude}</Text>
        <Text style={styles.paragraph}>Accuracy: {raccuracy} m</Text>
        <Text style={styles.paragraph}>Pluscode: {raccuracy} </Text>
        <Text style={styles.paragraph}>Shortcode: {raccuracy} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});