import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import { Avatar } from 'react-native-elements';

class SettingsScreen extends React.Component {

	render() {
    return (
      <Container style={{}}>
      
        <Content>
        <Avatar
          overlayContainerStyle={{justifyContent: 'center', alignItems:'center'}}
          large={true}
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          height={50}
        />

          <Card style={{marginTop: 35}}>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>

           </Card>

           <Card style={{marginTop: 35}}>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>

           </Card>


           <Card style={{marginTop: 35}}>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>

           </Card>
           
        </Content>
      </Container>
    );
  }
  
}

export default SettingsScreen;