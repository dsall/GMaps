import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { MapView, Marker } from 'expo';
import * as firebase from 'firebase';


const my_array=[];
export default class MainPage extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            latitude1: 39.144339,
            longitude1:  -84.568880,
            error1: null,
            my_array: [],
        };
    }
onSignoutPress = () => {
    firebase.auth().signOut();
    }
componentDidMount() {
    navigator.geolocation.getCurrentPosition(
    (position) => {
        this.setState({
            latitude1: position.coords.latitude,
            longitude1: position.coords.longitude,
            error: null,
        }, function(){
            my_array.push([this.state.longitude1,  this.state.latitude1]);
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
                    latitudeDelta: 0.00002,
                    longitudeDelta: 0.00001,
            }}
            mapType = "hybrid"
            >
            </MapView>
            <TouchableOpacity style = {{
                    position: 'absolute',
                    bottom: 0,
                    borderColor: 'transparent',
                    alignItems: 'center',          
            }}     
            onPress={() => this.props.navigation.navigate('BarcodeRead')}
            >
            <Text style={{
                bottom:0,
            }}> Press here to add this location </Text>
            <Image source = { require('../../Images/gmaps.jpg') }
             style = {{ width: 75, height: 75, borderRadius: 75,bottom:0 }}
            
            />
            </TouchableOpacity>    
            <Button 
             title='signout' 
             onPress={this.onSignoutPress}    
            />

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
