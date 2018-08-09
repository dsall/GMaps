import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Image } from "react-native";
import CountryPicker from 'react-native-country-picker-modal';
import PhoneInput from "react-native-phone-input";
const gmapslogo = require("../../../Assets/Images/gmapslogo.png");
const API = require('../../Methods/Api/http');
const Storage = require ('../../Methods/Storage/storage');

export default class PhoneInputScreen extends Component {
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


sendPin = async () => {
    var data = {"phone":this.state.phonedata.value};
    var path = 'phoneauth';
    const Response = await PostAPI(path, data);
    if(Response.success){
      StoreData('PhoneNumber', this.state.phonedata.value);
      this.props.navigation.navigate('PIN');
      alert('Pin sent');
    }
    else{
      alert('Pin not sent, please try again');
    }
  
}

CheckValidity = () => {
  if (this.state.phonedata.valid){
    this.sendPin();
  }
  else{
    alert('Please try to input your number again');
    
  }
}


onLoginPress = () => {
  this.setState({
    phonedata:{
    valid: this.phone.isValidNumber(),
    type: this.phone.getNumberType(),
    value: this.phone.getValue()
    }
  });
  setTimeout(this.CheckValidity, 1000);
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
                cca2="sn"
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