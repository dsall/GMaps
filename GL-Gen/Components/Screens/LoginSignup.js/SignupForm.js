import React from "react";
import {TouchableOpacity, Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label , Icon} from 'native-base';

const gmapslogo = require("../../Images/gmapslogo.png");



export default class SignupForm extends React.Component {

render() {
    return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
            style={styles.logo}
            source={gmapslogo}
            />         
        </View>
          <View style={styles.formContainer}>    
          <View style={styles.container2}>
          <Form style={styles.form}>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input underlineColorAndroid='transparent' autoCapitalize="none" />
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input underlineColorAndroid='transparent' autoCapitalize="none" />
              </Item>
              <Item floatingLabel>
                <Label>Phone Number</Label>
                <Input underlineColorAndroid='transparent' autoCapitalize="none" />
              </Item>
              <Item secureTextEntry floatingLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={true} underlineColorAndroid='transparent' autoCapitalize="none" />
              </Item>
              <Item floatingLabel last>
                <Label>Repeat Password</Label>
                <Input secureTextEntry={true} underlineColorAndroid='transparent' autoCapitalize="none" />
              </Item>
            </Form>
            <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Create your account</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoginForm')}
            >
              <Text style={styles.signupText}>Login if you have an existing account</Text>
            </TouchableOpacity> 
        </View>
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