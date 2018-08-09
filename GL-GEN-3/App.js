import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginFlow from './Components/Screens/Authentication/LoginFlow';
const DataMethods = require('./Components/methods/storage');

import MaterialBottomTabNavigator from './Components/Screens/MainApp/BottomBar';
import PhoneAuthFlow from './Components/Screens/Authentication/PhoneAuth/PhoneAuthFlow';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      isAuthenticated: false
    };

    this.checkIfLoggedIn();
  
}


checkIfLoggedIn = async () =>{
  try{
  const useruid = await GetData ('uid');
  console.log(useruid);
  if(useruid === 'false'){
    this.setState({isAuthenticated: false})
  }
  else{
    this.setState({isAuthenticated: true})
  }
  return useruid;
  }
  catch(err){
      console.log(err);
  }
}

componentDidMount(){
  this
}


  render() {
      return (
        <View style={styles.container}>
          {(this.state.isAuthenticated) ? <MaterialBottomTabNavigator/> : <PhoneAuthFlow/> }
        </View>
      );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
