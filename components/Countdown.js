import React, { Component } from 'react'
import { Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
// import MainData from './MainData'

export var t;
export default class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phut: this.props.phut,
      giay: this.props.giay,
      pressed: false,
      animate: '',
      mau: '#355f7a',
      vien: 'rgb(53, 95, 122)'
    }
    // 7a3535
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  two_numbers() {
    !this.isCancelled && this.setState({
      giay: this.state.giay - 1
    });
    if (this.state.giay < 10 && this.state.giay.toString().length < 2) {
      this.setState({
        giay: "0" + this.state.giay
      })
    }
    if (this.state.giay == '00' && this.state.phut != 0) {
      setTimeout(() => {
        this.setState({
          giay: 59,
          phut: this.state.phut - 1
        })
      }, 1000)
    }
    if (this.state.giay < 10 && this.state.phut == 0) {
      this.setState({
        animate: this.props.animate,
        mau: '#c84949',
        vien: '#7a3535'
      })
    }
    if (this.state.giay == '00' && this.state.phut == 0) {
      clearInterval(t);
      this.setState({
        animate: '',
      });
      // Alert.alert("Thua rồi!")
    }
  }

  change() {
    if (this.state.pressed == false) {
      this.setState({
        pressed: true
      })
      this.two_numbers();

      t = setInterval(() => {
        this.two_numbers()
      }, 1000);
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={setTimeout(() => this.change(), 2500)} style={styles.overall}>
        {/* <TouchableOpacity onPress={this.change()}> */}
        <Animatable.View
          animation={this.state.animate}
          iterationCount='infinite'
          iterationDelay={500}>
          <Text style={
            [styles.clock,
            { color: this.state.mau, textShadowColor: this.state.vien }]
          }>
            {this.state.phut}:{this.state.giay}
          </Text>
        </Animatable.View>
      </TouchableOpacity>
    )
  }
}

CountDown.propTypes = {
  phut: PropTypes.number,
  giay: PropTypes.number,
  animate: PropTypes.string
}

const styles = StyleSheet.create({
  clock: {
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'TUV-Montserrat-Regular',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1
  },
  overall: {
    position: "absolute",
    alignSelf: "center",
    marginTop: -7
  }
})

// .projects {
//   font-size: 13px;
//   font-family: "TUV Montserrat";
//   color: rgb(53, 95, 122);
//   line-height: 2.308;
//   text-align: left;
//   text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.75);
//   position: absolute;
//   left: 342px;
//   top: 831.313px;
//   z-index: 204;
// }
