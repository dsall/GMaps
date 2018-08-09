import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput } from "react-native";
import {  Form, Item, Input, Label } from 'native-base';
const gmapslogo = require("../../../../Assets/Images/gmapslogo.png");
import { withNavigation } from 'react-navigation';
import { AsyncStorage } from "react-native";
const datamethods = require ('../../../methods/storage');
import CodeInput from 'react-native-confirmation-code-input';

const Link = 'https://62ed937d.ngrok.io/verify';

class PinScreen extends Component {

constructor() {
    super();
    this.state = {
        phone: '+15134490428',
        pin: '',
    };

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
        .then((data) => {
          if(data.success){
              StoreData('uid', (JSON.stringify(data.uidtoken)));
              this.props.navigation.navigate('MaterialBottomTabNavigator');
          }
          else{
              alert('wrong pin submitted');
          }

        })
        .catch((error) => {
          console.log('please try again');
        });
}

SeeDataStored = async () => {
    const uid = await GetData('uid');
    console.log(uid);

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
               
            <TouchableOpacity 
            style={styles.button} 
            onPress={this.SeeDataStored}      
            >
                <Text style={styles.buttonText}>See Stored Data</Text>
            </TouchableOpacity>
          </View>

      </KeyboardAvoidingView>
      );
    
  }
}

export default withNavigation(PinScreen);

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