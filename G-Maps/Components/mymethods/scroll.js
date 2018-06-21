import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Color from 'react-native-material-color';


const imagedetails = [

    {
        "name" : 'Ibou',
        "URI": 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1200px-Flag_of_Senegal.svg.png'

    },
    {
        "name" : 'Dakar',
        "URI": 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160429142952-06-senegal-bourdain.jpg'

    },
    {
        "name" : 'Ibou',
        "URI": 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1200px-Flag_of_Senegal.svg.png'

    },
    {
        "name" : 'Dakar',
        "URI": 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160429142952-06-senegal-bourdain.jpg'

    },
    {
        "name" : 'Ibou',
        "URI": 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1200px-Flag_of_Senegal.svg.png'

    },
    {
        "name" : 'Dakar',
        "URI": 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160429142952-06-senegal-bourdain.jpg'

    }


];


ScrollingImages = (props) => {
   return props.data_array.map(function(items, i){
        return (
            <View key={i}>
            <View style={{height:130, width: 130, paddingLeft:10,}}>
            <View style={{flex:2}}>
                  <Image source =  {{uri: items.URI}}
                  style={{flex:1, width:null, height:null, resizeMode: 'cover'}} />
            </View>
            <View  style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
                <Text> {items.name}</Text>
            </View>
         </View>
         </View>
        );
      });
   
}

ScrollBar = (props) => {
    return(
        <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
              <Text style={{fontSize:24, fontWeight: '700', alignItems: 'center', justifyContent: 'center', }} >
                {props.name_category}
              </Text>
              <View style={{height:130, marginTop:20}}>
                  <ScrollView horizontal={true}>
                      <ScrollingImages data_array = {props.data} />
                  </ScrollView>              
              </View>
          </View>
    );
}


ScrollBarVertical = (props) => {
    return(
        <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
              <Text style={{fontSize:24, fontWeight: '700', alignItems: 'center', justifyContent: 'center', }} >
                {props.name_category}
              </Text>
              <View style={{height: 276, marginTop:20}}>
                  <ScrollView horizontal={false}>
                      <ScrollingImages data_array = {props.data} />
                  </ScrollView>              
              </View>
          </View>
    );
}



      
const FavoriteScreenData = () => {
    return(
        <View  style={{flex:1,  }} > 
        <ScrollView
          scrollEventThrottle = {16}
        >
          <View style={{flex: 1,}}>
           <ScrollBar style={{flex: 1}} name_category='Favorite Places' data={imagedetails}/> 
           <ScrollBar style={{flex: 1}} name_category='Recent Adresses' data={imagedetails}/> 

        </View>
        <View style = {{flex: 1, backgroundColor: 'blue'}} >
           <ScrollBarVertical name_category='Adressbook' data={imagedetails}/> 
        </View>

        </ScrollView>  
  </View>

  
    );
}


export default FavoriteScreenData;