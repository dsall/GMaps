import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginFlow from './Components/Screens/Authentication/LoginFlow';

import MaterialBottomTabNavigator from './Components/Screens/MainApp/BottomBar';

import * as firebase from 'firebase';

import ApiKeys from './constants/ApiKeys';



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
