import React from 'react';
import { Text} from 'react-native';
import { coorddrag} from '../AddingAddress/MapAdd';
import QRCode from 'react-native-qrcode';


var pluscode = require('../../algorithme/pluscodealgo').encode;

var lastdata = coorddrag.length - 1;


const GL_Code = () => {
    return (
        <Text>GL-Code: {(pluscode(coorddrag[coorddrag.length - 1]['latitude'], coorddrag[coorddrag.length - 1]['longitude']))}</Text>  

    );

}

const QR_Code = () => {
    <QRCode
          value= {pluscode(coorddrag[coorddrag.length - 1]['latitude'], coorddrag[coorddrag.length - 1]['longitude'])}
          size={200}
          bgColor='black'
          fgColor='white'
          style={{marginTop:20}}
        />
}

export default GL_Code;

