import React from 'react';
import { View, ScrollView,StyleSheet } from 'react-native';
import {Text,  Card, Button, Tile, Icon } from 'react-native-elements';
import {Stored_Data_Array} from '../Screens/Data';
import { MapView, Marker, MapViewDirections } from 'expo';
import {my_array} from '../Screens/DirectionsScreen';

getInitialState = () => {
    return {
      region: {
        latitude: 14.742566,
        longitude: -17.447792,
        latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
      },
    };
  }

 const maps_api = 'AIzaSyAffnjV7mfO-Cojd2blqR_qTtUdh3H2U2I';
 const coordinates =[
     {
        latitude : 14.742393,
        longitude : -17.447665, 
        
     },
     {
        latitude : 14.744099,
        longitude : -17.453454, 

     },
 ]; 
class Navigate extends React.Component {

      render() {
        return (
          <MapView
            style = {styles.map}
            region={getInitialState().region}
          >
         <MapView.Marker coordinate={coordinates[0]} />
         <MapView.Marker coordinate={coordinates[1]} />
         <MapViewDirections
            origin={coordinates[0]}
            destination={coordinates[1]}
            apikey={maps_api}
            strokeWidth={3}
            strokeColor="hotpink"
        />
         </MapView>

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


export default Navigate;