import React, { Component } from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class BarcodeRead extends Component {
  state = {
    hasCameraPermission: null,
    data_barecode: ''
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };



  render() {
    return (
        
       <View style={{flex:1}}> 
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={data_barecode => this.setState({ data_barecode })}
              style={{ height: 150, width: 420, top: 40,  }}
            />
        }
       </View>
       <View style={styles.cont}>
        <TouchableOpacity
        style={styles.scanbutton}
        onPress={() => console.log(this.state.data_barecode)}
        >
        <Text style={{alignItems: 'center',textAlign: 'center',}}>Scan the Barrecode</Text>
        </TouchableOpacity>
        </View>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  cont:{
      flex: 3,
      alignItems: 'center'

  },
  scanbutton:{
      alignItems: 'center',
      width:420,
      height: 50,
      backgroundColor: '#90CAF9'
  }
});