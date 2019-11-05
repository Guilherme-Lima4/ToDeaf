import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

// import the different screens
import Loading from './Loading'
import Cadastro from './Cadastro'
import Login from './Login'
import Main from './Main'

// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading: {
      screen: Loading,

      navigationOptions: {
        headerLeft: null
    },
    
    Cadastro: {
      screen: Cadastro,

      navigationOptions: {
        headerLeft: null
    },
    
    Login: {
      screen: Login,

      navigationOptions: {
        headerLeft: null
    },
    
    Main: {
      screen: Main,

      navigationOptions: {
        headerLeft: null
    }
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App