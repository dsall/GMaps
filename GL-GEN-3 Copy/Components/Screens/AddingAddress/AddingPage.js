import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import PhoneInput from "react-native-phone-input";
import { ListItem, Right, Button, Icon, Switch , Thumbnail, Form, Content, Card, CardItem, Body, Left , Item, Input, Label} from 'native-base';

import GL_Code from './GetAndAnalyzeData';
import {Code} from './GetAndAnalyzeData';
console.ignoredYellowBox = ['Setting a timer'];
data=[];

const Link = 'https://65de3223.ngrok.io/AddAddress/';

export default class AddingPage extends Component {
  

  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      private: false,
      swcolor: "lightgray",
      prtext: "Public",
      success: false,
      error: false,
      saveddata: {Name: "", Address: "", phone: "", private: ""},
    };
    
  }

StoreData = () => {
  fetch(Link, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "first_name": this.state.firstname,
    "last_name": this.state.lastname,
    "phone": this.phone.getValue(),
    "Home_Address": Code(),
    "private": "false"
  }),
  })
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      saveddata: {
        Name: responseJson.AddedAddress.first_name +' '+ responseJson.AddedAddress.last_name,
        Address: responseJson.AddedAddress.Home_Address,
        phone: responseJson.AddedAddress.phone,
        private: responseJson.AddedAddress.private,
       },
      success: true,
    })
    console.log('Worked');
    
    // this.props.navigation.navigate('Home');
  })
  .catch((error) => {
    this.setState({
      error: true
    })
    console.log('please try again');
  });
}


submit =  () => {
    if (this.phone.isValidNumber()){
     this.StoreData();
    }
    else{
      console.log('invalid'+ this.state.valid);
    }   
    }

privatePress = () =>{
  this.setState(state => ({
    private: !state.private,
  }));

 if(this.state.private){
   this.setState({
     swcolor: "green",
     prtext: "Private",
   })
 }
 else{
  this.setState({
    swcolor: "lightgray",
    prtext: "Public",
  })
 }
}

  render() {

    if (this.state.success){
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text> It was successfull </Text>
                  <Text>{JSON.stringify(this.state.saveddata)}</Text>
                  <TouchableOpacity   
                  style={styles.button}  
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <Text style={styles.buttonText} >Return Home</Text>
                  </TouchableOpacity> 
        </View>
      );
    }

    if(this.state.error){
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text> There is an error please try again </Text>
                  {console.log(this.state.saveddata)}
                  <TouchableOpacity   
                  style={styles.button}  
                  onPress={() => this.props.navigation.navigate('MapAdd')}>
                  <Text style={styles.buttonText} >Return To Adding Screen</Text>
                  </TouchableOpacity> 

        </View>
      );
    }
    
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
                  <Label>Enter Your First Name</Label>
                  <Input
                  underlineColorAndroid='transparent' 
                  autoCapitalize="none"
                  onChangeText={(firstname) => this.setState({ firstname })}
                  />
                  </Item>
                  <Item  floatingLabel last>
                  <Label>Enter Your Last Name</Label>
                  <Input
                  underlineColorAndroid='transparent' 
                  autoCapitalize="none"
                  onChangeText={(lastname) => this.setState({ lastname })}
                  />
                  </Item>
                  <Text style={styles.Glcode}>GL-CODE: {Code()} </Text>

                  <TouchableOpacity   
                  style={{height: 40,
                          borderRadius: 5,
                          marginTop: 20,
                          backgroundColor: this.state.swcolor,
                          }} 
                  onPress={this.privatePress} 
                  >
                  <Text style={styles.buttonText} >{this.state.prtext}</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity   
                  style={styles.button} 
                  onPress={this.submit} 
                  >
                  <Text style={styles.buttonText} >SUBMIT ADDRESS</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity   
                  style={styles.button}  
                  onPress={() => this.props.navigation.navigate('Home')}>
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