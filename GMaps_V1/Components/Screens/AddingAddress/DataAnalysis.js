import React from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import { coorddrag} from './MapScreen';
import QRCode from 'react-native-qrcode';


var pluscode = require('../../Methods/GLCode/pluscodealgo').encode;
var decode = require('../../Methods/GLCode/pluscodealgo').decode;

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const Code = () => {
    return pluscode(coorddrag[coorddrag.length - 1]['latitude'], coorddrag[coorddrag.length - 1]['longitude']);
}


export const decodeGLCode = (GLCODE) => {
    var decoded = decode(GLCODE);
    return ({'latitude': decoded.latitudeCenter, 'longitude': decoded.longitudeCenter});
}

const GL_Code = () => {
    return(
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
    <View style={{flex:1}}>
    <Text style={styles.glcode}>{Code()}</Text>
    </View>
    <View style={{flex:1}}>
    <QRCode
          value= {Code()}
          size={0.3*width}
          bgColor='black'
          fgColor='white'
          style={{marginTop:20}}
    />
    </View>
    </View>
    );
}


const styles = StyleSheet.create({
    glcode: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        
    },
});


export default GL_Code;





