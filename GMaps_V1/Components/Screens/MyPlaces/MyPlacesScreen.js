import React, { Component } from 'react';
import { WebView,  StyleSheet , View, ScrollView, TouchableOpacity, Image, Share} from 'react-native';
const Storage = require('../../Methods/Storage/storage');
import {CardItem, Body, Thumbnail, Left, Right, Switch, Text} from 'native-base';

import QRCode from 'react-native-qrcode';
import { Card, ListItem, Button, SocialIcon, Icon } from 'react-native-elements'

var height = 50;
export default class AddressView extends Component {

ShareAddress = () => {
  Share.share({
    message: 'A framework for building native apps using React',
    url: 'http://facebook.github.io/react-native/',
    title: 'React Native'
    }, {
      dialogTitle: 'Share React Native website',

      tintColor: 'green'
    })
    .then(alert('shared'))
    .catch((error) => this.setState({result: 'error: ' + error.message}));
  }

render(){

  return(
    <View>
    <Card containerStyle={{borderRadius: 5}}>
      <View style={{flexDirection: 'row'}}>
      <View style={{flex:1,}}>
                        <ListItem 
                        title='Djibril Sall'
                        leftIcon={{name: 'person', color : '#42A5F5' }}
                        hideChevron={true}
                        />
                        <ListItem 
                        title='+15134490428'
                        leftIcon={{name: 'phone', color : '#42A5F5'}}
                        hideChevron={true}
                        leftIconOnLongPress={() =>console.log('pressed')}
                        />
                        <ListItem 
                        title='86FQ4CVJPF'
                        leftIcon={{name: 'home', color : '#42A5F5'}}
                        hideChevron={true}
                        />
      </View>
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <QRCode
            value= '86FQ4CVJPF'
            size={125}
            bgColor='black'
            fgColor='white'
            style={{marginTop:20}}
      />
      </View>
      </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
        <Icon
        raised
        name='directions-car'
        color='#42A5F5'
        onPress={() => console.log('car')} />
        <Icon
        raised
        name='security'
        color='#42A5F5'
        onPress={() => console.log('car')} />
        <Icon
        raised
        name='directions-bus'
        color='#42A5F5'
        onPress={() => console.log('bus')} />
        <Icon
        raised
        name='share'
        color='#42A5F5'
        onPress={() => this.ShareAddress()} />
    </View>

    </Card>
    
    </View>

  );
}
}


export class MyPlacesScreen extends Component {

  constructor() {
    super();
    this.state = {
      Name: '',
      Address: '',
      Phone: '',
      Private: '',
      height: 100,
      showInfo: 'false'
    };
    this.GetMyAddress();
  }
GetMyAddress = async () => {
    var MyAddress = await GetData('MyAddress');
    this.setState({Name: MyAddress.first_name + MyAddress.last_name,
                   Address: MyAddress.Home_Address,
                  Phone: MyAddress.phone,
                  Private: MyAddress.private,
                  });
    // console.log(this.state);
    return MyAddress;
}
componentDidMount(){
  this.GetMyAddress();
}

ShowMyInfo = () => {
  this.setState({showInfo: !this.state.showInfo});
  if(this.state.showInfo){
    this.refs.scrollView.scrollToEnd();
  }
  else{
    this.refs.scrollView.scrollTo({y:0, animated: true});
  }
}
  render() {
    return (
        <View style={styles.root}>
        
        <ScrollView ref="scrollView"  horizontal={false} contentContainerStyle={{ borderColor: 'white', borderWidth: 5 }}>
        <View style={{flex:3}}>
        <ScrollView  horizontal={false} contentContainerStyle={{ flex: 1, borderColor: 'white', borderWidth: 5 }}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box2} />
        </ScrollView>
        </View>
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', borderColor: '#42A5F5' }}>
          <TouchableOpacity onPress={() => this.ShowMyInfo()}>
            <View style={{ justifyContent: 'center', alignItems:'center', marginBottom: 0}}>
              <Image 
              style={{width:70, height:70, borderRadius: 70, justifyContent:'center'}}
              source= {{uri: "https://www.w3schools.com/w3images/avatar2.png"}} 
              />
            </View>
             <AddressView />
          </TouchableOpacity>
        </View>
        </ScrollView >
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: 10,
  },
  box1: {
    height: 200,
    backgroundColor: 'green'
  },
  box2: {
    height: 200,
    backgroundColor: 'blue'
  }
});