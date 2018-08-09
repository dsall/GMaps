import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';
import {Content, List, ListItem,Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Storage = require('../../Methods/Storage/storage');


export default class SettingsScreen extends Component {
    constructor() {
        super();
        this.state = {
          firstname: "",
          lastname: "",
          private: false,
          swcolor: "lightgray",
          prtext: "Public",
        };
      }

      privatePress = () =>{
        this.setState(state => ({
          private: !state.private,
        }));
      
       if(this.state.private){
         this.setState({
           swcolor: "green",
           prtext: "Private",
         })
       }
       else{
        this.setState({
          swcolor: "lightgray",
          prtext: "Public",
        })
       }
      }
      SignOut =  async () => {
        StoreData('uid', 'false');
        this.props.navigation.navigate('LogIn');
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

                     <Button style={{height: 40,
                            borderRadius: 5,
                            marginTop: 20,
                            marginHorizontal: 10,
                            backgroundColor: this.state.swcolor,}} iconLeft  full  onPress={this.privatePress} >
                        <Icon name='security' size={24} />
                        <Text style={styles.buttonText} >{this.state.prtext}</Text>
                    </Button>
            </View>
            <View style={{flex:1, justifyContent: 'flex-end',}}>

                <TouchableOpacity style={styles.button}  onPress={this.SignOut}>
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