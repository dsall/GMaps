import React from 'react';
import {View, Dimensions, Image, Text, TouchableOpacity} from 'react-native';
import { MapView, Permissions, Location } from 'expo';
import {Paper} from 'react-native-paper';
import {Icon} from 'react-native-elements';

const Gmaps = require('../../../Assets/Images/gmapslogo.png');

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

const encode = require('../../Methods/Location/pluscode').encode;

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const Storage = require('../../Methods/Storage/Storage');
const api = require('../../Methods/API/http');


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


const colors = ['#2dc937', '#99c140', '#e7b416', '#db7b2b', '#cc3232'];

class GetAddress extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      glcode: '',
      error: null,
      place: '',
      city: '',
      color: 'red',
      errorMessage: null,
    };
  }


    componentWillMount() { 
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
     console.log(this.state.glcode);
    // setTimeout(this.setState({glcode : pluscode(this.state.location.coords.latitude, this.state.location.coords.longitude)}), 500);
    this.GetCity();
    this.checkAccurracy();
    
}

checkAccurracy = () => {
  var a = this.state.region.accuracy;
  if(a <= 10){
    this.setState({color: colors[0]});
  }
  if(a > 10 && a <= 12.5){
    this.setState({color: colors[1]});
  }
  if(a > 12.5 && a <= 15){
    this.setState({color: colors[2]});
  }
  if(a > 15 && a <= 17.5){
    this.setState({color: colors[3]});
  }
  if(a > 17.5 && a <= 20){
    this.setState({color: colors[4]});
  }
}

GetCity =  async () =>{
  var Region = await PostAPI('getaddress', {latitude: this.state.region.latitude, longitude: this.state.region.longitude});
  this.setState({place: Region.address, city: Region.city});
  console.log(this.state.place);
}


  render() {
    return (

          <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
          >

            <Paper
            elevation={5}
            style={{
             height: 0.25*height,
             width: 0.95*width,
             marginHorizontal: 0.025*width,
             marginVertical: 20,
             backgroundColor: 'red',
             zIndex:-1
            }}
            >
            <Map region={this.state.region}/>

            </Paper>
      
             <Paper
            elevation={5}
            style={{
             height: 0.30*height,
             width: 0.95*width,
             marginHorizontal: 0.025*width,
             backgroundColor: 'white',
             borderRadius: 10,
             zIndex:-1
            }}
            >
            <View style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flex: 1
            }} >
                <View
                style={{
                  flex:3,
                  flexDirection: 'row',
                  alignContent: 'center',
                  marginHorizontal: 0.025*width,
                }}
                >
                  <Paper
                  elevation={5}
                  style={{
                    flex:3,
                    backgroundColor: '#f0f8ff',
                    borderRadius: 10, 
                    alignItems: 'center',
                    marginVertical: 10, 
                    
                  }}
                  >
                    <Paper 
                    style={{
                      flex: 1,
                      backgroundColor: '#f0f8ff',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      
                      marginHorizontal: 10, 
                      
                    }}
                    >
                        <Image source ={Gmaps}  
                        style={{
                          width: 0.05*height,
                          height: 0.05*height,
                        }}
                        />
                        <Text>Generated Code</Text>
                    </Paper>

                     <Paper
                    style={{
                      flex: 3,
                      backgroundColor: '#f0f8ff',
                      
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
                    <Text
                    style={{
                      fontSize: 22, 
                    }}
                    >GL-Code:</Text>

                    <Text
                    style={{
                      fontSize: 22, 
                    }}
                    > {this.state.glcode.substr(0,4)}</Text>
                    <Text
                    style={{
                      fontSize: 22, 
                    }}
                    > -- </Text>

                    <TouchableOpacity
                    style={{
                      borderRadius: 1,
                      borderWidth: 1,
                      borderColor: '#42A5F5',

                    }}
                    >
                      <Text
                      style={{
                      fontSize: 20, 
                    }}
                      >{`${this.state.glcode.substr(4,7)}`}</Text>
                    </TouchableOpacity>


                    </View>
                    <View
                    style={{
                        borderRadius: 10,
                      }}
                    >
                      <Text
                      style={{
                        fontSize: 18,
                        fontStyle: 'italic',
                        textAlign: 'center',
                        marginTop: 10,
                        borderRadius: 10,
                      }}
                      >{this.state.place}</Text>
                    </View>
                    </Paper>
                  </Paper>

                  <Paper
                  style={{
                    flex:1,
                    backgroundColor: 'white',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    borderRadius: 10, 

                  }}
                  >
                    <Paper
                    elevation={5}
                     style={{
                       width: 0.2*width,
                       height: 0.2*width,
                       borderRadius: 0.1*width,
                       backgroundColor: this.state.color
                     }}
                    >

                    </Paper>

                  </Paper>


                </View>
                <View
                style={{
                  flex:1,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  alignContent: 'center',
                  flexDirection: 'row'
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

export default GetAddress;