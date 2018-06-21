import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { MapView } from 'expo';

import { Card, Button, Tile } from 'react-native-elements';


class DirectionsScreen extends React.Component {

constructor(props) {
        super(props);
        this.state = {
            latitude1: null,
            longitude1: null,
            error1: null,
        };
    }

componentDidMount() {
    navigator.geolocation.getCurrentPosition(
    (position) => {
        this.setState({
            latitude1: position.coords.latitude,
            longitude1: position.coords.longitude,
            error: null,
        });
    },
    (error) => this.setState({ error: error.message }), { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    }

    render() {
        return ( 
                < View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MapView style = {styles.map}
            initialRegion = {{
                    latitude: this.state.latitude1,
                    longitude: this.state.longitude1,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
            }}
            mapType = "standard"
            />
            
            <TouchableOpacity style = {{
                    position: 'absolute',
                    bottom: 150,
                    borderWidth: 1,
                    borderColor: 'green',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 75,
                    height: 75,
                    //backgroundColor:'#fff',
                    borderRadius: 100,
            }}>

            <Image source = { require('../Logos/DESIGN4JPG.jpg') }
             style = {{ width: 75, height: 75, borderRadius: 75, }}
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




export default DirectionsScreen;