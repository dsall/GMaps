import React from 'react';
import { View, ScrollView, } from 'react-native';
import {Text,  Card, Button, Tile, Icon } from 'react-native-elements';

class AddScreen extends React.Component {

    render() {
        return ( 
            <ScrollView>
            <View style = {{justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
            <Card 
             title='Official Address'
             image={{uri: 'http://xalimasn.com/wp-content/uploads/2017/07/carte-identite-assane.png'}}
             imageProps={{width: 360, height: 200}}
            >
            <Text style={{  textAlign: 'center', // <-- the magic
                            fontWeight: 'bold',
                            fontSize: 15,
                            marginTop: 0,
                           }}>
                                You can add an official adress using the camera and scanning an ID Card. 
                                This Help us make sure that an address have been only added once, and avoid 
                                duplicates. 
            </Text>
             <Button
            icon={<Icon name='code' type='evilicon' color='black' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='SCAN YOUR ID' />
            </Card>
            <Card 
             title='Friend Address'
             image={{uri: 'http://snapcreek.com/wp-content/uploads/friend.jpg'}}
             imageProps={{width: 360, height: 200}}
            >
            <Text style={{  textAlign: 'center', // <-- the magic
                            fontWeight: 'bold',
                            fontSize: 15,
                            marginTop: 0,
                           }}>
                                You can scan their QR-Code or Enter their GL-Code. 
                                Click on the camera Icon or the GL-Icon.
            </Text>
             <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
             <Button
            icon={<Icon name='code' type='evilicon' color='black' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='GL-Code' />
            <Button
            icon={<Icon name='code' type='evilicon' color='black' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='QR-Code' />
            </View>
            </Card>
            <Card 
             title='Official Address'
             image={{uri: 'https://www.edx.org/sites/default/files/course/image/featured-card/business-immersion-illustration_318x210.jpg'}}
             imageProps={{width: 360, height: 200}}
            >
            <Text style={{  textAlign: 'center', // <-- the magic
                            fontWeight: 'bold',
                            fontSize: 15,
                            marginTop: 0,
                           }}>
                                You can add a business, by scanning your Ninea Document and adding the picture.  
            </Text>

             <Button
            icon={<Icon name='code' type='evilicon' color='black' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='SCAN The DOC' />
            </Card>
            </View>
            </ScrollView>
            
        );
    }
}

export default AddScreen;