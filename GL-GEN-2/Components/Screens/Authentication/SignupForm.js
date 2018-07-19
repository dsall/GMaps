import React from "react";
import {TouchableOpacity, Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import {Form, Item, Input, Label } from 'native-base';
import * as firebase from 'firebase';


const gmapslogo = require("../../../Assets/Images/gmapslogo.png");



export default class Signup extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phone: '',
      password: '',
      rppassword: '',
    };
}


onSignupPress = () => {
  if (this.state.password !== this.state.rppassword) {
      Alert.alert("Passwords do not match");
      return;
  }

  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
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
          <View style={styles.formContainer}>    
          <View style={styles.container2}>
          <Form style={styles.form}>
              <Item  floatingLabel last>
                <Label>Email</Label>
                <Input 
                underlineColorAndroid='transparent' 
                autoCapitalize="none" 
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                />
              </Item>
              <Item floatingLabel last>
                <Label>Phone Number</Label>
                <Input 
                underlineColorAndroid='transparent' 
                autoCapitalize="none" 
                onChangeText={phone => this.setState({ phone })}
                value={this.state.phone}
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
              <Item floatingLabel last>
                <Label>Repeat Password</Label>
                <Input 
                secureTextEntry={true} 
                underlineColorAndroid='transparent' 
                autoCapitalize="none" 
                onChangeText={rppassword => this.setState({ rppassword })}
                value={this.state.rppassword}
                />
              </Item>
            </Form>
            <TouchableOpacity 
            style={styles.button}
            onPress={this.onSignupPress}
            >
                  <Text style={styles.buttonText}>Create your account</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
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