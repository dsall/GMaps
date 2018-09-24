import React, { Component } from 'react';
import { StyleSheet, View, Text,Modal, Image, TouchableOpacity, KeyboardAvoidingView , ActivityIndicator} from 'react-native';

import WelcomeScreen from './Components/Screens/Welcome/Welcome';
const MainApp = require('./Components/Screens/Navigation/Navigation').MenuStack;
const LogInStack = require('./Components/Screens/Navigation/Navigation').LogInStack;
const Storage = require('./Components/Methods/Storage/Storage');


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userid: '',
        isAuthenticated: false,
        isLoading: true,
    };
    setTimeout( () => {
        this.checkIfLoggedIn();
    }, 500);
    
    
}

checkIfLoggedIn = async () =>{
    try{
    const useruid = await GetData ('uid');
    if(useruid === 'false'){
        this.setState({isAuthenticated: false, isLoading: false})
    }
    else{
        this.setState({isAuthenticated: true, isLoading: false})
    }
    return useruid;
    }
    catch(err){
    }
    }

  render(){
    if(this.state.isLoading){
      return(
          <View style={styles.container}>
              <WelcomeScreen />
          </View>
      );
  }

    return(
        <View className="App" style={styles.container}>
          
          {(this.state.isAuthenticated) ? <MainApp /> : <LogInStack /> }
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