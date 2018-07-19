import React from 'react';

import LoginFlow from './Components/Screens/LoginSignup.js/login';
import AppFlow from './Components/Screens/MainApp/MainAppUI';

import { StyleSheet, View } from 'react-native';

import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    // Initialize firebase...
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }

  render() {
      return (
        <View style={styles.container}>
          {(this.state.isAuthenticated) ? <AppFlow /> : <LoginFlow />}
        </View>
      );
    }
}


