
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput } from "react-native";



import * as firebase from 'firebase';

import PhoneInput from "react-native-phone-input";
const gmapslogo = require("../../../Assets/Images/gmapslogo.png");


export default class Login extends Component {


  constructor() {
    super();

    this.state = {
      valid: "",
      type: "",
      value: ""
    };
  }

verifypin = () => {
console.log('verifie');
}

onLoginPress = () => {
  this.setState({
    valid: this.phone.isValidNumber(),
    type: this.phone.getNumberType(),
    value: this.phone.getValue()
  });

  if (this.state.valid){
    let phoneNumber  = this.state.value;
    firebase.auth().signInWithPhoneNumber(phoneNumber)
    .then(console.log('success'))
  }
  else{
    console.log('invalid'+this.state.valid);
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
            initialCountry='us'
            />
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