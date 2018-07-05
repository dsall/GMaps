
import {TouchableOpacity, Alert, KeyboardAvoidingView, StyleSheet, Text,  View, Image } from 'react-native';
import {  Form, Item, Input, Label } from 'native-base';
import React from 'react';
const gmapslogo = require("../../Images/gmapslogo.png");
import * as firebase from 'firebase';

export default class ForgotPassword extends React.Component {
  
state = {
    email: '',
  }

  onResetPasswordPress = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(() => {
            Alert.alert("Password reset email has been sent.");
        }, (error) => {
            Alert.alert(error.message);
        });
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
        <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
              underlineColorAndroid='transparent'
              autoCapitalize="none" 
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              />
              </Item>

          </Form>
          <TouchableOpacity 
          style={styles.button}
         
          onPress={this.onResetPasswordPress}
          >
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('LoginForm')}
          >
            <Text style={styles.signupText}>Back to Login</Text>
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
    form:{
    paddingBottom: 20,
  },

  input:{
      height: 40,
      backgroundColor: 'white',
      marginBottom: 20,
      color: 'black',
      borderColor: '#42A5F5',
      borderWidth: 0.3,
      marginVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
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
  }


});