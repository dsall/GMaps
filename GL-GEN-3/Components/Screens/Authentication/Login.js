import React from "react";

import {TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text,  View, Image, Alert } from 'react-native';
import {  Form, Item, Input, Label } from 'native-base';
import * as firebase from 'firebase';
const gmapslogo = require("../../../Assets/Images/gmapslogo.png");


export default class Login extends React.Component {
  
state = {
    email: '',
    password: '',
  }

  onLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { }, (error) => { Alert.alert(error.message); });
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
           
              <Item  floatingLabel last>
              <Label>Email or Username</Label>
              <Input 
              underlineColorAndroid='transparent' 
              autoCapitalize="none"
              onChangeText={email=> this.setState({ email })}
              value={this.state.email}
              />
            </Item>
            <Item secureTextEntry floatingLabel last>
              <Label>Password</Label>
              <Input 
              secureTextEntry={true}
              underlineColorAndroid='transparent' 
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              />
            </Item>
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.forgotText}>Forgot Password</Text>
            </TouchableOpacity> 
          </Form>
          <TouchableOpacity 
          style={styles.button}        
          onPress={this.onLoginPress}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Signup')}
          >
            <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity> 
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
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
  },

  buttonText:{
    fontSize: 24,
    fontWeight: '300',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
    
  },
  signupText:{
    color: 'red',
    textAlign: 'left',
    marginTop: 10,
  },
  forgotText:{
    color: 'blue',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
  }

});