import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Components/Screens/Loading and Splash/Loading';
import Welcome from './Components/Screens/Loading and Splash/Welcome';
import Login from './Components/Screens/Authentication/Login';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
