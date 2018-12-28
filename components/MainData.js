import React, { Component } from 'react';
import { Dimensions, StyleSheet, FlatList, TouchableWithoutFeedback, Alert } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import card from '../image/card.png';
import { t } from './Countdown'

export default class MainData extends Component {
  constructor(props) {
    super(props)
    this.view = {};
    this.opened = 0;
    this.preValue = undefined
    this.state = {
      list: this.props.cardlist,
    }
    console.log(this.state.list)
  }
  chuyen_phu(x) {
    this.state.list[x].default = card;
    setTimeout(() => this.view[x].flipOutY(500), 500);
    // console.log("OK cái " + x) 
  }

  chuyen(get_anh, get_index) {
    if (this.preValue === undefined) {
      this.view[get_index].flipInY(500);

      this.preValue = { get_anh: get_anh, get_index: get_index };
      get_indextruoc = this.preValue.get_index;
      get_anhtruoc = this.preValue.get_anh;
      // console.log(get_indextruoc)

      this.state.list[get_indextruoc].default = this.state.list[get_indextruoc].anh
      this.setState({ list: this.state.list })
    }
    else {
      this.view[get_index].flipInY(500)
      this.state.list[get_index].default = this.state.list[get_index].anh;
      this.setState({ list: this.state.list });

      // 2 quân giống nhau:
      if (get_anhtruoc === get_anh && get_indextruoc !== get_index) {
        setTimeout(() => {
          this.view[get_indextruoc].bounce(500),
            this.view[get_index].bounce(500)
        }, 500);
        setTimeout(() => this.view[get_indextruoc].flipOutX(500), 1000);
        setTimeout(() => this.view[get_index].flipOutX(500), 1000);
        setTimeout(() => {
          this.state.list[get_index].default = card,
          this.state.list[get_indextruoc].default = card
        }, 500)

        this.setState({ list: this.state.list })

        this.opened++;

        if (this.opened == this.props.cardlist.length / 2) {
          setTimeout(() => Alert.alert("Xong"), 2000);
          clearInterval(t)
        }
      }

      // 2 quân khác nhau
      else {
        setTimeout(() => { this.chuyen_phu(get_indextruoc), this.chuyen_phu(get_index) }, 0)
        setTimeout(() => {
          this.view[get_indextruoc].flipInY(500),
            this.view[get_index].flipInY(500),
            this.setState({ list: this.state.list })
        }, 1000)
      }
      this.preValue = undefined
    }
  }

  render() {
    return (
      <FlatList
        style={styles.manhinh_level}
        data={this.state.list}
        numColumns={this.props.column}
        extraData={this.state}
        renderItem={({ item, index }) =>
          <Animatable.View
            ref={a => this.view[index] = a}
            animation='bounceIn'
            iterationDelay={1000}
            opacity={0}
          >
            <TouchableWithoutFeedback onPress={() => { this.chuyen(item.anh, index) }}>
              <Animatable.Image source={item.default}
                style={this.props.zoom}
                animation={this.props.animation}
                iterationCount='infinite'
                iterationDelay={2000}
                duration={500}>
              </Animatable.Image>
            </TouchableWithoutFeedback>
          </Animatable.View>
        }
      />
    )
  }
}

MainData.propTypes = {
  cardlist: PropTypes.any.isRequired,
  animation: PropTypes.string,
  column: PropTypes.number,
  zoom: PropTypes.object,
}
MainData.defaultProps = {
  column: 4,
  animation: 'pulse',
}

var cao = Dimensions.get("window").height;
var rong = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  anh_nen: {
    height: cao,
    width: rong,
    padding: 10
  },
  card_small: {
    height: 780 / 12,
    width: 600 / 12,
    margin: 10
  },
  card_medium: {
    height: 780 / 10,
    width: 600 / 10,
    margin: 10
  },
  card_big: {
    height: 780 / 8,
    width: 600 / 8,
    margin: 10
  },
  manhinh_level: {
    alignSelf: 'center',
  }
})

Animatable.initializeRegistryWithDefinitions({
  flipInY: {
    easing: 'ease-in',
    style: {
      backfaceVisibility: 'visible',
      perspective: 400,
    },
    0: {
      opacity: 1,
      rotateY: '90deg',
    },
    0.4: {
      rotateY: '-40deg',
    },
    0.6: {
      opacity: 1,
      rotateY: '20deg',
    },
    0.8: {
      rotateY: '-10deg',
    },
    1: {
      opacity: 1,
      rotateY: '0deg',
    },
  },
  flipOutY: {
    0: {
      opacity: 1,
      rotateY: '0deg',
    },
    1: {
      opacity: 1,
      rotateY: '-90deg',
    },
  }
})