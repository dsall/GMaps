import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import PhoneInput from "react-native-phone-input";

import { Thumbnail, Form, Content, Card, CardItem, Body, Left , Item, Input, Label} from 'native-base';

import GL_Code from './GetAndAnalyzeData';
import {Code} from './GetAndAnalyzeData';



export default class AddingPage extends Component {
  

  constructor() {
    super();
    this.state = {
      valid: "",
      type: "",
      value: ""
    };
  }

  render() {
    
    return (
     <KeyboardAvoidingView behavior="padding" style={{flex:1}} >
      <View style={{flex: 1, backgroundColor: '#42A5F5'}}>
      </View>
      <View style={{flex:4, justifyContent: 'flex-end', marginHorizontal: 20, marginVertical: 20,}}>
        <Content>
          <Card>
            <CardItem header>
              <Left>
                  <Thumbnail source={require('../../../Assets/Images/gmapslogo.png')} />
                  <Body>
                    <Text>Your Digital Addres</Text>
                  </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <GL_Code />
              </Body>
            </CardItem>
          
         </Card>

        <View style={{marginTop: 40,}}>
                <Form>
                  <Text style={styles.directions}>Enter Your Phone number and additional information to submit your address </Text>
                  <PhoneInput 
                  ref={ref => {
                  this.phone = ref;
                  }}
                  initialCountry='us'
                  />
                  <Item  floatingLabel last>
                  <Label>Enter Your Full Name</Label>
                  <Input
                  underlineColorAndroid='transparent' 
                  autoCapitalize="none"
                  />
                  </Item>
                  <Text style={styles.Glcode}>GL-CODE: {Code()} </Text>
                  <TouchableOpacity   
                  style={styles.button}  
                  >
                  <Text style={styles.buttonText} >SUBMIT ADDRESS</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity   
                  style={styles.button}  
                  onPress={() => this.props.navigation.navigate('Home')}                  >
                  <Text style={styles.buttonText} >Return Home</Text>
                  </TouchableOpacity> 
                  
                </Form> 
        </View>                   
        </Content>
        </View>
    </KeyboardAvoidingView>
    );
    
  }
}

const styles = StyleSheet.create({
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
    textAlign: 'center',
  },
  Glcode:{
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  directions:{
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 10,
  },

});