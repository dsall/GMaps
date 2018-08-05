import React, { Component } from 'react';
import {  Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import {  Location, MapView } from 'expo';



const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export var coorddrag = [];

const gmaps = require("../../../Assets/Images/gmaps.jpg");

export default class MapAdd extends Component {
state = {
    location: { coords: {latitude: 0, longitude: 0}},
    errorMessage: null,
    };

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
}

onAddPress = () => {
    if(coorddrag.length > 0){
        this.props.navigation.navigate('AddingPage');
    }
    else{
        Alert.alert(
            'Drag Icon to your house on map',
            'Make sure you drag the icon to the correct house on the map, in order to make sure that we have a correct address for your house',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
            )
    }
}
    render() {
    return (
    < View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MapView
            style={ styles.map}
            showsUserLocation={true}
            region={this.state.region}
            mapType = "hybrid"
        >
        <MapView.Marker
        draggable = {true}
        onDragEnd={(e) => {coorddrag.push(e.nativeEvent.coordinate)}}
        coordinate={this.state.location.coords}
        
        > 
        </MapView.Marker>
        </MapView>

        <TouchableOpacity style = {{
                position: 'absolute',
                bottom: 0,
                borderColor: 'transparent',
                alignItems: 'center',          
        }}     
        onPress={this.onAddPress}
        >
        <Text style={{
            bottom:0,
        }}> Press here to add this location </Text>
        <Image source ={gmaps}
            style = {{ width: 75, height: 75, borderRadius: 75,bottom:0 }}
        />
        </TouchableOpacity>  
        
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