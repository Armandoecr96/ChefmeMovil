import React, {Component} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import { Container, Thumbnail, Content, Button, Icon } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import logo from '../Assets/logo.png'
import almuerzo from '../Assets/almuerzo.png'
import desayuno from '../Assets/desayuno.png'
import cena from '../Assets/cena.png'
import antojo from '../Assets/antojo.png'

export default class Dashboard extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Grid>
          <Row size={2}><Col style={{alignItems: 'center', paddingTop: '16%'}}><Image
            alt='CheffMe'
            style={{width: 200, height: 200, borderRadius: 100}}
            source={logo}
          /></Col></Row>
          <Row size={1}>
            <Col style={{width: 200, paddingLeft: '8%', marginTop: 16}}>
              <Button onPress={() => this.props.navigation.navigate('SearchList', {typeFood: 'Breakfast'})}>
                <Image
                  style={{width: 150, height: 150}}
                  source={desayuno}
                />
              </Button>
            </Col>
            <Col style={{width: 200, paddingLeft: '8%', marginTop: 16}}>
              <Button onPress={() => this.props.navigation.navigate('SearchList', {typeFood: 'Launch'})}>
                <Image
                  style={{width: 150, height: 150}}
                  source={almuerzo}
                />
              </Button>
            </Col>
          </Row>
          <Row size={1}>
            <Col style={{width: 200, paddingLeft: '8%', marginTop: 16}}>
              <Button onPress={() => this.props.navigation.navigate('SearchList', {typeFood: 'Dinner'})}>
                <Image
                  style={{width: 150, height: 150}}
                  source={cena}
                />
              </Button>
            </Col>
            <Col style={{width: 200, paddingLeft: '8%', marginTop: 16}}>
              <Button onPress={() => this.props.navigation.navigate('SearchList', {typeFood: 'Dessert'})}>
                <Image
                  style={{width: 150, height: 150}}
                  source={antojo}
                />
              </Button>
            </Col>
          </Row>
        </Grid>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingLeft: '25%',
    paddingRight: '25%'

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  }
})
