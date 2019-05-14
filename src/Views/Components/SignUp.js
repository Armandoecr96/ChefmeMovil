import React, {Component} from 'react'
import {View, Button, TextInput, Alert} from 'react-native'
import axios from 'axios'


export default class SignUp extends Component {
 constructor (props) {
  super(props)
  this.state = {
    nameAndLastname: '',
    username: '',
    password: ''
  }
}

 doSignUp = () => {
  var headers = {
   'Content-Type': 'application/json'
  }
  var body = {
    user: this.state.username,
    password: this.state.password,
    type: 'USER'
   }
  axios.get('http://localhost:8080/signup', body, headers)
  .then((response) => {
   if (response.status == 200) {
    this.props.navigation.navigate('Home')
   } else {
    Alert.alert('Inválido', 'Campos inválidos')
   }
  })
  .catch((error) => {
   Alert.alert('Error', 'Ha ocurrido un error en el servidor')
  }) 
 }

 render() {
  return (
   <View>
    <TextInput placeholder='Nombre y Apellido' onChangeText={(nameAndLastname) => this.setState({nameAndLastname: nameAndLastname})} />
    <TextInput placeholder='Usuario' onChangeText={(username) => this.setState({username: username})} />
    <TextInput placeholder='Contraseña' onChangeText={(password) => this.setState({password: password})} />
    <Button title="Registrar" transparent on onPress={this.doSignUp} />
   </View>
  )
 }
}