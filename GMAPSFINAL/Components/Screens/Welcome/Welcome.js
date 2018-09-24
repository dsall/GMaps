import React from "react";
import { Image } from "react-native";
import {Text, View , Button} from 'react-native';




const xms = require("../../../Assets/Images/xms.jpg");
const gmaps = require("../../../Assets/Images/gmaps.jpg");



export default class WelcomeScreen extends React.Component {


  render() {

    return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', justifyContent: 'space-between'}}>

    <View style={{flex:2, alignItems: 'center', justifyContent:'center'}}>
        
    </View>
    <View style={{flex:3, alignItems: 'center'}}>
      <Image
        source={gmaps}
        style={{height: 200, width: 200,}}
      />
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