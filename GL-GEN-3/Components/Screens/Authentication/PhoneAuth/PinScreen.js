import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput } from "react-native";
import { AsyncStorage } from "react-native";
import {  Form, Item, Input, Label } from 'native-base';
const gmapslogo = require("../../../../Assets/Images/gmapslogo.png");
const datamethods = require ('../../../methods/storage');

const Link = 'https://6742d2a1.ngrok.io/verify';


export default class PinScreen extends Component {

constructor() {
    super();
    this.state = {
        phone: '+15134490428',
        pin: '',
        data: {}
    
    };

    }

getData = async (data) => {
    var resultat = await GetData(data);
    
    this.setState({
        dat: resultat
    })
}

SendPin = () => {
    fetch(Link, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "phone": this.state.phone,
          "pin": this.state.pin,
        }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.props.navigation.navigate('Home');
        })
        .catch((error) => {
          console.log('please try again');
        });
}
submitPin = () => {
    this.SendPin();
    console.log('submit pin');

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
                <Text>{JSON.stringify(this.state.data)}</Text>
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
            onPress={() => this.getData('PhoneNumberData')}      
            >
                <Text style={styles.buttonText}>Submit Pin</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.button} 
            onPress={() => console.log(this.state.data)}      
            >
                <Text style={styles.buttonText}>Show Result</Text>
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