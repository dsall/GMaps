import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
  DeviceEventEmitter,
} from 'react-native';


import RNFirebasePhoneAuth from 'react-native-firebase-phone-auth';


export default class App extends Component {

  componentDidMount() {
    
    this.listenToOTP();
}

sendtext = () => {
  let phoneNumber = "+15134490428";
  RNFirebasePhoneauth.sendOTP(phoneNumber);
}
listenToOTP(){
    DeviceEventEmitter.addListener('OTPStatus', (data) => {
        switch(data.CODE){
           case "SENT":
                   //SMS Sent
               break;
           case "VERIFIED":
                    //SMS Received & read by google play services
                     let authData = {
                         code : data.OTPNumber,
                         verificationId : data.verificationId
                     }
                     firebase.auth().signInWithPhoneAuth(
                        authData,
                        (success)=>{
                            console.log('success');
                        },
                        (error)=>{
                          console.log('error');
                            //on Error
                        });
                break;
           case "ERROR":
                   'error sending the message'
               break;
        }

        if(data.CODE == "ERROR")
            {
            }

    });

}
render(){
  return(
    <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
      <TouchableOpacity
      onPress={this.sendtext}
      >
        <Text> Press to send text</Text>
      </TouchableOpacity>

    </View>

  );
}

}