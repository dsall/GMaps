import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import Expo from 'expo';
import { Constants, Location, Permissions } from 'expo';
import * as firebase from 'firebase';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export var coordinate = [];
export var coorddrag = [];


getData = () => {
    return coordinate;
}

export default class MainPage extends React.Component {
state = {
        location: { coords: {latitude: 0, longitude: 0}},

    };
    
onSignoutPress = () => {
    firebase.auth().signOut();
    }
componentWillMount() {
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    }
    
locationChanged = (location) => {
    region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta:  0.00002,
        longitudeDelta: 0.00001,
    },
    this.setState({location, region});
    coordinate.push(this.state.location.coords);
}

    render() {
        return ( 
        < View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Expo.MapView
                style={ styles.map}
                showsUserLocation={true}
                region={this.state.region}
                mapType = "hybrid"
            >
            <Expo.MapView.Marker
            draggable = {true}
            onDragEnd={(e) => {coorddrag.push(e.nativeEvent.coordinate)}}
            coordinate={this.state.location.coords}
            image={require('./Images/house_2.png')} 
            > 
            </Expo.MapView.Marker>
            </Expo.MapView>
            <TouchableOpacity style = {{
                    position: 'absolute',
                    bottom: 0,
                    borderColor: 'transparent',
                    alignItems: 'center',          
            }}     
            onPress={() => {this.props.navigation.navigate('BarcodeRead'); console.log(coorddrag)}}
            >
            <Text style={{
                bottom:0,
            }}> Press here to add this location </Text>
            <Image source = { require('../../Images/gmaps.jpg') }
             style = {{ width: 75, height: 75, borderRadius: 75,bottom:0 }}
             con
            />
            </TouchableOpacity>    
            
            </View>
                                    
    );}
    
}


const styles = StyleSheet.create({

    map: {
        position: 'absolute',
        top: 25,
        bottom: 0,
        left: 0,
        bottom: 60,
        right: 0,
    },

});


