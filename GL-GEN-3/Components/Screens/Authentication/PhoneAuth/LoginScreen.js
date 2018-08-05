import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput } from "react-native";
import CountryPicker from 'react-native-country-picker-modal';
const datamethods = require ('../../../methods/storage');

import PhoneInput from "react-native-phone-input";
const gmapslogo = require("../../../../Assets/Images/gmapslogo.png");

const Link = 'https://6742d2a1.ngrok.io/phoneauth';




export default class LoginScreen extends Component {

  constructor() {
    super();
    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.state = {
      phonedata: {
      valid: '',
      type: '',
      value: ''
      }
      
    };
  }


componentDidMount() {
  this.setState({
    pickerData: this.phone.getPickerData(),
  });
}

onPressFlag() {
  this.countryPicker.openModal();
}

selectCountry(country) {
  this.phone.selectCountry(country.cca2.toLowerCase());
  this.setState({ cca2: country.cca2 });
}




sendPin = () => {
  fetch(Link, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "phone": this.state.phonedata.value,
    }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      StoreData( 'PhoneNumberData' ,this.state.phonedata);
      this.props.navigation.navigate('PinScreen');
    })
    .catch((error) => {
      console.log('please try again');
    });
}


onLoginPress = () => {
  this.setState({
    phonedata:{
    valid: this.phone.isValidNumber(),
    type: this.phone.getNumberType(),
    value: this.phone.getValue()
    }
  });

  if (this.state.phonedata.valid){
    // console.log(this.state.phonedata.value);
    this.sendPin();
  }
  else{
    console.log('error');
    
  }
}
  render() {
      return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
              <Image 
              style={styles.logo}
              source={gmapslogo}
              />         
          </View>
  
          <View style={styles.container2}> 
  
              <PhoneInput 
              ref={ref => {
              this.phone = ref;
              }}
              initialCountry="us"
              onPressFlag={this.onPressFlag}
              />
              <CountryPicker
                ref={(ref) => {
                  this.countryPicker = ref;
                }}
                onChange={value => this.selectCountry(value)}
                translation="eng"
              >
                <View />
              </CountryPicker>
              <TouchableOpacity 
              style={styles.button}   
              onPress={this.onLoginPress}     
              >
              <Text style={styles.buttonText} >LOGIN</Text>
              </TouchableOpacity>
          </View>
  
      </KeyboardAvoidingView>
      );
    
  }
}

let styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: 'white',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',

  },
  logo:{
    width:100,
    height:100,
  },
  formContainer:{

  },
  container2:{
    padding:20,
  },
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
    textAlign: 'center'
    
  },
});