import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "native-base";

const xms = require("../../../Assets/Images/xms.jpg");
const gmaps = require("../../../Assets/Images/gmaps.jpg");

export default class Welcome extends React.Component {


  render() {

    return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', justifyContent: 'space-between'}}>

    <View style={{flex:2, alignItems: 'center', justifyContent:'center'}}>
        
    </View>
    <View style={{flex:3, alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontStyle: 'italic'}}> WELCOME TO </Text>
      <Image
        source={gmaps}
        style={{height: 200, width: 200,}}
      />
    </View>
    <View>
      <Button transparent light
      onPress={() => this.props.navigation.navigate('Login')}
      >
            <Text>Click Here To Start Using The App</Text>
      </Button>
    </View>
    <View style={{flex:1,}}>
      <Image
        source={xms}
        style={{height: 150, width: 150, marginBottom: 20, }}
      />
    </View>
 
    </View>
    );
  }
}