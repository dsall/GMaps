import React from 'react';
import { Card, Button, Tile } from 'react-native-elements';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';

import AddFlow from '../AddingAddress/AddFlow';


const Favorite_Array = [

    {
        "name" : 'Recent Addresses',
        "URI": 'http://www.newtimes.co.rw/sites/default/files/styles/mystyle/public/main/articles/2015/06/02/1433282034s5.jpg?itok=QyzB__hK',
        "page": "recent"

    },
    {
        "name" : 'Friends',
        "URI": 'http://www.africasexuality.org/wp-content/uploads/2015/09/o-BLACK-WOMEN-HUG-facebook.jpg',
        "page": "friends"

    },
    {
        "name" : 'Explore',
        "URI": 'http://lentrepreneuriat.net/sites/default/files/maxresdefault-3-e1452616551574-1020x560.jpg',
        "page": "friends"

    },

    {
        "name" : 'Events',
        "URI": 'http://directit-highveld.com/wp-content/uploads/2016/02/gac-3-823x420.jpg',
        "page": "friends"

    },
    {
        "name" : 'Add Your Home Address',
        "URI": 'https://img.huffingtonpost.com/asset/5a3126821500004e0049b6c9.jpeg?ops=scalefit_720_noupscale',
        "page": "MapAdd"

    },

];

CreateTile = (props) => {
    return props.data_array.map(function (items, i){
        execute = () => {
            this.props.navigation.navigate('MapAdd');
        }
        return(

            <View key={i} style = {{ flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop:30, borderWidth: 1, borderRadius: 15, borderColor: 'white' }}>
                <Tile imageSrc = {{uri: items.URI}}
                    title = {items.name}
                    contentContainerStyle = {{}}
                    containerStyle={{}}
                    imageContainerStyle={{}}
                    height = {props.height}
                    width = {props.width}  
                    featured={true}
                    onPress={execute}   
                /> 
            </View> 
            );
    });
}




export default class Home extends React.Component {

   goMapAdd = () => {
        this.props.navigation.navigate('MapAdd');
   } 

   goExplore = () => {
        console.log('Explore');
   }

   goRecent = () => {
        console.log('Recents');
   }

   goFriends = () => {

       console.log('Freinds');
   }

   goEvents = () => {
       console.log('Events');
       
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
                    onPress={this.goRecent}   
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
                    onPress={this.goFriends}   
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
                    onPress={this.goExplore}   
	            /> 
            </View>
            <View style = {{ flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop:30, borderWidth: 1, borderRadius: 15, borderColor: 'white' }}>
                <Tile imageSrc = {{uri: Favorite_Array[3].URI}}
		            title = {Favorite_Array[3].name}
		            contentContainerStyle = {{}}
		            containerStyle={{}}
		            imageContainerStyle={{}}
		            height = {200}
		            width = {360}  
		            featured={true}
                    onPress={this.goEvents}   
	            /> 
            </View>
            <View style = {{ flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop:30, marginBottom:30, borderWidth: 1, borderRadius: 15, borderColor: 'white' }}>
                <Tile imageSrc = {{uri: Favorite_Array[4].URI}}
		            title = {Favorite_Array[4].name}
		            contentContainerStyle = {{}}
		            containerStyle={{}}
		            imageContainerStyle={{}}
		            height = {200}
		            width = {360}  
		            featured={true}
                    onPress={() => this.props.navigation.navigate('MapAdd')}   
	            /> 
            </View> 

            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    button:{
      backgroundColor: '#42A5F5',
      height: 40,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText:{
      fontSize: 24,
      fontWeight: '300',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },

  
  });