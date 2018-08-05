import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Image, TextInput } from "react-native";
const gmapslogo = require("../../../../Assets/Images/gmapslogo.png");

const Link = 'https://6742d2a1.ngrok.io/phoneauth';



export default class Home extends Component {



  render() {
      return (
          <View style={styles.logoContainer}>
              <Image 
              style={styles.logo}
              source={gmapslogo}
              />         
          </View>
  
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