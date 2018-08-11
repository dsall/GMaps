import React from 'react';
import {View, Text, StyleSheet, Alert, Dimensions, ScrollView} from 'react-native';
import { Constants, BarCodeScanner, Permissions} from 'expo';

import { Icon } from 'react-native-elements';
import AddressView from '../../Methods/Displays/CardView';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

  
export default class ScanScreen extends React.Component {

state = {
    hasCameraPermission: null,
    renderResult: false,
    datascanned: {},
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
    if(this.state.renderResult){
        return(
            <View style ={{flex:1, flexDirection: 'column', }}>
                <View style={{flex:3, justifyContent:'flex-end' }}>
                <AddressView data = {this.state.datascanned} />
                </View>
                <View style={{flex:1, justifyContent:'flex-start', alignItems: 'center'}}>
                <Icon 
                    containerStyle={{}}
                    reverse
                    size = {30}
                    name='cancel'
                    color='red'
                    onPress={() => this.props.navigation.navigate('Home')} 
                    />
                </View>
                        
            </View>
        );
    }
    return (
            <View style = {{flex: 1, flexDirection: 'column'}}>
                <View style={styles.container}>
                    {this.state.hasCameraPermission === null ?
                        <Text>Requesting for camera permission</Text> :
                        this.state.hasCameraPermission === false ?
                        <Text>Camera permission is not granted</Text> :
                        <BarCodeScanner
                            torchMode="off"
                            onBarCodeRead={this._handleBarCodeRead}
                            style={{ height: 0.25*height, width: 0.90*width, marginTop: 20}}
                        />
                    }

                </View>
                <View style={{flex:3, }}>
                        <Icon 
                        containerStyle={{position: 'absolute', bottom: 0, right: 0}}
                        reverse
                        size = {30}
                        name='cancel'
                        color='red'
                        onPress={() => this.props.navigation.navigate('Home')} 
                        />

                </View>
            
            </View>
    );
}
_handleBarCodeRead = ({ type, data }) => {
    const result = JSON.parse(data);
    this.setState({
        datascanned: result,
        renderResult: true,
    })
    console.log(result);
  }
    
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'white',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  });
  

    