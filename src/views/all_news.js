import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Icon, Content, List, ListItem, Text, Thumbnail, Image } from 'native-base';

class AllNews extends Component {
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
          </List>
        </Content>
      </Container>
    );
  }
}

export default AllNews;
