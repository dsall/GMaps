import React from 'react';
import {View} from 'react-native';

import QRCode from 'react-native-qrcode';
import { Card, ListItem, Icon } from 'react-native-elements';




export default  AddressView = (props) => {
    var text = JSON.stringify(props.data);
    return(
        <View>
        <Card containerStyle={{borderRadius: 5}}>
          <View style={{flexDirection: 'row'}}>
          <View style={{flex:1,}}>
                            <ListItem 
                            title={props.data.Name}
                            leftIcon={{name: 'person', color : '#42A5F5' }}
                            hideChevron={true}
                            />
                            <ListItem 
                            title={props.data.Phone}
                            leftIcon={{name: 'phone', color : '#42A5F5'}}
                            hideChevron={true}
                            leftIconOnLongPress={() =>console.log('pressed')}
                            />
                            <ListItem 
                            title={props.data.Address.substring(4,7)+'+'+props.data.Address.substring(7,10)}
                            leftIcon={{name: 'home', color : '#42A5F5'}}
                            hideChevron={true}
                            />
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <QRCode
                value= {`${text}`}
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
            onPress={() => carPressed()} />
            <Icon
            raised
            name='security'
            color='#42A5F5'
            />
            <Icon
            raised
            name='directions-bus'
            color='#42A5F5'
            onPress={() => console.log('bus')} />
            <Icon
            raised
            name='share'
            color='#42A5F5'
            />
        </View>
    
        </Card>
        
        </View>
    
      );
}