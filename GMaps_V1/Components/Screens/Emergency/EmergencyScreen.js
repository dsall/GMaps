import React from 'react';
import {Tile } from 'react-native-elements';
import {  View,  ScrollView, } from 'react-native';
import Communications from 'react-native-communications';
import {  Location } from 'expo';


const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

const Favorite_Array = [

    {
        "name" : 'Police',
        "URI": 'https://i.pinimg.com/originals/15/a7/49/15a749f0ea45dd1a902a9bf39417fd3a.jpg'

    },
    {
        "name" : 'Fire Services',
        "URI": 'http://www.theautochannel.com/news/2007/06/28/053557.2-lg.jpg'

    },
    {
        "name" : 'Emergency Services',
        "URI": 'https://img.gta5-mods.com/q95/images/ambulance-samu-french-paramedic/7e327c-20170203203437_1.jpg'

    },


];


export default class EmergencyScreen extends React.Component {
    state = {
        location: { coords: {latitude: 0, longitude: 0}},
        errorMessage: null,
        };

    componentWillMount() { 

        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    }

    locationChanged = (location) => {
        this.setState({location});
    }
    
    goPolice = () => {
        console.log('Police');
        console.log(JSON.stringify(this.state.location))
        Communications.textWithoutEncoding('5134490428', JSON.stringify(this.state.location));
        Communications.phonecall('5134490428', true);
        
    }
    goFire = () => {
        console.log('Fire');
    }
    goAmbulance = () => {
        console.log('Ambulance');
    }
    render() {
        return ( 

        	// <FavoriteScreenData />

        	<ScrollView>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', }}>
 				
            <View style = {{ flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop:30, borderWidth: 1, borderRadius: 15, borderColor: 'white' }}>
	            <Tile imageSrc = {{uri: Favorite_Array[0].URI}}
		            title = {Favorite_Array[0].name}
		            contentContainerStyle = {{}}
		            containerStyle={{}}
		            imageContainerStyle={{}}
		            height = {200}
		            width = {360}  
		            featured={true}
                    onPress={this.goPolice}   
	            /> 
            </View>

            <View style = {{ flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop:30, borderWidth: 1, borderRadius: 15, borderColor: 'white' }}>
                <Tile imageSrc = {{uri: Favorite_Array[1].URI}}
		            title = {Favorite_Array[1].name}
		            contentContainerStyle = {{}}
		            containerStyle={{}}
		            imageContainerStyle={{}}
		            height = {200}
		            width = {360}  
		            featured={true}
                    onPress={this.goFire}   
	            /> 
            </View>
            <View style = {{ flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop:30, borderWidth: 1, borderRadius: 15, borderColor: 'white' }}>
                <Tile imageSrc = {{uri: Favorite_Array[2].URI}}
		            title = {Favorite_Array[2].name}
		            contentContainerStyle = {{}}
		            containerStyle={{}}
		            imageContainerStyle={{}}
		            height = {200}
		            width = {360}  
		            featured={true}
                    onPress={this.goAmbulance}   
	            /> 
            </View>

            </View>
            </ScrollView>
        );
    }
}

