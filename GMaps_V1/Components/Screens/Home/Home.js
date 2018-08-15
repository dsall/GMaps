import {  Tile } from 'react-native-elements';
import { Platform, Linking, Text, StyleSheet, View,ScrollView, TouchableOpacity, Image, Dimensions, Share } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Card, ListItem, Icon, Header } from 'react-native-elements';
import React from 'react';

import {  Location, MapView, Permissions } from 'expo';
import Flag from 'react-native-round-flags';



const decode = require('../../Methods/GLCode/pluscodealgo').decode;
const Storage = require('../../Methods/Storage/storage');
const api = require('../../Methods/Api/http');

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };


const Favorite_Array = [

    {
        "name" : 'Recent and Saved Addresses',
        "URI": 'http://www.newtimes.co.rw/sites/default/files/styles/mystyle/public/main/articles/2015/06/02/1433282034s5.jpg?itok=QyzB__hK',
        "page": "recent"

    },
    {
        "name" : 'Friends',
        "URI": 'http://www.africasexuality.org/wp-content/uploads/2015/09/o-BLACK-WOMEN-HUG-facebook.jpg',
        "page": "friends"

    },
    {
        "name" : 'Events and Things to do',
        "URI": 'http://lentrepreneuriat.net/sites/default/files/maxresdefault-3-e1452616551574-1020x560.jpg',
        "page": "friends"

    },

    {
        "name" : 'Events and Things to do',
        "URI": 'http://directit-highveld.com/wp-content/uploads/2016/02/gac-3-823x420.jpg',
        "page": "friends"

    },
    {
        "name" : 'Get an Address or Add your Home',
        "URI": 'https://img.huffingtonpost.com/asset/5a3126821500004e0049b6c9.jpeg?ops=scalefit_720_noupscale',
        "page": "MapAdd"
    },

];

var welcome ={};

const decodeGLCode = (GLCODE) => {
    var decoded = decode(GLCODE);
    return ({'latitude': decoded.latitudeCenter, 'longitude': decoded.longitudeCenter});
}



let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

CreateTile = (props) => {
        return(
            <View>
            <View  style = {{ flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop:10, borderWidth: 1, borderRadius: 15, borderColor: 'white' }}>
                    <Tile imageSrc = {{uri: props.data.URI}}
                        title = {props.data.name}
                        contentContainerStyle = {{borderRadius: 10}}
                        containerStyle={{}}
                        imageContainerStyle={{borderRadius: 10}}
                        height = {0.2*height}
                        width = {0.8*width}  
                        featured={true}
                        onPress={props.function}
                    /> 
             </View>
             </View>
            );
}


ShareAddress = () => {
    Share.share({
      message: 'A framework for building native apps using React',
      url: 'http://facebook.github.io/react-native/',
      title: 'React Native'
      }, {
        dialogTitle: 'Share React Native website',
  
        tintColor: 'green'
      })
      .then(alert('shared'))
      .catch((error) => this.setState({result: 'error: ' + error.message}));
    }



const AddressView = (props) => {
    var text = JSON.stringify(props.data);
    return(
        <View>
        <Card containerStyle={{borderRadius: 5}}>
          <View style={{flexDirection: 'row'}}>
          <View style={{flex:1,}}>
                            <ListItem 
                            title={props.data.Name}
                            leftIcon={{name: 'person', color : '#42A5F5' }}
                            hideChevron={true}
                            />
                            <ListItem 
                            title={props.data.Phone}
                            leftIcon={{name: 'phone', color : '#42A5F5'}}
                            hideChevron={true}
                            leftIconOnLongPress={() =>console.log('pressed')}
                            />
                            <ListItem 
                            title={props.data.Address.substring(4,7)+'+'+props.data.Address.substring(7,8)+props.data.Address.substring(9,11)}
                            leftIcon={{name: 'home', color : '#42A5F5'}}
                            hideChevron={true}
                            />
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <QRCode
                value= {`${text}`}
                size={125}
                bgColor='black'
                fgColor='white'
                style={{marginTop:20}}
          />
          </View>
          </View>
    
        <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
            <Icon
            raised
            name='directions-car'
            color='#42A5F5'
            onPress={() => carPressed()} />
            <Icon
            raised
            name='security'
            color='#42A5F5'
            />
            <Icon
            raised
            name='directions-bus'
            color='#42A5F5'
            onPress={() => console.log('bus')} />
            <Icon
            raised
            name='share'
            color='#42A5F5'
            />
        </View>
    
        </Card>
        
        </View>
    
      );
}


MyAddress = (props) => {
    return(
            <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', borderColor: '#42A5F5' }}>
                 <TouchableOpacity onPress={props.function}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 0}}>
                            <Text style={{marginRight: 10}}>Home</Text>
                                <Image 
                                style={{width:70, height:70, borderRadius: 70, justifyContent:'center'}}
                                source= {{uri: "https://www.w3schools.com/w3images/avatar2.png"}} 
                                />
                            <Text style={{marginLeft: 10}}>Address</Text>
                        </View>
                        <AddressView data={props.data}/>
                  </TouchableOpacity>
                </View>
    );
}
var MonAddresse = {};

carPressed = () =>{

    if (Platform.OS === 'ios') {
        Linking.openURL(`http://maps.google.com/maps?q=37.78825,-122.4324`);
      } else {
        Linking.openURL(`https://www.google.com/maps/dir/39.143749,-84.569849/@37.78825,-122.4324/`);
      }
    };



export default class HomeScreen extends React.Component {


constructor() {
    super();
    this.state = {
        my_address: {
            Name: '',
            Address: '',
            Phone: '',
            Private: '',
            geocode: '',
        },
        showInfo: 'false',
        place: '',
        city: '',
        showInfo: 'false',
        location: {latitude: 0, longitude: 0, region: '', country: ''},
        localitedone: false
    };
    this.GetMyAddress();
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
    this.setState({
        location: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        }
        
    });
    this.GetCity();
}


GetCity =  async () =>{
            var Region = await PostAPI('getaddress', {latitude: this.state.location.latitude, longitude: this.state.location.longitude});
            this.setState({place: Region.address, city: Region.city}); 
}

    
GetMyAddress = async () => {
    var MyAddress = await GetData('MyAddress');
    if(MyAddress){
        this.setState({my_address: {Name: MyAddress.first_name + MyAddress.last_name,
            Address: MyAddress.Home_Address,
            geocode: (decodeGLCode(`${MyAddress.Home_Address.substring(0,8)}+${MyAddress.Home_Address.substring(9,11)}`)),
            Phone: MyAddress.phone,
            Private: MyAddress.private,
            }});
    }
    else{
        console.log('empty'); 
    }

    return MyAddress;
}

   goMapAdd = () => {
        this.props.navigation.navigate('MapScreen');
   } 

   goEmergency = () => {
    this.props.navigation.navigate('Emergency');
   }


   ShowMyInfo = () => {
    this.setState({showInfo: !this.state.showInfo});
    if(this.state.showInfo){
      this.refs.scrollView.scrollToEnd();
    }
    else{
      this.refs.scrollView.scrollTo({y:0, animated: true});
    }
  }

    render() {
        return ( 

        	<ScrollView ref="scrollView" >
                <Header
                placement="center"
                backgroundColor='#42A5F5'
                centerComponent={{ text: this.state.place, style: { color: '#fff' } }}
                />
    
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between',  }}>
                    <CreateTile data={{name: 'Emergency', URI: "https://img.gta5-mods.com/q95/images/ambulance-samu-french-paramedic/7e327c-20170203203437_1.jpg" }} function = {this.goEmergency} />
                    <CreateTile data={Favorite_Array[3]} function = {this.goEvents} />
                    <CreateTile data={Favorite_Array[4]} function = {this.goMapAdd} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
                
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
                <TouchableOpacity
                onPress={() =>  this.props.navigation.navigate('GetAddress')}
                >
                <Text> Get an address </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon 
                raised
                name='map'
                size={28}
                color='#42A5F5'
                onPress={() => this.props.navigation.navigate('GetAddress')} 
                />
                </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}> 
                <Icon 
                raised
                size={28}
                name='camera'
                color='#42A5F5'
                onPress={() => this.props.navigation.navigate('Scan')} 
                />
                <TouchableOpacity
                onPress = {() => this.props.navigation.navigate('Scan')}
                >
                <Text> Scan a code </Text>
                </TouchableOpacity>
                </View>
                
                </View>
                <MyAddress data={this.state.my_address} function = {this.ShowMyInfo} />
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