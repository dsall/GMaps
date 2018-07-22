import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginFlow from './Components/Screens/Authentication/LoginFlow';

import MaterialBottomTabNavigator from './Components/Screens/MainApp/BottomBar';

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCEM183SVO1MiN9pvUnne7KiGHaEBhm93w",
  authDomain: "gl-gen-bf42f.firebaseapp.com",
  databaseURL: "https://gl-gen-bf42f.firebaseio.com",
  projectId: "gl-gen-bf42f",
  storageBucket: "gl-gen-bf42f.appspot.com",
  messagingSenderId: "990871429132"
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    // Initialize firebase...
    if (!firebase.apps.length) { firebase.initializeApp(config); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }

  render() {
      return (
        <View style={styles.container}>
          {(this.state.isAuthenticated) ? <MaterialBottomTabNavigator /> : <LoginFlow/>}
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
