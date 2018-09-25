import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Share, Platform, Linking} from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import {Paper ,  Chip, TextInput} from 'react-native-paper';
import {Icon, SearchBar} from 'react-native-elements';
import PhoneInput from "react-native-phone-input";



import Swiper from 'react-native-swiper';
var search = "";
var ccam = 'SN';
var ccode = '';
var pays = 'Senegal';
var t = false;
const Storage = require('../../Methods/Storage/Storage');
const api = require('../../Methods/API/http');

const encode = require('../../Methods/Location/pluscode').encode;
const decode = require('../../Methods/Location/pluscode').decode;

const Gmapslogo = require('../../../Assets/Images/gmapslogo.png');
const police = require ('../../../Assets/Images/police.jpg');
const Friends = require ('../../../Assets/Images/friends.jpg');
const Find = require ('../../../Assets/Images/MOCKUP.jpg');
const Home = require ('../../../Assets/Images/home.jpeg');
const Dialpad = require ('../../../Assets/Images/dialpad.png');
const ambulance = require ('../../../Assets/Images/ambulance.png');

const qrcode = require ('../../../Assets/Images/qrcode.png');

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;


const colors = ['#2dc937', '#99c140', '#e7b416', '#db7b2b', '#cc3232'];

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

const Emergency = (props) => {
  return(
    <View
    style={{
      flexDirection: 'column',
      top: -0.1*height,
    }}
    >
          <TouchableWithoutFeedback
          onPress={props.function}
          >
          <Paper
           elevation={10}
           style={{height: 0.20*height, width: 0.95*width, marginHorizontal: 0.025*width, borderRadius: 0.01*width}}
           >

           <Image source={ambulance} style = {{flex:1, width: 0.95*width, height: 0.10*height, resizeMode: 'contain'}} />
          
           <View
           style={{
                backgroundColor: '#D50000',
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                width: 0.95*width,  
            }}
           >
                  <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 26,
                    textAlign: 'center',
                  
                  }}>URGENCES</Text>
            </View>

             </Paper>

             </TouchableWithoutFeedback>

    </View>
  );
}




const GetAddress = (props) => {
  return(
    <View
    style={{
      flexDirection: 'column',
      justifyContent: 'center',
      top: -0.08*height,
    }}
    >
          <TouchableWithoutFeedback
          onPress={() => console.log('pressed')}
          >
          <Paper
           elevation={10}
           style={{height: 0.20*height, width: 0.95*width, marginHorizontal: 0.025*width, borderRadius: 0.01*width}}
           >
          <View
          style={{flexDirection: "row", flex: 3}}
          >
          <View
          style={{flex: 3}}
          >
          <View style={{flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}> 
          <Icon name="location-on" />
          <Text
          style={{fontSize: 18}}
          >Your Location</Text>
          </View>
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
            >{props.glcode.slice(8,11)}</Text>
            </TouchableOpacity>
          </View>
          <Text
          style={{textAlign: 'center', fontSize: 16}}
          >{props.city}</Text>
          <View
          style={{flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center', alignItems: 'center'}}
          >
          <TouchableOpacity>
          <Icon
          raised
          name='save'
          color='green'
          onPress={() => console.log('bus')} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={props.Share}
          >
          <Icon
          raised
          name='share'
          color='#42A5F5'
          />
          </TouchableOpacity>
          </View>


          </View>

          <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}
          >
          <Paper
          elevation={5}
            style={{
              width: 0.20*width,
              height: 0.20*width,
              borderRadius: 0.1*width,
              backgroundColor: props.color,
            }}
          >

          </Paper>

          </View>

          </View>

          </Paper>

          </TouchableWithoutFeedback>

    </View>
  );
  
}

const AddressBook = (props) => {
  return(
    <View
    style={{
      flexDirection: 'column',
      justifyContent: 'center',
      top: -0.05*height,
      marginBottom: 10, 

    }}
    >    
          <TouchableOpacity
          onPress={props.function}
          >
            <ImageBackground source={props.image} style={{height: 0.20*height, width: 0.95*width, marginHorizontal: 0.025*width, borderRadius: 0.01*width, justifyContent: 'center', alignContent: 'center', alignItems: 'center', opacity: .8}} resizeMode= 'cover'>
              <Text
              style={{
                color: "white",
                fontSize: 30,
                opacity: 5,
              }}
              >{props.title}</Text>
            </ImageBackground>
          </TouchableOpacity>

          
  

    </View>
  );
  
}


const Search = (props) => {

  return(
    <View
    style={{
      flexDirection: 'column',
      justifyContent: 'center',
      top: -0.03*height,

    }}
    >
          <TouchableWithoutFeedback
          >
          <Paper
           elevation={10}
           style={{height: 0.15*height, width: 0.95*width, marginHorizontal: 0.025*width, borderRadius: 0.01*width, justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row'}}
           >
           <View
           style={{flex: 3}}
           >
           <View
           style={{
             flexDirection: 'row',
             justifyContent: 'center',
             alignContent: 'center'
           }}
           >
              <TouchableOpacity
              onPress={props.SearchGCode}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                width: 0.20*width,
                height: 0.05*height,
                backgroundColor: props.gcodecolor,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20, 
                borderRadius: 5, 
              }}
              >
                <Text>G-Code</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={props.SearchPhone}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                width: 0.20*width,
                height: 0.05*height,
                backgroundColor: props.phonecolor,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20, 
                borderRadius: 5, 
              }}
              >
                <Text>Phone</Text>
              </TouchableOpacity>
             </View>
           
           {
             props.searchphone === true ? 
              <View
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                borderWidth: 1,
                borderColor: 'grey'
              }}
              >
              <PhoneInput 
              ref={ref => {
              this.phone = ref;
              }}
              initialCountry="sn"
              flagStyle={{width:0.10*width, height: 0.04*height}}
              textStyle={{fontSize: 14}}
              textProps={{placeholser: 'Enter Your Phone Number'}}
              />
              </View>
               : 
               
               <SearchBar
                containerStyle={{backgroundColor: 'white', borderColor: "white"}}
                inputContainerStyle={{}}
                inputStyle={{backgroundColor: 'white', color: 'black', borderColor: "black", borderWidth:2, }}
                autoCapitalize= 'characters'
                onChangeText={(text) =>{search=text}}
                onSubmitEditing={props.function}
                round
                lightTheme
                showLoading
                platform="android"
                cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                placeholder='Search' />
             
           }
           
    
           </View>
           <View
           style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}
           >
           <TouchableOpacity
           onPress={props.GoScan} 
           style={{
             flexDirection: 'column',
             justifyContent: 'center',
             alignContent: 'center',
             alignItems: 'center'
           }}
           >
           <Text>Scan Code</Text>
           <Image source={qrcode} style={{height: 0.10*height, width: 0.10*height}} />
           </TouchableOpacity>
             
           </View>
           
          </Paper>

          </TouchableWithoutFeedback>

    </View>
  );
  
}


const Card = (props) => {
  return(
        <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
        >
        <Paper
        elevation={7}
        style={{
          height: 0.32*height,
          width: 0.95*width,
          borderRadius: 10,
        }}
        >
        <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          flex: 1, 
        }}
        >
              <TouchableOpacity onPress={props.ShowCard}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 0}}>
                        <Text style={{marginRight: 10}}>Home</Text>
                            <Image 
                            style={{width:0.13*width, height:0.13*width, borderRadius: 0.13*width, justifyContent:'center'}}
                            source= {{uri: "https://www.w3schools.com/w3images/avatar2.png"}} 
                            />
                        <Text style={{marginLeft: 10}}>Address</Text>
                    </View>
              </TouchableOpacity>
        </View>
        <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          flex: 2,
          flexDirection: 'row',
          
        }}
        >
        <View
        style={{flexDirection: 'column', flex: 2, marginLeft: 0.05*width}}
        >
        <View
        style={{
          flexDirection: 'row',
          justifyContent: "flex-start",
          alignContent: 'center',
          alignItems: 'center',
          
        }}
        >
        <Icon name='person' color ='#42A5F5' size={0.075*width} />
        <Text
        style={{
          fontSize: 0.05*width,
        }}
        >{props.data.Name}</Text>
        </View>
        <View
        style={{
          flexDirection: 'row',
          justifyContent: "flex-start",
          alignContent: 'center',
          alignItems: 'center',
          
        }}
        >
        <Icon name='phone' color ='#42A5F5' size={0.075*width} />
        <Text
        style={{
          fontSize: 0.05*width,
        }}
        >{props.data.Phone}</Text>
        </View>
        <View
        style={{
          flexDirection: 'row',
          justifyContent: "flex-start",
          alignContent: 'center',
          alignItems: 'center',
          
        }}
        >
        <Icon name='home' color ='#42A5F5' size={0.075*width} />
        <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 2,
            }}
            >{props.data.Address.slice(0,4)}</Text>
            <TouchableOpacity
            style={{flexDirection: 'row', borderWidth: 2, borderColor: '#42A5F5'}}
            >
            <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 3,
            }}
            >{props.data.Address.slice(4,7)}</Text>
            <Text style={{fontSize: 20, color: '#42A5F5', fontWeight: 'bold',}}>-</Text>
            <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              letterSpacing: 3,
            }}
            >{props.data.Address.slice(7,11)}</Text>
            </TouchableOpacity>
        </View>


        </View>
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
        <Image source={qrcode} style={{width: 0.25*width, height: 0.15*height}} />
          
        </View>

          
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flex:1 , marginBottom: 10}}>
            <TouchableOpacity>
            <Icon
            raised
            name='directions-car'
            color='#42A5F5'
            onPress={props.Car} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon
            raised
            name='security'
            color='#42A5F5'
            />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={props.Share}
            >
            <Icon
            raised
            name='share'
            color='#42A5F5'
            />
            </TouchableOpacity>
        </View>

        </Paper>
        </View>
   ); 
}
class HomeScreen extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      glcode: '',
      added: false,
      error: null,
      place: '',
      city: '',
      color: 'red',
      latitude: '',
      longitude: '',
      errorMessage: null,
      searchphone: false,
      phonecolor: 'white',
      gcodecolor: 'green',
      my_address: {
        Name: '',
        Address: '',
        Phone: '',
        Private: '',
        geocode: '',
      },
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
    this.GetCity();
    this.checkAccurracy();
    search = "";
    
}
GetMyAddress = async () => {
  var MyAddress = await GetData('MyAddress');
  if(MyAddress){
      this.setState({added: true, my_address: {Name: MyAddress.first_name + ' '+ MyAddress.last_name,
          Address: MyAddress.Home_Address,
          geocode: (decode(`${MyAddress.Home_Address.slice(0,8)}+${MyAddress.Home_Address.slice(8,11)}`)),
          Phone: MyAddress.phone,
          Private: MyAddress.private,
          }});
          // console.log(this.state.my_address);
  }
  else{
      console.log('empty'); 
  }

  return MyAddress;
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
    // console.log(this.state.region);
    this.setState({place: Region.address, city: Region.city}); 
}
goEmergency = () => {
  this.props.navigation.navigate('Emergency');
}

SearchByPhone = () =>{
  this.setState({searchphone: true, phonecolor: 'green', gcodecolor: 'white'});
}
SearchByGCode = () => {
  this.setState({searchphone: false, phonecolor: 'white', gcodecolor: 'green'});
}
GoToScan = () => {
  this.props.navigation.navigate('Scan');
}
goSearch = () =>{
  this.props.navigation.navigate('Search', {search: search})
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
goMapAdd = () =>{
  this.props.navigation.navigate('Map');

}
goAddressBook = () =>{

}
SignOut =  async () => {
  StoreData('uid', 'false');
  this.props.navigation.navigate('LogIn');
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

  carPressed = () =>{

    if (Platform.OS === 'ios') {
        Linking.openURL(`http://maps.google.com/maps/dir/${this.state.region.latitude},${this.state.region.longitude}/${this.state.my_address.geocode.latitudeCenter},${this.state.my_address.geocode.longitudeCenter}/`);
      } else {
        Linking.openURL(`https://www.google.com/maps/dir/${this.state.region.latitude},${this.state.region.longitude}/${this.state.my_address.geocode.latitudeCenter},${this.state.my_address.geocode.longitudeCenter}/`);
      }
    };

  render(){

  return(
          
          <ScrollView ref="scrollView">
               <KeyboardAvoidingView style={{ flex: 1 }}
                keyboardVerticalOffset={-150} behavior={"position"}>
           <View style={{height: 0.175*height, backgroundColor:'#42A5F5', top:0 }}
           />
            <Emergency function={this.goEmergency}/>
            <GetAddress glcode={this.state.glcode} city={this.state.place} color={this.state.color} Share={this.ShareAddress}/>
            {(!this.state.added) ? <AddressBook title = "Add your Home Address" function={this.goMapAdd} image={Home}/> : 
            <AddressBook title = "Addressbook" function={this.goMapAdd} image={Home}/>
            }
            <Search searchphone={this.state.searchphone}  SearchPhone={this.SearchByPhone} SearchGCode={this.SearchByGCode} phonecolor ={this.state.phonecolor} gcodecolor={this.state.gcodecolor} GoScan={this.GoToScan} function={this.goSearch}/>
            <Card ShowCard ={this.ShowMyInfo} data={this.state.my_address} Share={this.ShareAddress} Car={this.carPressed}/>
            <TouchableOpacity
            style={styles.button}  
            onPress={this.SignOut} 
            >
            <Text style={styles.buttonText}>Signout</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
          
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
  button:{
    backgroundColor: '#42A5F5',
    height: 40,
    borderRadius: 5,
    marginHorizontal: 10,
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

})


export default HomeScreen;