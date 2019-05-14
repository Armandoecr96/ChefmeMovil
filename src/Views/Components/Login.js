import React, {Component} from 'react'
import {View, Button, TextInput, Text, Alert} from 'react-native'
import axios from 'axios'


export default class Login extends Component {
 constructor (props) {
  super(props)
  this.state = {
    username: '',
    password: ''
  }
}

 doLogin = () => {
  var headers = {
   'Content-Type': 'application/json'
  }
  var body = {
   user: this.state.username,
   password: this.state.password
  }
  axios.post('http://localhost:8080/login', JSON.stringify(body), headers)
  .then((response) => {
   if (response.status == 200) {
    this.props.navigation.navigate('Home')
   } else {
    Alert.alert('Inválido', 'Credenciales inválidas')
   }
  })
  .catch((error) => {
   Alert.alert('Error', 'Ha ocurrido un error en el servidor')
  }) 
 }

 render() {
  return (
   <View style={{flex:1, justifyContent: "center"}}>
    <View style={{flex:1}}>
     <TextInput style={{alignSelf: "center"}} placeholder='Usuario' onChangeText={(username) => this.setState({username: username})} />
     <TextInput style={{alignSelf: "center"}} placeholder='Contraseña' onChangeText={(password) => this.setState({password: password})} />
     <Button style={{flex:1}}title="Iniciar" transparent on onPress={this.doLogin} />
    </View>
    <View style={{flex:3}}>
     <Text style={{marginTop: 20, alignSelf: "center"}} onPress={() => this.props.navigation.navigate('SignUp')}>Crear una cuenta</Text>
    </View>
   </View>
  )
 }
}