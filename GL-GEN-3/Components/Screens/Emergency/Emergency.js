import React from 'react';
import { Card, Button, Tile } from 'react-native-elements';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';


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


CreateTile = (props) => {
	return props.data_array.map(function (items, i){
		return(

			<View key={i} style = {{ flex: 1,  justifyContent: 'space-between', alignItems: 'center', marginTop:30, borderWidth: 1, borderRadius: 15, borderColor: 'white' }}>
	            <Tile imageSrc = {{uri: items.URI}}
		            title = {items.name}
		            contentContainerStyle = {{}}
		            containerStyle={{}}
		            imageContainerStyle={{}}
		            height = {props.height}
		            width = {props.width}  
		            featured={true}
	            /> 
            </View> 
			);
	});
}
	


export default class Emergency extends React.Component {
    render() {
        return ( 

        	// <FavoriteScreenData />

        	<ScrollView>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', }}>
 				
 				<CreateTile data_array={Favorite_Array} width={360} height={200} />

            </View>
            </ScrollView>
        );
    }
}

