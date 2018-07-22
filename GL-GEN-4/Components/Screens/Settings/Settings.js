import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';
import { Container, Header, Content, List, ListItem} from 'native-base';
import * as firebase from 'firebase';




export default class Settings extends Component {

onSignoutPress = () => {
    firebase.auth().signOut();
    }
    render(){
        return(

            <View style = {{flex:1}}>
            <View style={{flex:1, justifyContent: 'center', alignItems:'center', marginTop: 50}}>
                <Image 
                style={{width:150, height:150, borderRadius: 150}}
                source= {{uri: "https://www.w3schools.com/w3images/avatar2.png"}} 
                />
            </View>
            <View style={{flex:3}}>
                    <Content>
                    <List>
                        <ListItem>
                        <Text>Language</Text>
                        </ListItem>
                        <ListItem>
                        <Text>Security</Text>
                        </ListItem>
                        <ListItem>
                        <Text>Emergency Contact</Text>
                        </ListItem>
                    </List>
                    </Content>
            </View>
            <View style={{flex:1, justifyContent: 'flex-end',}}>

                <TouchableOpacity style={styles.button}  onPress={this.onSignoutPress}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>

            </View>

        );
    }
}


const styles = StyleSheet.create({

    button:{
      backgroundColor: '#42A5F5',
      height: 40,
      borderRadius: 5,
      marginHorizontal: 10,
      bottom: 10,
    },
  
    buttonText:{
      fontSize: 24,
      fontWeight: '300',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      
    },

  });