import React from 'react';
import {Tile } from 'react-native-elements';
import {  View,  ScrollView, Dimensions , TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import Communications from 'react-native-communications';
import {  Location, Constants } from 'expo';
import {Icon} from 'react-native-elements';
import {Paper } from 'react-native-paper';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
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
    state = {
        location: { coords: {latitude: 0, longitude: 0}},
        errorMessage: null,
        };

    componentWillMount() { 
        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    }

    locationChanged = (location) => {
        }
    
    goPolice = () => {
        console.log('Police');
        console.log(JSON.stringify(this.state.location))
        Communications.textWithoutEncoding('5134490428', JSON.stringify(this.state.location));
        Communications.phonecall('17', true);
        
    }
    goFire = () => {
        Communications.phonecall('18', true);
        console.log('Fire');
    }
    goAmbulance = () => {
        Communications.phonecall('15', true);
        console.log('Ambulance');
    }
    render() {
        return ( 

            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignContent: 'center'}}>
            <View style={styles.statusBarHeight} />
             <Paper
             elevation={7}
             style={{width: 0.95*width, height: 0.20*height, marginBottom: 10, marginTop: 45,}}
             >
             <TouchableOpacity
             onPress={this.goPolice}
             >
             <Image source={{uri: Favorite_Array[0]['URI']}}  style={{ width: 0.95*width, height: 0.20*height, resizeMode: 'cover'}}  />
             </TouchableOpacity>
             </Paper>
             <Paper
             elevation={7}
             style={{width: 0.95*width, height: 0.20*height, marginBottom: 10}}
             >
             <TouchableOpacity
             onPress={this.goFire}
             >
             <Image source={{uri: Favorite_Array[1]['URI']}} style={{ width: 0.95*width, height: 0.20*height, resizeMode: 'cover'}} />
             </TouchableOpacity>
             </Paper>
             <Paper
             elevation={7}
             style={{width: 0.95*width, height: 0.20*height, marginBottom: 10, justifyContent:'center', alignItems: 'center', alignContent: 'center'}}
             >
             <TouchableOpacity
             onPress={this.goAmbulance}
             >
             <Image source={{uri: Favorite_Array[2]['URI']}} style={{ width: 0.95*width, height: 0.20*height, resizeMode: 'cover'}} />
             </TouchableOpacity>
             </Paper>
 
               <Icon 
                containerStyle={{position: 'absolute', bottom: 0,}}
                reverse
                size = {30}
                name='cancel'
                color='red'
                onPress={() => this.props.navigation.navigate('Home')} 
                />

            </View>
        );
    }
}

let styles = StyleSheet.create({

    mainview:{
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
    },
    statusBar: {
      backgroundColor: "#C2185B",
      height: Constants.statusBarHeight,
      backgroundColor: '#42A5F5',
    },
  })