import React from 'react';
import { View, ScrollView,StyleSheet } from 'react-native';
import {Text,  Card, Button, Tile, Icon } from 'react-native-elements';
import {Stored_Data_Array} from '../Screens/Data';
import { MapView, Marker } from 'expo';
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
class AddedPlaces extends React.Component {

      
      
      render() {
        return (
          <MapView
            style = {styles.map}
            region={getInitialState().region}
          >

          <MapView.Marker
            coordinate={{latitude: parseFloat(Stored_Data_Array[0]['lattitude']), // 
            longitude: parseFloat(Stored_Data_Array[0]['longitude'])}} // parseFloat(Stored_Data_Array[0]['longitude'])
            title={Stored_Data_Array[0]['GL-Code']} // Stored_Data_Array[0]['GL-Code']
            description={"Blue Door"}
         />
         <MapView.Marker
            coordinate={{latitude: parseFloat(Stored_Data_Array[1]['lattitude']), // 
            longitude: parseFloat(Stored_Data_Array[1]['longitude'])}} // parseFloat(Stored_Data_Array[0]['longitude'])
            title={Stored_Data_Array[1]['GL-Code']} // Stored_Data_Array[0]['GL-Code']
            description={"Blue Door"}
         />
         <MapView.Marker
            coordinate={{latitude: parseFloat(Stored_Data_Array[2]['lattitude']), // 
            longitude: parseFloat(Stored_Data_Array[2]['longitude'])}} // parseFloat(Stored_Data_Array[0]['longitude'])
            title={Stored_Data_Array[2]['GL-Code']} // Stored_Data_Array[0]['GL-Code']
            description={"Blue Door"}
         />
         <MapView.Marker
            coordinate={{latitude: parseFloat(Stored_Data_Array[3]['lattitude']), // 
            longitude: parseFloat(Stored_Data_Array[3]['longitude'])}} // parseFloat(Stored_Data_Array[0]['longitude'])
            title={Stored_Data_Array[3]['GL-Code']} // Stored_Data_Array[0]['GL-Code']
            description={"Blue Door"}
         />
         <MapView.Marker
            coordinate={{latitude: parseFloat(Stored_Data_Array[4]['lattitude']), // 
            longitude: parseFloat(Stored_Data_Array[4]['longitude'])}} // parseFloat(Stored_Data_Array[0]['longitude'])
            title={Stored_Data_Array[4]['GL-Code']} // Stored_Data_Array[0]['GL-Code']
            description={"Blue Door"}
         />
         <MapView.Marker
            coordinate={{latitude: parseFloat(Stored_Data_Array[5]['lattitude']), // 
            longitude: parseFloat(Stored_Data_Array[5]['longitude'])}} // parseFloat(Stored_Data_Array[0]['longitude'])
            title={Stored_Data_Array[5]['GL-Code']} // Stored_Data_Array[0]['GL-Code']
            description={"Blue Door"}
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


export default AddedPlaces;