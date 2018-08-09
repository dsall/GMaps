import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput } from "react-native";
import {  Form, Item, Input, Label } from 'native-base';

const gmapslogo = require("../../../Assets/Images/gmapslogo.png");
const API = require('../../Methods/Api/http');
const Storage = require ('../../Methods/Storage/storage');


export default class PinInputScreen extends Component {

constructor() {

    super();
    this.state = {
        phone: '',
        pin: '',
    };

    }


SendPin = async () => {
 var path = 'verify';
 var phone = await GetData('PhoneNumber');
 var data = {
     "phone": phone,
     "pin": this.state.pin,
 }
 const Response = await PostAPI(path, data);
 if(Response.success){
     StoreData('uid', Response.uidtoken);
     this.props.navigation.navigate('MainApp');
     alert('Logged in successfully');
 }
 else{
     alert('Wrong pin enterred, try again');
 }
}

SeeDataStored = async () => {

    console.log( await GetData('uid'), await GetData('PhoneNumber'));

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
                <Form>
                <Text>Please confirm the PIN you recived by sms in order to login</Text>
                <Item  floatingLabel last>
                <Label>Enter PIN</Label>
                <Input 
                underlineColorAndroid='transparent' 
                autoCapitalize="none"
                onChangeText={pin => this.setState({ pin })}
                value={this.state.pin}
                />
                </Item>
                
            </Form>
            <TouchableOpacity 
            style={styles.button} 
            onPress={this.SendPin}      
            >
                <Text style={styles.buttonText}>Submit Pin</Text>
            </TouchableOpacity>
{/*                
            <TouchableOpacity 
            style={styles.button} 
            onPress={this.SeeDataStored}      
            >
                <Text style={styles.buttonText}>See Stored Data</Text>
            </TouchableOpacity> */}
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