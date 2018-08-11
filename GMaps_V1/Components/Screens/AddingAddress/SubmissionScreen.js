import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Dimensions} from 'react-native';
import PhoneInput from "react-native-phone-input";
import { ListItem, Right, Button, Switch , Thumbnail, Form, Content, Card, CardItem, Body, Left , Item, Input, Label} from 'native-base';
import {Icon } from 'react-native-elements';
import GL_Code from './DataAnalysis';
import {Code} from './DataAnalysis';
const API = require('../../Methods/Api/http');

console.ignoredYellowBox = ['Setting a timer'];
data=[];

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default class AddingPage extends Component {
static navigationOptions = {
  header: null,
  };

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
      phone: '',
      saveddata: { first_name: "", last_name: "", Home_Address: "", phone: "", private: ""},
    };
    this.GetPhoneNumber();
  }



GetPhoneNumber = async () => {
    var PhoneNumber = await GetData('PhoneNumber');
    this.setState({phone: PhoneNumber});
}
SubmitGLCode = async () => {
    var data =  { 
                    first_name: this.state.firstname, 
                    last_name: this.state.lastname,
                    Home_Address: Code(),
                    phone: this.state.phone,
                    private: this.state.private,         
                };
    const Response = await PostAPI('AddAddress', data );
    if(Response){
      StoreData('MyAddress', Response.AddedAddress);
      setTimeout( () => {alert('Your address have been stored in our database')}, 1000);
      this.props.navigation.navigate('Home');   
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
      <View style={{flex:10, justifyContent: 'flex-end', marginHorizontal: 20, marginVertical: 20,}}>
        <Content>
          <Card style={{width: 0.90*width,}}>
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
                  <Text style={styles.directions}>Enter your name and choose if you want to make your address public. </Text>
                  <Text style={{justifyContent: 'center', textAlign: 'center', fontSize: 30}}>{(this.state.phone)}</Text>
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
                  <View style={{justifyContent:'center', flexDirection:'column', alignItems: 'center'}}>
                  <TouchableOpacity   
                  style={{height: 40,
                          width: 0.50*width,
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
                  onPress={this.SubmitGLCode} 
                  >
                  <Text style={styles.buttonText} >SUBMIT ADDRESS</Text>
                  </TouchableOpacity> 
                  </View>
                </Form> 
                
        </View>                   
        </Content>
        </View>
        <Icon 
        containerStyle={{position: 'absolute', bottom: 0, right: 0}}
        reverse
        size = {30}
        name='cancel'
        color='red'
        onPress={() => this.props.navigation.navigate('Home')} 
        />

    </KeyboardAvoidingView>
    
    );
    
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#42A5F5',
    height: 40,
    width: 0.50*width,
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