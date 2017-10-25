import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage,Button} from 'react-native';
import { auth,db } from './src/Firebase'
import {StackNavigator} from "react-navigation";
import {
  Circle,
  Join,
  SignIn,
  SignUp,
  store,
  Invite,
  ViewCircle,
  CreateCircle
} from './src'
import Container from './Container'
import {Provider} from 'react-redux'
const Stack = StackNavigator({
  Home: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  },
  Invite: {
    screen: Invite
  },
  Join: {
    screen: Join
  },
  Circle: {
    screen: Circle
  },
  ViewCircle: {
    screen: ViewCircle
  },
  CreateCircle: {
    screen: CreateCircle
  }

})
export default class App extends Component {
  // SignOut(){
  //   auth.signOut()
  // }
  render() {
    return (
      <Provider store={store}>
        {/* <Container> */}
        {/* <View> */}
          <Stack />
        
        {/* </View> */}
        {/* </Container> */}
      </Provider>
    )
  }
};
