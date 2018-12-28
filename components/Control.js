import React, { Component } from 'react'
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import { Button } from 'native-base'
import PropTypes from 'prop-types'
import home from '../image/home.png'
import pause from '../image/pause.png'
import restart from '../image/restart.png'
import CountDown, { t } from './Countdown'

export default class Control extends Component {
  static propTypes = {
    home_click: PropTypes.func,
    pause_click: PropTypes.func,
    restart_click: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.paused = false
  }

  _pause() {
    if (!this.paused) {
      this.pause = true;
      clearInterval(t);
      console.log(this.paused)
    }
  }

  run() {
    t
    console.log("Chạy")
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
        <Button onPress={this.run.bind(this)}> 
        <Text> Chạy </Text></Button>
        <TouchableOpacity onPress={this._pause.bind(this)}>
          <Image source={pause} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.restart_click}>
          <Image source={restart} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.home_click}>
          <Image source={home} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 93 / 3,
    height: 93 / 3
  }
})