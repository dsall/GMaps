import React, { Component } from 'react';

import {View, Text, StyleSheet, Linking} from 'react-native';
import { MainNavigator } from './BottomTabBar';
const MainApp = require('./BottomTabBar').MenuStack;
const LogInStack = require('./BottomTabBar').LogInStack;
const Storage = require ('./Components/Methods/Storage/storage');
import WelcomeScreen from './Components/Screens/Welcome/Welcome'; 

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
  

