import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity  } from 'react-native';
import Loading from '../../Screens/Loading and Splash/Loading';

export default class MyPlaces extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true,}
  }

  componentDidMount(){
    return fetch('https://b6914eed.ngrok.io/AddAddress/5b5a764aefae0f03e0e9a42f')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
    if(this.state.dataSource.Response === 'private'){
        return(
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>   
                <Text>This is a private address, contact the person to get the address</Text>
          </View>
        );
    }
    return(
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>        
            <Text>{JSON.stringify(this.state.dataSource)} </Text>
      </View>
    );
  }
}
