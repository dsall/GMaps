import React from 'react';
import { Card, Button, Tile } from 'react-native-elements';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import FavoriteScreenData from '../mymethods/scroll';



const Favorite_Array = [

    {
        "name" : 'Recent Addresses',
        "URI": 'http://www.newtimes.co.rw/sites/default/files/styles/mystyle/public/main/articles/2015/06/02/1433282034s5.jpg?itok=QyzB__hK'

    },
    {
        "name" : 'Friends',
        "URI": 'http://www.africasexuality.org/wp-content/uploads/2015/09/o-BLACK-WOMEN-HUG-facebook.jpg'

    },
    {
        "name" : 'Explore',
        "URI": 'http://lentrepreneuriat.net/sites/default/files/maxresdefault-3-e1452616551574-1020x560.jpg'

    },

    {
        "name" : 'Events',
        "URI": 'http://directit-highveld.com/wp-content/uploads/2016/02/gac-3-823x420.jpg'

    }

];


CreateTile = (props) => {
	return props.data_array.map(function (items, i){
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
	            /> 
            </View> 
			);
	});
}
	


class FavoriteScreen extends React.Component {
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

export default FavoriteScreen; 