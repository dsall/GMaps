import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView} from 'react-native';
import { LinearGradient, Constants } from 'expo';
import {Paper , Searchbar,  Dialog, DialogContent, Paragraph} from 'react-native-paper';
import {Tile, Icon} from 'react-native-elements';

import Swiper from 'react-native-swiper';

const Storage = require('../../Methods/Storage/Storage');
const api = require('../../Methods/API/http');

const encode = require('../../Methods/Location/pluscode').encode;
const decode = require('../../Methods/Location/pluscode').decode;

const Gmapslogo = require('../../../Assets/Images/gmapslogo.png');
const police = require ('../../../Assets/Images/police.jpg');
const Friends = require ('../../../Assets/Images/friends.jpg');
const Find = require ('../../../Assets/Images/MOCKUP.jpg');
const Home = require ('../../../Assets/Images/home.jpeg');

const qrcode = require ('../../../Assets/Images/qrcode.png');

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;


const ShowCity = (props) => {
  return(
    <Paper
    style={{
      backgroundColor: 'white',
      elevation: 12,
      height: 0.075*height,
      marginTop: 0.01*height,
      marginHorizontal: 0.025*width,
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor: '#42A5F5',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    }}
    >
            <Image
            source = {Gmapslogo}
            style={{
              width: 0.075*height,
              height: 0.1*width,
              justifyContent: 'flex-start',
            }}
            />
            <Text
              style={{
                backgroundColor: 'transparent',
                color: 'black',
                
              }}>
              {props.address}
            </Text>
    </Paper>
  );


}

const EmergencyCard = () => {
  return(
    <View>
      <Paper>
        <Tile imageSrc = {police}
            contentContainerStyle = {{borderRadius: 10, borderTopLeftRadius: 5,
              borderTopRightRadius: 5,}}
            containerStyle={{
              marginHorizontal: 0.025*width,
              marginTop: 10,
              height: 0.2*height,
              width: 0.95*width,
            }}
            imageContainerStyle={{borderRadius: 10}}
            height={0.2*height}
            width={0.95*width}
            featured={true}
        /> 
        <TouchableOpacity>
        <View style={{
            backgroundColor: '#D50000',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            width: 0.95*width,
            marginHorizontal: 0.025*width,
            
        }}> 
              <Text style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 26,
                textAlign: 'center',
              
              }}>URGENCES</Text>

        </View>
        </TouchableOpacity>
      </Paper>
    </View>
    
  );
}

const ShowCard = (props) => {
  return(

           <Paper
           elevation={5}
           style={{
          width: 0.95*width,
          height: 0.20*height,
          borderRadius: 5,
          borderWidth: 0.1,
          borderColor: 'black',
          marginTop: 10,
          marginHorizontal: 0.025*width,
          }}
           >

              <ImageBackground
               resizeMode="cover"
               style={{width: '100%', height: '100%', borderRadius: 10, }}
               opacity={0.9}
               source={props.Image}
               >
               <Text
               style={{
                 textAlign: 'center',
                 textAlignVertical:'center',
                 marginVertical: 0.08*height,
                 color: 'white',
                 fontWeight: 'bold',
                 fontSize: 26,
               }}
               >{props.title}</Text>
               </ImageBackground>
          

             </Paper>
    
  );
}

const FindCard = (props) => {
  return(
    <KeyboardAvoidingView>
        <Paper
        elevation={5}
        style={{
          width: 0.95*width,
          height: 0.15*height,
          borderRadius: 5,
          borderWidth: 0.1,
          borderColor: 'black',
          marginVertical:10,
          marginHorizontal: 0.025*width,
        }}
        >
        <View
        style={{
          flexDirection: 'row',
          flex:1,
        }}
        >
          <View
          style={{
            flex:1, 
            flexDirection: 'column',
            justifyContent: 'space-evenly',

          }}
          >
            <TouchableOpacity 
            
            onPress={props.GetFunction}
            style={{
              flexDirection: 'row',
              alignItems:'center',
              borderWidth: 0.1,
              borderRadius: 5,
              marginHorizontal: 2, 
            }}>
            <Image source = {Gmapslogo} 
            style={{
              width: 0.1*width,
              height: 0.1*width, 

            }}
            />
            <Text
            style={{
              
            }}
            >Get Address</Text>
            </TouchableOpacity>

             <TouchableOpacity 
             
             style={{
              flexDirection: 'row',
              alignItems:'center',
              borderWidth: 0.1,
              borderRadius: 5,
              marginHorizontal: 2, 
            }}>

            <Image source = {qrcode} 
            style={{
              width: 0.1*width,
              height: 0.1*width, 

            }}
            />
            <Text
            style={{
              
            }}
            >Scan Code</Text>
            </TouchableOpacity>

          </View>

          <View
          style={{
            flex:2, 
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center'
          }}
          >
          <Searchbar />
            
          </View>
        </View>
          
        </Paper>
    </KeyboardAvoidingView>
    
  );
}



class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      glcode: '',
      latitude: null,
      longitude: null,
      error: null,
      place: '',
      city: '',
      firstQuery: '',
      visible: 'false'
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          glcode: encode(position.coords.latitude, position.coords.longitude),
          error: null,
        });
        this.GetCity();
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }


GetCity =  async () =>{
    var Region = await PostAPI('getaddress', {latitude: this.state.latitude, longitude: this.state.longitude});
    this.setState({place: Region.address, city: Region.city}); 
}

GetAddress = () => {
  this.setState({visible: true});
  console.log('hello');
}

_hideDialog = () => this.setState({ visible: false });

  render(){

  return(
        <View
        style = {{backgroundColor: 'white', flex:1}}
         >
           <View style={styles.statusBar} />
           <KeyboardAvoidingView>
           <ShowCity  address={this.state.place}/>
           <ScrollView>
             <EmergencyCard />
             <ShowCard Image = {Friends} title ='Saved and Recent Addresses'/>
             <FindCard GetFunction= {this.GetAddress}/>
             <ShowCard Image = {Home} title ='Add Your House'/>
             <ShowCard Image = {Home} title ='Add Your House'/>
             <ShowCard Image = {Home} title ='Add Your House'/>
           </ScrollView>
           </KeyboardAvoidingView>
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


export default HomeScreen;