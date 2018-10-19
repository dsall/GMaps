import React, { Component } from 'react';
import { StyleSheet, View, Text,Modal, Image, TouchableOpacity, KeyboardAvoidingView , ActivityIndicator, Dimensions, TextInput} from 'react-native';
import PhoneInput from "react-native-phone-input";
const gmapslogo = require("../../../Assets/Images/gmapslogo.png");
const API = require('../../Methods/API/http');
const Storage = require('../../Methods/Storage/Storage');

var {height, width} = Dimensions.get('window');


export default class LoginFlow extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      valid: '',
      type: '',
      phonenumber: '',
      enterpin: false,
      pin: ''
    };
  }

  VerifyPin = async () => {
    console.log('verifying');
    var path = 'verify';
    var phone = await GetData('PhoneNumber');
    var data = {
        "phone": phone,
        "pin": this.state.pin,
    }
    const Response = await PostAPI(path, data);
    console.log(Response);
    if(Response.success){
        StoreData('uid', Response.uidtoken);
        this.props.navigation.navigate('Home');
        // alert('Logged in successfully');
    }
    else{
        alert('Wrong pin enterred, try again');
    }
   }

  sendPin = async () => {
    var data = {"phone": this.state.phonenumber};
    var path = 'phoneauth';
    StoreData('PhoneNumber', this.state.phonenumber);
    const Response = await PostAPI(path, data);
    if(Response.success){
        this.setState({enterpin: true, loading: false});

    }
    else{
        alert('try again');
    }
  
}

  CheckValidity = () => {
    if (this.state.valid){
      this.setState({loading: true});
      this.sendPin();
    }
    else{
      alert('Please try to input a valid number');
      
    }
  }
  onLoginPress = () => {
    this.setState({
      valid: this.phone.isValidNumber(),
      type: this.phone.getNumberType(),
      phonenumber: this.phone.getValue()
    });
    setTimeout(this.CheckValidity, 1000);
  }

  render() {

    if(this.state.loading){
      return(
        
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.loading}
          onRequestClose={() => {
            this.setState({loading: false})
          }}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 0.85*width, height: 0.85*width}} >
                  <Image 
                  source={gmapslogo}
                  style={{width: 0.20*width, height: 0.2*width}}
                  />
                  <ActivityIndicator   style={{marginTop: 0.25*width}}  size="large" color='#42A5F5'/>
                  <Text style={{marginTop: 0.25*width, fontSize: 20}}> Sending you a PIN to verify your phone number </Text>
                </View>
          </View>
        </Modal>

      );
    }
    if(this.state.enterpin){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={gmapslogo}
                />         
            </View>
    
            <View style={styles.container2}> 
                <Text style={{textAlign: 'center'}}> Please enter the PIN you received by text</Text>
                <TextInput
                style={{borderWidth: 0.5,borderRadius: 5,  borderColor: 'grey', justifyContent:'center', alignItems:'center',alignContent:'center', height: 40}}
                underlineColorAndroid="transparent"
                keyboardType='number-pad'
                secureTextEntry={true}
                maxLength={4}
                placeholder='Enter PIN'
                autoCapitalize="none"
                onChangeText={pin => this.setState({ pin })}
                value={this.state.pin}
                />
                <TouchableOpacity
                style={styles.button}  
                onPress={this.VerifyPin} 
                >
                <Text style={styles.buttonText} >Submit your PIN</Text>
                </TouchableOpacity>
            </View>
    
        </KeyboardAvoidingView>
        );
    }


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
              />
              <TouchableOpacity
              style={styles.button}  
              onPress={this.onLoginPress} 
              >
              <Text style={styles.buttonText} >Login</Text>
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

