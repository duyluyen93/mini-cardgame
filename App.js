import React, { Component } from 'react';
import { YellowBox } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import Home from './components/Home.js';
import Game from './levels/Game.js'

YellowBox.ignoreWarnings(["Warning: Failed", "Setting a timer"])

const Chuyen = createStackNavigator({
  Home: Home,
  Game: Game
}, {
    headerMode: "none"
  })

  const New = createStackNavigator({
    Game: Game,
    Home: Home
  }, {
      headerMode: "none"
    })

export default class App extends Component {
  render() {
    return (
      <New />
    );
  }
}