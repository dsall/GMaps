import React from 'react';
import { StyleSheet, Text, View, Dimensions , Image, TouchableOpacity} from 'react-native';
import { BarCodeScanner, Permissions , MapView, Location, Constants} from 'expo';
import {Paper} from 'react-native-paper';
import {Icon} from 'react-native-elements';


const Gmaps = require('../../../Assets/Images/gmapslogo.png');

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

const encode = require('../../Methods/Location/pluscode').encode;
const decode = require('../../Methods/Location/pluscode').decode;
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const Storage = require('../../Methods/Storage/Storage');
const api = require('../../Methods/API/http');


class Search extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    type: '',
    data: '',
    glcode: '',
  }



  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
            errorMessage: 'Permission to access location was denied',
            });
        }
    
        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
        };

    locationChanged = (location) => {
  
        region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            glcode:  encode(location.coords.latitude, location.coords.longitude),
            accuracy: location.coords.accuracy,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
        },
        
         this.setState({location, region});
         this.setState({glcode: `${this.state.region.glcode.substr(0,7)}+${this.state.region.glcode.substr(7,10)}`});
        
    }



  render() {
    const { navigation } = this.props;
    const search = navigation.getParam('search', 'NO-ID');
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Search: {JSON.stringify(decode(search))}</Text>
            <Text>Location: {JSON.stringify(this.state.location)}</Text>
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

export default Search;