import React from 'react';
import { StyleSheet, Text, View, Dimensions , Image, TouchableOpacity} from 'react-native';
import { BarCodeScanner, Permissions , MapView, Location, Constants} from 'expo';
import {Paper} from 'react-native-paper';
import {Icon} from 'react-native-elements';


const Gmaps = require('../../../Assets/Images/gmapslogo.png');

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

const encode = require('../../Methods/Location/pluscode').encode;

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const Storage = require('../../Methods/Storage/Storage');
const api = require('../../Methods/API/http');

const qrcode = require ('../../../Assets/Images/qrcode.png');

const Map = (props) => {
    return(
        <MapView
          style={{
            flex:1,
            borderRadius: 10, 

          }}
          showsUserLocation={true}
          showUserLocation={true}
          region={props.region}
          customMapStyle={mapStyle}
        />
    );
  }

class ScanCode extends React.Component {
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
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } 
    else if(this.state.scanned){
           return(
                <View
                style={{
                   
                    flex:1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >  
                  {/* <Map region={this.state.region}/> */}

                  <Paper
                  elevation={10}
                  style={{
                    width: 0.95*width,
                    height: 0.30*height,
                    borderRadius: 10,
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    alignContent: 'center',
                  }}
                  >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center'

                    }}
                    >
                  <Image  source ={Gmaps} style={{height: 0.085*height, width: 0.085*height}}/>

                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center'

                    }}
                    >
                  <Text
                    style={{
                      fontSize: 25, 
                    }}
                    >GL-Code:</Text>

                    <Text
                    style={{
                      fontSize: 25, 
                    }}
                    > {JSON.stringify(this.state.data.addresse).substr(1,4)}</Text>
                    <Text
                    style={{
                      fontSize: 22, 
                    }}
                    > -- </Text>

                    <TouchableOpacity
                    style={{
                      borderRadius: 1,
                      borderWidth: 3,
                      borderColor: '#42A5F5',
                      flexDirection: 'row'

                    }}
                    >
                      <Text
                      style={{
                      fontSize: 25,
                       letterSpacing: 2,

                    }}
                      >{JSON.stringify(this.state.data.addresse).slice(5,8)}</Text>
                      <Text
                      style={{
                      fontSize: 25,
                       letterSpacing: 2,
                       color: '#42A5F5',

                      }}
                      >
                        +
                      </Text>
                      <Text
                      style={{
                      fontSize: 25,
                       letterSpacing: 2,
                       color: 'black'

                    }}
                      >
                      {JSON.stringify(this.state.data.addresse).slice(8,11)}
                      </Text>
                    </TouchableOpacity>
                    

                  </View>
                  <View>
                    <Text
                    style={{
                      marginTop: 10, 
                      fontSize: 20,
                      textAlign: 'center'
                    }}
                    >Cite Millionnaire, Dakar, Senegal </Text>
                  </View>

                  <View
                  style={{
                    flexDirection: 'row',

                  }}
                  >

                  <Icon
                  raised
                  name='directions-car'
                  color='#42A5F5'
                  onPress={() => carPressed()} />
                  <Icon
                  raised
                  name='save'
                  color='green'
                  onPress={() => console.log('bus')} />
                  <Icon
                  raised
                  name='share'
                  color='#42A5F5'
                  />

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
    
    else {
      return (
        <View style={{
          flex:1,
          alignItems: 'center'
          
        }}>
        <View style={{
          backgroundColor: '#42A5F5',
          height: 0.10*height,
          width: width,
          top: 0,
          borderWidth: 1,
          borderColor: 'grey'
        }} />
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Paper
        elevation={5}
        style={{
            width: 0.95*width,
            height: 0.15*height,
            borderRadius: 5, 
            borderColor: '#42A5F5',   
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: 10,
            
        }}
        >
        <Paper
        style={{
          alignContent:'center',
          alignItems: 'center',
          justifyContent: 'center',
          width: 0.95*width - 0.125*height,
        }}
        >

            <Text
            style={{
              textAlign: "center",
            }}
            >Scan QR-Code in camera view</Text>
        </Paper>
        <Paper
        style={{
            width: 0.125*height,
            height: 0.125*height,
        }}
        >
          <Image source={qrcode} style={{height: 0.125*height, width: 0.125*height}}/>
        </Paper> 

        </Paper>
        <Paper
        elevation={5}
        style={{ 
            width: 0.95*width,
            height: 0.25*height,
            borderRadius: 5, 
            borderColor: '#42A5F5',   
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
        }}
        >
          
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={{
            width: 0.95*width,
            height: 0.3*height,
            borderRadius: 10, 
            borderWidth: 1,
            borderColor: '#42A5F5',   
            }}
          />
        </Paper>
        </View>
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

  _handleBarCodeRead = ({ type, data }) => {
    this.setState({scanned: true, type: type, data: JSON.parse(data)});
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




mapStyle = 
    [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#523735"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#93817c"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a5b076"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#447530"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#e9bc62"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b9d3c2"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
            }
          ]
        }
    ]

export default ScanCode;