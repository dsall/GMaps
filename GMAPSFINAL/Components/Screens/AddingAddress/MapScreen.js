import React, { Component } from 'react';
import {  Text, View, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import {  Location, MapView, Permissions } from 'expo';
import { FormLabel, FormInput, FormValidationMessage, Icon } from 'react-native-elements'
const encode = require('../../Methods/Location/pluscode').encode;
const decode = require('../../Methods/Location/pluscode').decode;
const Storage = require('../../Methods/Storage/Storage');
const api = require('../../Methods/API/http');
import {Paper , Searchbar,  Chip, TextInput} from 'react-native-paper';
const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const gmaps = require("../../../Assets/Images/gmapslogo.png");




const GLCode = (props) =>{
    return(
        <View style={{flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
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
            >{props.glcode.slice(0,4)}</Text>
            <TouchableOpacity
            style={{flexDirection: 'row', borderWidth: 2, borderColor: '#42A5F5'}}
            >
            <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 3,
            }}
            >{props.glcode.slice(4,7)}</Text>
            <Text style={{fontSize: 20, color: '#42A5F5', fontWeight: 'bold',}}>-</Text>
            <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 3,
            }}
            >{props.glcode.slice(7,11)}</Text>
            </TouchableOpacity>
          </View>

    );
}


const SubmitScreen = (props) => {
    return(
        <View
        style={{flexDirection: 'column'}}
        >

       
           
    </View>
    );

}
class MapScreen extends Component {
 
constructor() {
    super();
    this.state = {
    location: { coords: {latitude: 0, longitude: 0}},
    glcode: '',
    errorMessage: null,
    submit: false,
    phone: '',
    firstname: "",
    lastname: "",
    private: false,
    swcolor: "lightgray",
    prtext: "Public",
    error: false,
    saveddata: { first_name: "", last_name: "", Home_Address: "", phone: "", private: ""},
    };
    this.GetPhoneNumber();

}

    componentWillMount() { 
        this._getLocationAsync();
    }
    GetPhoneNumber = async () => {
        var PhoneNumber = await GetData('PhoneNumber');
        console.log(PhoneNumber);
        this.setState({phone: PhoneNumber});
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
        latitudeDelta:  0.00002,
        longitudeDelta: 0.00001,
    },
    this.setState({location, region});
    }

    privatePress = () =>{
    this.setState(state => ({
        private: !state.private,
    }));

    if(this.state.private){
    this.setState({
        swcolor: "green",
        prtext: "Private",
        private: true

    })
    }
    else{
    this.setState({
        swcolor: "lightgray",
        prtext: "Public",
    })
    }
    console.log(this.state.private);
    }
    

    SubmitGLCode = async () => {
        var data =  { 
                        first_name: this.state.firstname, 
                        last_name: this.state.lastname,
                        Home_Address: this.state.glcode,
                        phone: this.state.phone,
                        private: this.state.private,         
                    };
         console.log(data);
        const Response = await PostAPI('AddAddress', data );
        console.log(Response);
        if(Response){
            StoreData('MyAddress', Response.AddedAddress);
            setTimeout( () => {alert('Your address have been stored in our database')}, 1000);
            this.props.navigation.navigate('Home');   
          }
    }




    render() {
    if(this.state.submit){
        return(
            <View
            style={{
                flex: 1, 
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
            }}
            >
            <Paper
            elevation={7}
            style={{
                width: 0.95*width,
                height: 0.40*height,
                borderRadius: 10,
                alignContent: 'center', 
                alignItems: 'center',
                flexDirection: 'column'
            }}
            >
            <Image source ={gmaps}
            style = {{ width: 25, height: 25, borderRadius: 25, }}
            />
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Phone: {this.state.phone}</Text>
            <GLCode glcode={this.state.glcode} />
            <View
            style={{flexDirection: 'row', justifyContent: 'space-between'}}
            >
                <TextInput 
                 style={{flex:1, marginHorizontal: 10, marginVertical: 5, }} 
                 placeholder ="First Name" 
                 onChangeText={(firstname) => this.setState({firstname})}
                 value={this.state.firstname}
                 />
                 <TextInput 
                 style={{flex:1, marginHorizontal: 10, marginVertical: 5, }} 
                 placeholder ="Last Name" 
                 onChangeText={(lastname) => this.setState({lastname})}
                 value={this.state.lastname}
                 />
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
                        flex:1,
                        textAlign: 'center'
                    }}
                    >Press Here to change Privacy </Text>
                    <TouchableOpacity   
                    style={{height: 40,
                            flex: 1,
                            width: 0.30*width,
                            borderRadius: 5,
                            marginTop: 10,
                            marginHorizontal: 10, 
                            backgroundColor: this.state.swcolor,
                            }} 
                    onPress={this.privatePress} 
                    >
                    <Text style={styles.buttonText} >{this.state.prtext}</Text> 
                    </TouchableOpacity>  
            
            </View>
            <Text
            style={{textAlign: 'center'}}
            >
            By making your address public, you prevent people from searching it using your phone number. 
            You can always share your GL-Code directly with them.
            </Text>
                   <Icon 
                    containerStyle={{}}
                    reverse
                    size = {30}
                    name='add'
                    color='green'
                    onPress={this.SubmitGLCode}
                    />   
           </Paper>
            <Icon 
                containerStyle={{position: 'absolute', bottom: 0}}
                reverse
                size = {30}
                name='cancel'
                color='red'
                onPress={ () => {this.props.navigation.navigate('Home')} }
                />    
            </View>
        );
    }
    return (
    < View style = {{ flex: 1, alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <MapView
            style={ styles.map}
            showsUserLocation={true}
            region={this.state.region}
            mapType = "hybrid"
        >
        <MapView.Marker
        draggable = {true}
        onDragEnd={(e) => this.setState({ location: {coords: e.nativeEvent.coordinate }, glcode: encode(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)})}
        coordinate={this.state.location.coords}
       
        > 
        {/* {console.log(this.state)} */}
        </MapView.Marker>
        </MapView>
        <Paper
        elevation={7}
        style={{
            width: 0.97*width,
            height: 0.20*height,
            bottom: 8,
            borderRadius: 10,
            flexDirection: 'row'
        }}
        >
        <View
        style={{
            flex: 5,
            justifyContent: 'center',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
        }}
        >
            <Text
            style={{
                textAlign: 'center'
            }}
            >
                Please drag the red marker to your house in order to add your home address. Once you drag it to the correct address, press the add icon.
            </Text>
            <GLCode glcode={this.state.glcode}/>
            <TouchableOpacity
            onPress={() => this.setState({submit:  true})}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Submit Address</Text>
            </TouchableOpacity>
        </View>
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
        }}
        >
            <Icon 
            containerStyle={{position: 'absolute',}}
            reverse
            size = {30}
            name='cancel'
            color='red'
            onPress={() => this.props.navigation.navigate('Home')} 
            />    
        </View>
       

        </Paper>

    </View>
    );
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        width: width,
        height: height
    },
button:{
  backgroundColor: '#42A5F5',
  height: 40,
  borderRadius: 5,
  marginHorizontal: 10,
  paddingHorizontal: 10,
  marginVertical: 10,
},
buttonText:{
  fontSize: 24,
  fontWeight: '300',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
},

});


export default MapScreen;