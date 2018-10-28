import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body, List, ListItem } from 'native-base'
import fondo from '../Assets/fondo.jpg'
import axios from 'axios'

export default class RecetDetails extends Component {
  constructor(props){
    super(props)
    this.props = {
      key
    }
  }

  componentDidMount = () => {
    axios.get('/user?ID=12345')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {

    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        title: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        title: 'Vice Chairman'
      }
    ]

    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={fondo} />
                <Body>
                  <Text>NativeBase</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={fondo} style={{height: 200, width: '100%', flex: 1}} />
                <List>
                {list.map((x, key) => {
                  return(
                    <ListItem key={key}>
                      <Text>{'• ' + x.name}</Text>
                    </ListItem>
                  )
                })}
                </List>
                <Text style={{marginTop: 24}}>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
