import React from 'react';
import { Card, Button, Tile } from 'react-native-elements';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import Communications from 'react-native-communications';


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




	


export default class Emergency extends React.Component {

    goPolice = () => {
        console.log('Police');
        Communications.text('5134490428', 'latitude: 13.64787484, longitude:36373839');
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

