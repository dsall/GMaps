import React from 'react';
import { StyleSheet, Text, View, Dimensions , Image, TouchableOpacity, Linking, Share, Platform} from 'react-native';
import { BarCodeScanner, Permissions , MapView, Location, Constants} from 'expo';
import {Paper} from 'react-native-paper';
import {Icon} from 'react-native-elements';
import { red100 } from 'react-native-paper/src/styles/colors';


const Gmaps = require('../../../Assets/Images/gmapslogo.png');

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

const encode = require('../../Methods/Location/pluscode').encode;
const decode = require('../../Methods/Location/pluscode').decode;
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const Storage = require('../../Methods/Storage/Storage');
const api = require('../../Methods/API/http');


class Search extends React.Component {
constructor(props){
  super(props);
  this.state = {
    hasCameraPermission: null,
    scanned: false,
    type: '',
    data: '',
    glcode: '',
    loadinng: true,
    searchdata: ''
  }
}
componentDidMount(){
  this.setState({
    searchdata: this.props.navigation.getParam('search', 'NO-ID')
  })
  this.CheckSearchData(this.searchdata);
}


CheckSearchData = (props) => {
  if(props.search.lenght === 6){
    console.log('perform contained search')
  }
  if(props.search.lenght === 10){
    console.log('normal search')
  }

  else {
    console.log('invalid search data')
  }

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


   goAddres = (data)  => {
     var location = decode(data);
    if (Platform.OS === 'ios') {
      Linking.openURL(`http://maps.google.com/maps/dir/${this.state.region.latitude},${this.state.region.longitude}/${location.latitudeCenter},${location.longitudeCenter}/`);
    } else {
      Linking.openURL(`https://www.google.com/maps/dir/${this.state.region.latitude},${this.state.region.longitude}/${location.latitudeCenter},${location.longitudeCenter}/`);
    }
   }
   ShareAddress = () => {
    Share.share({
      message: `Address GMAPS partager:${this.state.glcode}. Vous pouvez l'entrer dans l'application pour localisez la personne.`,
      title: 'Addresse Sur GMaps'
      }, {
        dialogTitle: 'Addresse a partager',
  
        tintColor: 'green'
      })
      .then(alert('shared'))
      .catch((error) => this.setState({result: 'error: ' + error.message}));
    }
  

  render() {
    const { navigation } = this.props;
    const search = navigation.getParam('search', 'NO-ID');
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Paper
        style={{
          width: 0.95*width,
          height: 0.20*height,
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center'
        }}
        elevation = {7}
        >
        <View
        style={{
          flex:3,

        }}
        >
         <View style={{flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center', paddingTop: 20}}>
            <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              
            }}
            >G-Code:</Text>
            <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 2,
            }}
            >{search.slice(0,4)}</Text>
            <TouchableOpacity
            style={{flexDirection: 'row', borderWidth: 2, borderColor: '#42A5F5'}}
            >
            <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 3,
            }}
            >{search.slice(4,7)}</Text>
            <Text style={{fontSize: 20, color: '#42A5F5', fontWeight: 'bold',}}>-</Text>
            <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 3,
            }}
            >{search.slice(7,11)}</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View
        style={{
          flex:2,
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
        >
         <TouchableOpacity>
          <Icon
          raised
          name='directions-car'
          color='green'
          onPress={() => {this.goAddres(search)}} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={this.ShareAddress} 
          >
          <Icon
          raised
          name='share'
          color='#42A5F5'
          />
          </TouchableOpacity>
        
        </View>
            
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

export default Search;