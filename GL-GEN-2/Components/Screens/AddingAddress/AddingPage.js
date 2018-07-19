import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

import { Thumbnail, Header, Content, Card, CardItem, Body, Left } from 'native-base';

import GL_Code from './GetAndAnalyzeData';

export default class AddingPage extends Component {
  
  render() {
    return (
   
      <Content style={{marginTop: 30, marginHorizontal: 20}}>
          <Card>
            <CardItem header>
              <Left>
                  <Thumbnail source={require('../../../Assets/Images/gmapslogo.png')} />
                  <Body>
                    <Text>Your Digital Addres</Text>
                    <Text note>Need to submit</Text>
                  </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <View style={{}}>
                <Text> Your GL_Code is:</Text>
                <GL_Code />
                </View>
              </Body>
            </CardItem>
          
         </Card>
        </Content>


      
    );
  }
}

const styles = StyleSheet.create({
 

});