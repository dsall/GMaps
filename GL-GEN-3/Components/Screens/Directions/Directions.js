import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import {  Location, MapView } from 'expo';
import {Header, Button, Icon, Left, Body, Title, Right} from 'native-base';


const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };


export default class MapAdd extends Component {
    state = {
        location: { coords: {latitude: 0, longitude: 0}},
      };
    
      componentWillMount() {
        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
      }
    
      locationChanged = (location) => {
        region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta:  0.0922,
            longitudeDelta: 0.0421,
        },
        this.setState({location, region});
    }
    

      render() {
        return (
        < View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MapView
              style={ styles.map}
              showsUserLocation={true}
              region={this.state.region}
            >
            </MapView>

        </View>
        );
      }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 25,
        bottom: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});