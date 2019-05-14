import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { List, ListItem } from 'react-native-elements'
import axios from 'axios'

export default class ResultList extends Component {
  constructor(props){
    super(props)
    /*this.props = {
      finalList
    }*/
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
      <View>
        <List>
          {
            list.map((item, key) => (
              <ListItem
                roundAvatar
                avatar={{uri: item.avatar_url}}
                key={key}
                title={item.title}
                leftIcon={{name: item.icon}}
                onPress={() => this.props.navigation.navigate('RecetDetails', {key: key})}
              />
            ))
          }
        </List>
      </View>
    )
  }
}
