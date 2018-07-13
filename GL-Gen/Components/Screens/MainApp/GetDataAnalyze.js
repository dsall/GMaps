import React, { Component } from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Alert } from 'react-native';
import { coorddrag, coordinate } from './mainpage';
import QRCode from 'react-native-qrcode';

var datagrabbed = require('./mainpage').coordinate;
var pluscode = require('../../Algortithme/pluscodealgo').encode;


export default class DataAnalysis extends Component {

  render() {
    return (

     <View style={{flex:1}}> 
        <Text>Pluscode: {(pluscode(coorddrag[0]['latitude'], coorddrag[0]['longitude']))}</Text>
        <Text>Pluscode: {(pluscode(coorddrag[1]['latitude'], coorddrag[1]['longitude']))}</Text>
        <Text>Pluscode: {(pluscode(coorddrag[2]['latitude'], coorddrag[2]['longitude']))}</Text>
        <Text>Pluscode: {(pluscode(coorddrag[3]['latitude'], coorddrag[3]['longitude']))}</Text>
        <Text>Pluscode: {(pluscode(coorddrag[4]['latitude'], coorddrag[4]['longitude']))}</Text>
        <QRCode
          value= {pluscode(coorddrag[0]['latitude'], coorddrag[0]['longitude'])}
          size={200}
          bgColor='purple'
          fgColor='white'
          style={{marginTop:20}}
        />

     </View>
      
    );
  }
}
