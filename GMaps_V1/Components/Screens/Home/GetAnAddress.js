import React from 'react';
import {  Text, View, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import {  Location, MapView, Permissions } from 'expo';
import { Icon } from 'react-native-elements';

import AddressView from '../../Methods/Displays/CardView';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };



const gmaps = require("../../../Assets/Images/gmaps.jpg");

mapStyle = 
    [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#523735"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#93817c"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a5b076"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#447530"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#e9bc62"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b9d3c2"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
            }
          ]
        }
    ]

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class GetAnAddressScreen extends React.Component {



static navigationOptions = {
    header: null,
    };
    state = {
        location: { coords: {latitude: 0, longitude: 0}},
        errorMessage: null,
        data: {Name: 'Djibril Sall', Address: '865GYUG6GY', Phone: '+15134490428'},
        };
    
        componentWillMount() { 
            this._getLocationAsync();
        }
    
        _getLocationAsync = async () => {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                this.setState({
                errorMessage: 'Permission to access location was denied',
                });
            }
        
            Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
            };
        locationChanged = (location) => {
        region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0020,
            longitudeDelta: 0.0020,
        },
        this.setState({location, region});
    }
    
    onAddPress = () => {
        if(coorddrag.length > 0){
            this.props.navigation.navigate('SubmitAddress');
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
    <View style={{flex:1, justifyContent: 'center' , alignContent:'flex-end'}}> 
        <MapView
            style={{height: 0.50*height, width: width}}
            showsUserLocation={true}
            region={this.state.region}
            customMapStyle={mapStyle}
        />
    </View>
    <View style={{flex:1, }}>
        <View style={{flex:3,   width: 0.95*width,  }}>
        <AddressView  data = {this.state.data}/>
        </View>
        <View style={{flex:1, alignContent: 'center', alignItems: 'center'}}>
        <Icon 
        containerStyle={{position: 'absolute',}}
        reverse
        size = {30}
        name='cancel'
        color='red'
        onPress={() => this.props.navigation.navigate('Home')} 
        />
        </View>
    </View>
        
    </View>
    );
}
}


const styles = StyleSheet.create({

});