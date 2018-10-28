import React, {Component} from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import { Container, Item, Input, Icon, Button, Text, Content, Picker } from 'native-base'
import { List, ListItem } from 'react-native-elements'

export default class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredient: '',
      quantity: 0,
      ingredientList: [],
      selected: ''
    }
  }

  addIngredient = () => {
    if(this.state.ingredient === ''){
      alert('No ha puesto ningún ingrediente')
    } else {
      if(this.state.ingredientList.length >= 20){
        alert('Ya no puede agregar más ingredientes')
        this.setState({ingredient: '', quantity: '', selected: ''})
        this.inputIng._root.clear();
        this.inputCant._root.clear();
      } else {
        newIngredient = {
          ingredient: this.state.ingredient,
          quantity: this.state.quantity,
          selected: this.state.selected
        }
        this.setState({ingredient: '', quantity: '', selected: ''})
        this.inputIng._root.clear();
        this.inputCant._root.clear();
        this.state.ingredientList.push(newIngredient)
      }
    }
  }

  deleteingredientList = (key) => {
    var array = [...this.state.ingredientList]
    array.splice(key, 1)
    this.setState({ingredientList: array})
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  search = () => {
    this.props.navigation.navigate('ResultList')
  }

  render () {
    return (
      <Container>
        <Content searchBar rounded>
          <Item style={{marginLeft: 16, marginRight: 4}}>
            <Icon name='ios-search' />
            <Input ref={(ref) => { this.inputIng = ref }} placeholder='Ingrediente' onChangeText={(ingredient) => this.setState({ingredient: ingredient})} />
            <Input  ref={(ref) => { this.inputCant = ref }} placeholder='Cantidad' keyboardType='numeric' onChangeText={(quantity) => this.setState({quantity: quantity})} />
            <Picker
              note
              mode="dropdown"
              style={{ width: 15 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Kg" value="Kilos" />
              <Picker.Item label="Gr" value="Gramo" />
              <Picker.Item label="Pzs" value="Pieza" />
              <Picker.Item label="L" value="Litro" />
            </Picker>
            <Button transparent on onPress={this.addIngredient}><Text>Add</Text></Button>
          </Item>
        <ScrollView>
          <List containerStyle={{marginBottom: 20}}>
            {
              this.state.ingredientList.map((list, key) => (
                <ListItem
                  leftIcon={{name: 'restaurant-menu'}}
                  key={key}
                  title={list.ingredient}
                  subtitle={list.quantity + ' ' + list.selected}
                  rightIcon={{name: 'delete'}}
                  onPressRightIcon={() => this.deleteingredientList(key)}
                />
              ))
            }
            </List>
            </ScrollView>
            <Button style={styles.buttom} onPress={this.search}>
            <Text >Search</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  buttom: {
    marginLeft: '40%',
    marginTop: 24
  }
})
