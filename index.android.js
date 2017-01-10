/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
import { Container, Header, Title, Button, Icon, Content, List, ListItem, Text, Thumbnail } from 'native-base';

export default class arctic_this_week extends Component {
  render() {
    return (
      <Container>
      <Content>
        <Header style={{backgroundColor: 'white'}}>
          <Button transparent>
            <Icon name='md-menu' style={{color: 'black'}}/>
          </Button>
          
          <Title style={{fontFamily: 'calendas_plus_bold', color: 'black', paddingLeft: 50}}>The Arctic This Week</Title>
          
          <Button transparent>
            <Icon name='md-more' style={{color: 'black'}}/>
          </Button>
        </Header>
        <Image 
          style={{ width: Dimensions.get('window').width, height: (Dimensions.get('window').height / 3) }}
          source={{uri: 'https://images.unsplash.com/photo-1473654729523-203e25dfda10?dpr=1&auto=format&fit=crop&w=1000&h=500&q=80&cs=tinysrgb&crop='}}
        />
        <List style={{marginLeft: -15}}>
          <ListItem style={{paddingRight: 5}}>
              <Thumbnail square size={0} />
              <Text style={{fontFamily: 'knile-semibolditalic'}}>Improving Internet Speeds for 20,000 Greenlanders</Text>
              <Text style={{fontFamily: 'knile-semibolditalic', fontSize: 9, marginTop: -10, color: 'grey'}}>5.30 pm ET | The Arctic Institute</Text>
              <Text style={{fontFamily: 'calendas_plus'}} note>Extension of an undersea cable and an upgrade to modern microwave frameworks</Text>
          </ListItem>
          <ListItem style={{paddingRight: 5}}>
              <Thumbnail square size={0} />
              <Text style={{fontFamily: 'knile-semibolditalic'}}>Icelander swap city lights for Northern Lights</Text>
              <Text style={{fontFamily: 'knile-semibolditalic', fontSize: 9, marginTop: -10, color: 'grey'}}>5.30 pm ET | The Arctic Institute</Text>
              <Text style={{fontFamily: 'calendas_plus'}} note>Residents of Iceland's Reykjavik, were encouraged to turn off their lights last Wednesday</Text>
          </ListItem>
          <ListItem style={{paddingRight: 5}}>
              <Thumbnail square size={0} />
              <Text style={{fontFamily: 'knile-semibolditalic'}}>Canada reconsiders US missile defense</Text>
              <Text style={{fontFamily: 'knile-semibolditalic', fontSize: 9, marginTop: -10, color: 'grey'}}>5.30 pm ET | The Arctic Institute</Text>
              <Text style={{fontFamily: 'calendas_plus'}} note>Canadia parliamentary committee recommends the government reconsider its earlier stance</Text>
          </ListItem>
          <ListItem style={{paddingRight: 5}}>
              <Thumbnail square size={0} />
              <Text style={{fontFamily: 'knile-semibolditalic'}}>First Arctic Science Ministerial, Washington D.C</Text>
              <Text style={{fontFamily: 'knile-semibolditalic', fontSize: 9, marginTop: -10, color: 'grey'}}>5.30 pm ET | The Arctic Institute</Text>
              <Text style={{fontFamily: 'calendas_plus'}} note>Science ministers from 25 countries convened in Washington D.C for the inaugural meeting.</Text>
          </ListItem>
        </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('arctic_this_week', () => arctic_this_week);
