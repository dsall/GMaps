import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';

class SettingsScreen extends React.Component {

	render() {
    return (
      <Container>
      
        <Content>
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