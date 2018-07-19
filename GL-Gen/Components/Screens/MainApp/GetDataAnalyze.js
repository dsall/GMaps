import React, { Component } from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Alert , Button} from 'react-native';
import { coorddrag, coordinate } from './mainpage';
import {  Form, Item, Input, Label } from 'native-base';
import QRCode from 'react-native-qrcode';

var datagrabbed = require('./mainpage').coordinate;
var pluscode = require('../../Algortithme/pluscodealgo').encode;


export default class DataAnalysis extends Component {

  render() {
    return (

     <View style={{flex:1}}> 
        <Text>GL-Code: {(pluscode(coorddrag[0]['latitude'], coorddrag[0]['longitude']))}</Text>
        <QRCode
          value= {pluscode(coorddrag[0]['latitude'], coorddrag[0]['longitude'])}
          size={200}
          bgColor='purple'
          fgColor='white'
          style={{marginTop:20}}
        />
        <TouchableOpacity style={{justifyContent: 'center', paddingTop: 20}}>
          <Button title="Submit your digital address" />
        </TouchableOpacity>
        

     </View>
      
    );
  }
}
