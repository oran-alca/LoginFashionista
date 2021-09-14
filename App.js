import React, { Component } from "react";
import {
  View,
  StatusBar
} from 'react-native';

import Login from './src/Login'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={true} backgroundColor={"transparent"}  />
        <Login/>
      </View>
    )
  }
}