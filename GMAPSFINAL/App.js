import React, { Component } from 'react';
import { StyleSheet, View, Text,Modal, Image, TouchableOpacity, KeyboardAvoidingView , ActivityIndicator} from 'react-native';
import LoginFlow from './Components/Screens/LogIn/LogIn';
import HomeScreen from './Components/Screens/Home/Home';
import MyComponent from './Components/Screens/Home/AddressDialog';
export default class App extends Component {
  render(){

  return(
    <MyComponent />
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